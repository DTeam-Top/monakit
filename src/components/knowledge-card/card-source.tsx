import type React from "react";
import CardLink from "./card-link";
import type { CardSourceProps } from "./types";

const CardSource: React.FC<CardSourceProps> = ({
  title,
  url,
  alignment = "right",
  className = "",
}) => {
  return (
    <div
      className={`card-key-point text-sm flex items-center gap-1 ${
        alignment === "left" ? "justify-start" : "justify-end"
      } ${className}`}
    >
      <div className="text-sm flex-shrink-0">Source:</div>
      <div className="min-w-0">
        <CardLink title={title} url={url} />
      </div>
    </div>
  );
};

export default CardSource;
