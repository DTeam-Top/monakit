import { ExternalLink } from "lucide-react";
import type React from "react";
import type { CardLinkProps } from "./types";
import { isValidUrl } from "./types";

const CardLink: React.FC<CardLinkProps> = ({ title, url }) => {
  if (url) {
    return (
      <button
        type="button"
        id="card-a"
        title={url}
        className="card-a-link cursor-pointer flex items-center gap-2 transition-all duration-300 w-full border-0 bg-transparent p-0"
        style={{
          color: "var(--card-link-color)",
          textDecoration: "none",
        }}
        onClick={() => {
          if (isValidUrl(url)) {
            window.open(url, "_blank");
          }
        }}
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
      >
        <span className="truncate flex-1">{title}</span>
        <ExternalLink
          className="w-4 h-4 flex-shrink-0"
          style={{ color: "var(--card-link-color)" }}
        />
      </button>
    );
  }

  return (
    <span className="flex items-center gap-2 transition-all duration-300 w-fit">
      {title}
    </span>
  );
};

export default CardLink;
