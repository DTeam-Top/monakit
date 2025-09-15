import type React from "react";
import { forwardRef } from "react";
import { TagFilter } from "../tag-filter";
import { Card, CardContent } from "../ui/card";
import CardSource from "./card-source";
import type { ArticleData, CardTheme } from "./types";

interface CardContainerProps {
  articleData: ArticleData;
  url?: string;
  cardStyles: React.CSSProperties;
  cardTheme: CardTheme;
  tags?: string[];
  transform: string;
  className?: string;
  children: React.ReactNode;
}

const CardContainer = forwardRef<HTMLDivElement, CardContainerProps>(
  (
    {
      articleData,
      url,
      cardStyles,
      cardTheme,
      tags,
      transform,
      className = "",
      children,
    },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        className={`card-face shadow-xl hover:shadow-2xl card-shadow-transition border-0 transition-all duration-500 ease-out rounded-2xl backface-hidden ${cardTheme.backgroundClass} ${className}`}
        style={{
          ...cardStyles,
          transform,
        }}
      >
        <CardContent className="pt-8 px-8 pb-4 relative z-10 flex flex-col">
          <div className="flex">
            <div className="mr-6 flex-shrink-0">
              <div className="card-decorative-line" />
            </div>
            <div className="w-full">
              <div className="card-title">{articleData.title}</div>

              {tags && tags.length > 0 && (
                <div className="mt-4 mb-4">
                  <TagFilter
                    tags={tags.map((tag) => ({ tag, size: 1 }))}
                    type="cards"
                    usedFor="detail"
                  />
                </div>
              )}
            </div>
          </div>

          {children}

          <div className="border-t border-gray-200/20 pt-4 mt-4 flex-shrink-0 overflow-hidden">
            <div className="flex">
              <div className="mr-6 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <CardSource
                  title={articleData.title}
                  url={url || articleData.url || ""}
                  alignment="right"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
);

CardContainer.displayName = "CardContainer";

export default CardContainer;
