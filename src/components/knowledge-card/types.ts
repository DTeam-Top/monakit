import type React from "react";
import type { Branch } from "./structure-display";

export interface ArticleData {
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
}

export interface PakoContent {
  pakoValue: string;
  cleanedText: string;
  structureText: {
    root: string;
    branches: Branch[];
  };
}

export interface CardTheme {
  backgroundClass: string;
}

export interface KnowledgeCardProps {
  outputValue: string;
  url?: string;
  isLoading: boolean;
  theme?: string;
  tags?: string[];
}

export interface CardActionsProps {
  isFlipped: boolean;
  articleData: ArticleData;
  pakoContent: PakoContent | null;
  url?: string;
  onShowLinks: () => void;
  onCopyFront: () => void;
  onCopyBack: () => void;
}

export interface CardFrontProps {
  articleData: ArticleData;
  url?: string;
  cardStyles: React.CSSProperties;
  cardTheme: CardTheme;
  tags?: string[];
}

export interface CardBackProps {
  articleData: ArticleData;
  pakoContent: PakoContent | null;
  url?: string;
  cardStyles: React.CSSProperties;
  cardTheme: CardTheme;
  tags?: string[];
}

export interface CardLinkProps {
  title: string;
  url: string | null;
}

export interface CardSourceProps {
  title: string;
  url: string | null;
  alignment?: "left" | "right";
  className?: string;
}

export interface LinksModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardStyles: React.CSSProperties;
  references?: { title: string; url: string | null }[];
  tools?: { title: string; url: string | null }[];
}

export const isValidUrl = (url: string | null): boolean => {
  if (!url) return false;
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
};

// Astro component types
export interface Tag {
  tag: string;
  count?: number;
  size: number;
}

export interface Card {
  id: string;
  title: string;
  template: string;
}

export interface CardCoverProps {
  title: string;
  template: string;
  size?: "small" | "medium";
}

export interface CardsPageProps {
  cards: Card[];
  tags: Tag[];
  tag: string;
}
