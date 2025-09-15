import { useEffect, useState } from "react";

interface ArticleData {
  title: string;
  url?: string;
  description: string;
  keyPoints: string[];
  references: {
    title: string;
    url: string | null;
  }[];
  tools: {
    title: string;
    url: string | null;
  }[];
  mermaidMarkdown: string;
  tags?: string[];
}

const isValidArticleData = (data: unknown): data is ArticleData => {
  if (!data || typeof data !== "object") return false;
  const article = data as ArticleData;
  return (
    typeof article.title === "string" &&
    typeof article.description === "string" &&
    Array.isArray(article.keyPoints) &&
    article.keyPoints.every((point) => typeof point === "string") &&
    Array.isArray(article.references) &&
    article.references.every(
      (ref) =>
        typeof ref === "object" &&
        ref !== null &&
        typeof ref.title === "string" &&
        (typeof ref.url === "string" || ref.url === null),
    ) &&
    Array.isArray(article.tools) &&
    article.tools.every(
      (tool) =>
        typeof tool === "object" &&
        tool !== null &&
        typeof tool.title === "string" &&
        (typeof tool.url === "string" || tool.url === null),
    )
  );
};

const extractJsonFromMarkdown = (markdown: string): string | null => {
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)```/;
  const match = markdown.match(jsonBlockRegex);
  return match ? match[1].trim() : null;
};

export const useCardData = (outputValue: string, tags?: string[]) => {
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  useEffect(() => {
    if (!outputValue) {
      setArticleData(null);
      return;
    }

    try {
      const jsonContent = extractJsonFromMarkdown(outputValue);
      if (!jsonContent) {
        setArticleData(null);
        return;
      }
      const parsed = JSON.parse(jsonContent);
      if (isValidArticleData(parsed)) {
        setArticleData({ ...parsed, tags });
      } else {
        console.error("Invalid article data structure:", parsed);
        setArticleData(null);
      }
    } catch (e) {
      console.error("Failed to parse article data:", e);
      setArticleData(null);
    }
  }, [outputValue, tags]);

  return { articleData };
};
