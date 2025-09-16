import { Copy, Link, Share2 } from "lucide-react";
import type React from "react";
import { memo } from "react";
import { MERMAID_LIVE_BASE_URL } from "@/consts";
import { ShareMenu } from "../share-menu";
import type { CardActionsProps } from "./types";
import { isValidUrl } from "./types";

const CardActions: React.FC<CardActionsProps> = memo(
  ({
    isFlipped,
    articleData,
    pakoContent,
    url,
    onShowLinks,
    onCopyFront,
    onCopyBack,
  }) => {
    return (
      <div className="absolute -top-3 right-1 md:top-26 md:right-[-80px] md:-translate-y-1/2 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-3 z-30">
        {!isFlipped && (
          <button
            type="button"
            className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group"
            title="Links"
            onClick={(e) => {
              e.stopPropagation();
              onShowLinks();
            }}
          >
            <Link className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
          </button>
        )}

        {isFlipped && (
          <button
            type="button"
            className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group"
            title="Mermaid chart"
            onClick={(e) => {
              e.stopPropagation();
              if (pakoContent?.pakoValue) {
                const mermaidUrl = `${MERMAID_LIVE_BASE_URL}/edit#pako:${pakoContent.pakoValue}`;
                if (isValidUrl(mermaidUrl)) {
                  window.open(mermaidUrl, "_blank");
                }
              }
            }}
          >
            <img
              src="/cards/mermaid.svg"
              alt="Mermaid"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </button>
        )}

        <button
          type="button"
          className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group"
          title="Copy content"
          onClick={(e) => {
            e.stopPropagation();
            if (isFlipped) {
              onCopyBack();
            } else {
              onCopyFront();
            }
          }}
        >
          <Copy className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
        </button>

        <ShareMenu
          name={`Found a knowledge card: ${articleData?.title}`}
          description={articleData?.description}
          url={url || window.location.href}
          customTrigger={
            <button
              type="button"
              className="cursor-pointer w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center group"
              title="Share"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Share2 className="w-4 h-4 md:w-5 md:h-5 text-gray-600 group-hover:text-gray-800" />
            </button>
          }
        />
      </div>
    );
  },
);

CardActions.displayName = "CardActions";

export default CardActions;
