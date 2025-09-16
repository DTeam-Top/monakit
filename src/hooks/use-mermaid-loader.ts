import { useEffect, useRef, useState } from "react";
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
  const [hasMounted, setHasMounted] = useState(false);
  const loadedMarkdownRef = useRef<string | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || !mermaidMarkdown) return;

    if (loadedMarkdownRef.current === mermaidMarkdown) {
      return;
    }

    if (!shouldPreload && pakoContent && loadedMarkdownRef.current) {
      return;
    }

    const loadMermaidImage = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await loadPako(mermaidMarkdown);
        setPakoContent(result || null);
        loadedMarkdownRef.current = mermaidMarkdown;
      } catch (err) {
        console.error("Failed to load mermaid image:", err);
        setError("Failed to load mermaid diagram");
        setPakoContent(null);
        loadedMarkdownRef.current = null;
      } finally {
        setIsLoading(false);
      }
    };

    loadMermaidImage();
  }, [hasMounted, mermaidMarkdown, shouldPreload]);

  return {
    pakoContent,
    isLoading,
    error,
  };
};
