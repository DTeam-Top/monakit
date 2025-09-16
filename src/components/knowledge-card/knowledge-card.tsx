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
  const [isFlipping, setIsFlipping] = useState(false);

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

  const handleFlipWithState = () => {
    setIsFlipping(true);
    handleFlip();
    setTimeout(() => {
      setIsFlipping(false);
      setTimeout(() => {
        if (
          containerRef.current &&
          frontCardRef.current &&
          backCardRef.current
        ) {
          const frontCard = frontCardRef.current;
          const backCard = backCardRef.current;

          const tempStyle = (card: HTMLDivElement) => {
            const original = {
              height: card.style.height,
              maxHeight: card.style.maxHeight,
              overflow: card.style.overflow,
            };
            card.style.height = "auto";
            card.style.maxHeight = "none";
            card.style.overflow = "visible";
            return original;
          };

          const frontOriginal = tempStyle(frontCard);
          const backOriginal = tempStyle(backCard);

          frontCard.offsetHeight;
          backCard.offsetHeight;

          const frontHeight = frontCard.getBoundingClientRect().height;
          const backHeight = backCard.getBoundingClientRect().height;

          Object.assign(frontCard.style, frontOriginal);
          Object.assign(backCard.style, backOriginal);

          const currentHeight = !isFlipped ? frontHeight : backHeight;
          containerRef.current.style.height = `${currentHeight}px`;
        }
      }, 100);
    }, 700);
  };

  useEffect(() => {
    if (
      containerRef.current &&
      frontCardRef.current &&
      backCardRef.current &&
      articleData
    ) {
      const updateHeight = () => {
        const frontCard = frontCardRef.current;
        const backCard = backCardRef.current;

        if (!frontCard || !backCard) return;

        const originalFrontStyles = {
          height: frontCard.style.height,
          maxHeight: frontCard.style.maxHeight,
          overflow: frontCard.style.overflow,
        };

        const originalBackStyles = {
          height: backCard.style.height,
          maxHeight: backCard.style.maxHeight,
          overflow: backCard.style.overflow,
        };

        frontCard.style.height = "auto";
        frontCard.style.maxHeight = "none";
        frontCard.style.overflow = "visible";

        backCard.style.height = "auto";
        backCard.style.maxHeight = "none";
        backCard.style.overflow = "visible";

        frontCard.offsetHeight;
        backCard.offsetHeight;

        const frontRect = frontCard.getBoundingClientRect();
        const backRect = backCard.getBoundingClientRect();

        const frontHeight = frontRect.height || 0;
        const backHeight = backRect.height || 0;

        frontCard.style.height = originalFrontStyles.height;
        frontCard.style.maxHeight = originalFrontStyles.maxHeight;
        frontCard.style.overflow = originalFrontStyles.overflow;

        backCard.style.height = originalBackStyles.height;
        backCard.style.maxHeight = originalBackStyles.maxHeight;
        backCard.style.overflow = originalBackStyles.overflow;

        let targetHeight: number;
        if (isFlipping) {
          targetHeight = Math.max(frontHeight, backHeight);
        } else {
          targetHeight = isFlipped ? backHeight : frontHeight;
        }

        if (containerRef.current && targetHeight > 0) {
          containerRef.current.style.height = `${targetHeight}px`;
        }
      };

      const timeouts = [0, 100, 300, 500];
      timeouts.forEach((delay) => {
        setTimeout(() => {
          requestAnimationFrame(updateHeight);
        }, delay);
      });

      let resizeObserver: ResizeObserver | null = null;

      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => {
          requestAnimationFrame(updateHeight);
        });

        if (frontCardRef.current) {
          resizeObserver.observe(frontCardRef.current);
        }
        if (backCardRef.current) {
          resizeObserver.observe(backCardRef.current);
        }
      }

      return () => {
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }
  }, [isFlipped, isFlipping, articleData, pakoContent]);

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
          onClick={handleFlipWithState}
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
