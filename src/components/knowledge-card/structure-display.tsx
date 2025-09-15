import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface SubBranch {
  title: string;
  leaves: string[];
}

export interface Branch {
  title: string;
  subBranches: SubBranch[];
}

interface StructureText {
  root: string;
  branches: Branch[];
}

interface StructureDisplayProps {
  structureText: StructureText;
}

const BranchCard: React.FC<{
  branch: Branch;
}> = ({ branch }) => {
  return (
    <Card className="transition-all duration-300 bg-white/50 border-slate-100 w-full">
      <CardHeader className="p-3 pb-0">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="branch-card-title text-sm font-semibold transition-colors">
            {branch.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between p-3 pt-0">
        <div className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          <div className="space-y-3">
            {branch.subBranches.map((subBranch, subBranchIndex) => (
              <div
                key={`${branch.title}-${subBranchIndex}`}
                className={`sub-branch-container ${
                  subBranch.leaves.length > 0
                    ? "bg-white/70 rounded-md p-2 border border-slate-200"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm leading-tight text-left">
                    {subBranch.title}
                  </h4>
                </div>
                {subBranch.leaves.length > 0 && (
                  <div className="ml-4 space-y-1.5">
                    {subBranch.leaves.map((leaf, leafIndex) => (
                      <div
                        key={`${subBranch.title}-${leafIndex}`}
                        className="flex items-start gap-2.5 leaf-item"
                      >
                        <span className="text-left text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          <span className="font-bold">-</span> {leaf}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const StructureDisplay: React.FC<StructureDisplayProps> = ({
  structureText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else if (window.innerWidth < 1536) setColumns(3);
      else setColumns(4);
    };

    let timeoutId: NodeJS.Timeout;
    const debouncedUpdateColumns = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateColumns, 100);
    };

    updateColumns();
    window.addEventListener("resize", debouncedUpdateColumns);
    return () => {
      window.removeEventListener("resize", debouncedUpdateColumns);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!structureText.branches?.length) {
    return (
      <div className="structure-display-container">
        <div className="text-sm text-center py-8">No Mindmap Data</div>
      </div>
    );
  }

  const distributeCards = () => {
    const columnArrays: (typeof structureText.branches)[] = Array.from(
      { length: columns },
      () => [],
    );

    structureText.branches.forEach((branch, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(branch);
    });

    return columnArrays;
  };

  const cardColumns = distributeCards();

  return (
    <section
      className="structure-display-container"
      aria-labelledby="structure-title"
    >
      <div className="container mx-auto px-3">
        <div
          ref={containerRef}
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {cardColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}-${column.length > 0 ? column[0]?.title : "empty"}`}
              className="flex flex-col gap-4"
            >
              {column.map((branch) => (
                <BranchCard
                  key={`${branch.title}-${columnIndex}`}
                  branch={branch}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureDisplay;
