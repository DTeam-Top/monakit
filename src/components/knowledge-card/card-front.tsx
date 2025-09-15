import type React from "react";
import { forwardRef, memo } from "react";
import CardContainer from "./card-container";
import type { CardFrontProps } from "./types";

const CardFront = memo(
  forwardRef<HTMLDivElement, CardFrontProps>(
    ({ articleData, url, cardStyles, cardTheme, tags }, ref) => {
      return (
        <CardContainer
          ref={ref}
          articleData={articleData}
          url={url}
          cardStyles={cardStyles}
          cardTheme={cardTheme}
          tags={tags}
          transform="rotateY(0deg)"
          className="hover:-translate-y-2"
        >
          <div className="flex px-6">
            <div className="flex-1 space-y-6">
              <div className="card-description text-left">
                {articleData.description} ✨
              </div>

              <div className="card-section-title text-left">
                Article Points:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articleData.keyPoints.map((point, index) => (
                  <div
                    key={`point-${point.substring(0, 20)}-${index}`}
                    className="flex items-start gap-3"
                  >
                    <div className="card-number flex-shrink-0">{index + 1}</div>
                    <div className="card-key-point pt-1 leading-relaxed min-w-0 text-left">
                      {point}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContainer>
      );
    },
  ),
);

CardFront.displayName = "CardFront";

export default CardFront;
