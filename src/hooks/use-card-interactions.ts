import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { ArticleData } from "../components/knowledge-card/types";

export const useCardInteractions = (
  outputValue: string,
  articleData: ArticleData | null,
  theme?: string,
) => {
  // Flip state
  const [isFlipped, setIsFlipped] = useState(false);

  // Modal state
  const [showLinksModal, setShowLinksModal] = useState(false);

  // Reset flip state when theme changes
  useEffect(() => {
    setIsFlipped(false);
  }, [theme]);

  // Flip handlers
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleFlip();
    }
  };

  const resetFlip = () => {
    setIsFlipped(false);
  };

  // Modal handlers
  const handleShowLinks = () => {
    setShowLinksModal(true);
  };

  const handleCloseLinks = () => {
    setShowLinksModal(false);
  };

  // Copy handlers
  const handleCopyFront = async () => {
    try {
      let contentToCopy = outputValue;

      if (articleData?.mermaidMarkdown) {
        const { ...dataWithoutMermaid } = articleData;
        const jsonString = JSON.stringify(dataWithoutMermaid, null, 2);
        contentToCopy = `\`\`\`json\n${jsonString}\n\`\`\``;
      }

      await navigator.clipboard.writeText(contentToCopy);
      toast("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      toast("Failed to copy, please try again");
    }
  };

  const handleCopyBack = async () => {
    try {
      const contentToCopy = articleData?.mermaidMarkdown || "";
      await navigator.clipboard.writeText(contentToCopy);
      toast("Mermaid content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      toast("Failed to copy, please try again");
    }
  };

  return {
    // Flip state and handlers
    isFlipped,
    handleFlip,
    handleKeyDown,
    resetFlip,

    // Modal state and handlers
    showLinksModal,
    handleShowLinks,
    handleCloseLinks,

    // Copy handlers
    handleCopyFront,
    handleCopyBack,
  };
};
