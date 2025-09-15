import type React from "react";
import { memo } from "react";
import CardLink from "./card-link";
import type { LinksModalProps } from "./types";

const LinksModal: React.FC<LinksModalProps> = memo(
  ({ isOpen, onClose, cardStyles, references = [], tools = [] }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 border-0 p-0 cursor-default"
        role="dialog"
        aria-modal="true"
        aria-labelledby="links-modal-title"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClose();
          }
        }}
      >
        <div
          className="bg-white rounded-lg p-6 max-w-md md:max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto knowledge-card-modal"
          style={cardStyles}
          role="document"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h3
              id="links-modal-title"
              className="text-lg font-semibold text-gray-800"
            >
              Related links
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer text-xl hover:opacity-70 transition-opacity text-gray-600"
              aria-label="Close dialog"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {references && references.length > 0 && (
              <div>
                <h4 className="font-medium mb-3 text-gray-800">
                  Related literature
                </h4>
                <div className="space-y-3">
                  {references.map((ref, index) => (
                    <div key={`ref-${ref.title}-${index}`} className="text-sm">
                      <CardLink title={ref.title} url={ref.url} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tools && tools.length > 0 && (
              <div>
                <h4 className="font-medium mb-3 text-gray-800">
                  Related tools
                </h4>
                <div className="space-y-3">
                  {tools.map((tool, index) => (
                    <div
                      key={`tool-${tool.title}-${index}`}
                      className="text-sm"
                    >
                      <CardLink title={tool.title} url={tool.url} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

LinksModal.displayName = "LinksModal";

export default LinksModal;
