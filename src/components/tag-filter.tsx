import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-is-mobile";

export interface Tag {
  tag: string;
  count?: number;
  size: number;
}
interface TagFilterProps {
  tags: Tag[];
  currentTag?: string | null;
  type?: "blogs" | "cards" | "slides";
  usedFor?: "list" | "detail";
}

export function TagFilter({
  tags: allTags,
  currentTag: tag,
  type = "blogs",
  usedFor = "list",
}: TagFilterProps) {
  const [selectedTags] = useState<string[]>(tag ? [tag] : []);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const handleTagClick = (tag: string | null) => {
    if (tag === null) {
      window.location.href = `/${type}`;
    } else {
      window.location.href = `/${type}?tag=${tag}`;
    }
  };

  const visibleTags = isMobile && !showAll ? allTags.slice(0, 8) : allTags;

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {usedFor === "list" && (
        <Button
          variant={selectedTags.length === 0 ? "default" : "outline"}
          size="sm"
          onClick={() => handleTagClick(null)}
          className={`transition-colors ${selectedTags.length === 0 ? "text-white bg-slate-400 hover:bg-slate-400/90" : "border border-slate-400 text-slate-400 hover:text-emerald-400"}`}
        >
          All
        </Button>
      )}
      {visibleTags.map((tag) => (
        <Button
          key={tag.tag}
          variant={selectedTags.includes(tag.tag) ? "default" : "outline"}
          size="sm"
          onClick={() => handleTagClick(tag.tag)}
          className={`transition-colors ${selectedTags.includes(tag.tag) ? "text-white bg-slate-400 hover:bg-slate-400/90" : "border-slate-400 text-slate-400 hover:text-emerald-400"}`}
        >
          {tag.tag}
          {tag.count && `(${tag.count})`}
        </Button>
      ))}
      {isMobile && allTags.length > 8 && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAll((v) => !v)}
          className="transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-400 border-slate-400 hover:text-emerald-400"
        >
          {showAll ? "Collapse" : "Expand More"}
        </Button>
      )}
    </div>
  );
}
