import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
  variant?: "table" | "card";
}

export function Pagination({
  current,
  pageSize,
  total,
  onChange,
  variant = "table",
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);
  const [inputPage, setInputPage] = useState<string>("");

  const handlePageInput = (value: string) => {
    const numValue = value.replace(/[^\d]/g, "");
    setInputPage(numValue);
  };

  const handleJumpToPage = () => {
    const pageNum = Number.parseInt(inputPage, 10);
    if (pageNum && pageNum >= 1 && pageNum <= totalPages) {
      onChange(pageNum);
      setInputPage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleJumpToPage();
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-4 sm:px-6 py-4",
        variant === "table"
          ? "border-t bg-muted/50 border-border"
          : "bg-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">共 {total} 条</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-1.5">
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onChange(1)}
            disabled={current === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onChange(current - 1)}
            disabled={current === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            第 {current} 页，共 {totalPages} 页
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onChange(current + 1)}
            disabled={current >= totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onChange(totalPages)}
            disabled={current >= totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center border rounded border-border min-w-fit">
            <Input
              type="text"
              value={inputPage}
              onChange={(e) => handlePageInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="h-7 sm:h-8 w-16 text-center border-0 rounded-0 text-xs sm:text-sm px-1"
              placeholder="跳转页码"
              aria-label="跳转页码"
            />
            <div className="border-l border-border h-full" />
            <Button
              variant="outline"
              size="sm"
              className="h-7 sm:h-8 border-0 rounded-0 text-xs sm:text-sm px-2 sm:px-3"
              onClick={handleJumpToPage}
              disabled={
                !inputPage ||
                Number.parseInt(inputPage, 10) < 1 ||
                Number.parseInt(inputPage, 10) > totalPages
              }
            >
              跳转
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
