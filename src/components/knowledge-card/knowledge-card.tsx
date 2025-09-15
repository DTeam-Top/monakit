import { KNOWLEDGE_CARD_THEME } from "@/consts";
import { useCardData } from "@/hooks/use-card-data";
import { useCardInteractions } from "@/hooks/use-card-interactions";
import { useMermaidLoader } from "@/hooks/use-mermaid-loader";
import { createCardStyles } from "@/lib/utils";
import "@/styles/card.css";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_KNOWLEDGE_CARD_THEME } from "@/themes/knowledge-card-themes";
import CardActions from "./card-actions";
import CardBack from "./card-back";
import CardFront from "./card-front";
import LinksModal from "./links-modal";
import type { KnowledgeCardProps } from "./types";

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  outputValue,
  url,
  isLoading,
  theme = DEFAULT_KNOWLEDGE_CARD_THEME,
  tags,
}) => {
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldPreload, setShouldPreload] = useState(false);
  const { articleData } = useCardData(outputValue, tags);
  const { pakoContent } = useMermaidLoader(
    articleData?.mermaidMarkdown,
    shouldPreload,
  );
  const {
    isFlipped,
    handleFlip,
    handleKeyDown,
    showLinksModal,
    handleShowLinks,
    handleCloseLinks,
    handleCopyFront,
    handleCopyBack,
  } = useCardInteractions(outputValue, articleData, theme);

  const cardTheme = useMemo(
    () => KNOWLEDGE_CARD_THEME[theme] || KNOWLEDGE_CARD_THEME.blackWhite,
    [theme],
  );
  const cardStyles = useMemo(() => createCardStyles(theme), [theme]);

  const handleMouseEnter = () => {
    if (articleData?.mermaidMarkdown) {
      setShouldPreload(true);
    }
  };

  useEffect(() => {
    if (
      containerRef.current &&
      frontCardRef.current &&
      backCardRef.current &&
      articleData
    ) {
      const updateHeight = () => {
        const frontRect = frontCardRef.current?.getBoundingClientRect();
        const backRect = backCardRef.current?.getBoundingClientRect();

        const frontHeight = frontRect?.height || 0;
        const backHeight = backRect?.height || 0;
        const currentHeight = isFlipped ? backHeight : frontHeight;

        if (containerRef.current) {
          containerRef.current.style.height = `${currentHeight}px`;
        }
      };

      requestAnimationFrame(updateHeight);
    }
  }, [isFlipped, articleData]);

  if (isLoading && !outputValue) {
    return <span className="text-muted-foreground">Generating...</span>;
  }

  if (!articleData) {
    if (isLoading) {
      return <span className="text-muted-foreground">Generating...</span>;
    }
    return null;
  }

  return (
    <div className="flex items-center justify-center knowledge-card-background">
      <div ref={containerRef} className="relative w-full card-flip-container">
        <div
          className={`relative w-full card-flip cursor-pointer mt-2.5 md:mt-0 perspective-1000 transform-style-3d ${
            isFlipped ? "flipped" : ""
          }`}
          onClick={handleFlip}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Flip knowledge card"
          onMouseEnter={handleMouseEnter}
        >
          <CardFront
            ref={frontCardRef}
            articleData={articleData}
            url={url}
            cardStyles={cardStyles}
            cardTheme={cardTheme}
            tags={tags}
          />
          <CardBack
            ref={backCardRef}
            articleData={articleData}
            pakoContent={pakoContent}
            url={url}
            cardStyles={cardStyles}
            cardTheme={cardTheme}
            tags={tags}
          />
        </div>

        <CardActions
          isFlipped={isFlipped}
          articleData={articleData}
          pakoContent={pakoContent}
          url={url}
          onShowLinks={handleShowLinks}
          onCopyFront={handleCopyFront}
          onCopyBack={handleCopyBack}
        />
      </div>

      <LinksModal
        isOpen={showLinksModal}
        onClose={handleCloseLinks}
        cardStyles={cardStyles}
        references={articleData?.references}
        tools={articleData?.tools}
      />
    </div>
  );
};

export default KnowledgeCard;
