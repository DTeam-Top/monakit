import { useEffect, useState } from "react";
import type { Branch } from "@/components/knowledge-card/structure-display";
import { loadPako } from "@/lib/utils";

interface PakoContent {
  pakoValue: string;
  cleanedText: string;
  structureText: {
    root: string;
    branches: Branch[];
  };
}

export const useMermaidLoader = (
  mermaidMarkdown?: string,
  shouldPreload: boolean = false,
) => {
  const [pakoContent, setPakoContent] = useState<PakoContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMermaidImage = async () => {
      if (!mermaidMarkdown || (!shouldPreload && !pakoContent)) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await loadPako(mermaidMarkdown);
        setPakoContent(result || null);
      } catch (err) {
        console.error("Failed to load mermaid image:", err);
        setError("Failed to load mermaid diagram");
        setPakoContent(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadMermaidImage();
  }, [mermaidMarkdown, shouldPreload, pakoContent]);

  return {
    pakoContent,
    isLoading,
    error,
  };
};
