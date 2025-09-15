import type React from "react";
import { forwardRef, memo } from "react";
import CardContainer from "./card-container";
import StructureDisplay from "./structure-display";
import type { CardBackProps } from "./types";

const CardBack = memo(
  forwardRef<HTMLDivElement, CardBackProps>(
    ({ articleData, pakoContent, url, cardStyles, cardTheme, tags }, ref) => {
      return (
        <CardContainer
          ref={ref}
          articleData={articleData}
          url={url}
          cardStyles={cardStyles}
          cardTheme={cardTheme}
          tags={tags}
          transform="rotateY(-180deg)"
          className="card-back"
        >
          <div className="mb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {pakoContent && (
              <div className="px-4">
                <StructureDisplay structureText={pakoContent.structureText} />
              </div>
            )}
          </div>
        </CardContainer>
      );
    },
  ),
);

CardBack.displayName = "CardBack";

export default CardBack;
