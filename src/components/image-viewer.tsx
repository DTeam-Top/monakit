"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useReducer, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageViewerProps {
  selector?: string;
}

type ViewerAction =
  | { type: "OPEN_IMAGE"; src: string; alt: string }
  | { type: "CLOSE_IMAGE" }
  | { type: "IMAGE_LOADED" }
  | { type: "IMAGE_ERROR"; error?: string };

type ViewerState = {
  image: string | null;
  alt: string;
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
};

function viewerReducer(state: ViewerState, action: ViewerAction): ViewerState {
  switch (action.type) {
    case "OPEN_IMAGE":
      return {
        image: action.src,
        alt: action.alt || "",
        isOpen: true,
        isLoading: true,
        error: null,
      };
    case "CLOSE_IMAGE":
      return {
        ...state,
        isOpen: false,
      };
    case "IMAGE_LOADED":
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case "IMAGE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error || "图片加载失败",
      };
    default:
      return state;
  }
}

const imageEventHandlers = new WeakMap<
  HTMLImageElement,
  { enter: EventListener; leave: EventListener; click: EventListener }
>();

export const ImageViewer: React.FC<ImageViewerProps> = ({
  selector = "article img",
}) => {
  const [state, dispatch] = useReducer(viewerReducer, {
    image: null,
    alt: "",
    isOpen: false,
    isLoading: false,
    error: null,
  });

  const dispatchRef = useRef(dispatch);

  useEffect(() => {
    dispatchRef.current = dispatch;
  });

  useEffect(() => {
    for (const img of document.querySelectorAll(selector)) {
      if (!(img instanceof HTMLImageElement)) continue;

      const handlers = imageEventHandlers.get(img);
      if (handlers) {
        img.removeEventListener("mouseenter", handlers.enter);
        img.removeEventListener("mouseleave", handlers.leave);
        img.removeEventListener("click", handlers.click);
        img.style.cursor = "";
        imageEventHandlers.delete(img);
      }
    }

    for (const img of document.querySelectorAll(selector)) {
      if (!(img instanceof HTMLImageElement)) continue;

      img.style.cursor = "zoom-in";
      const originalFilter = img.style.filter;

      const handleMouseEnter = () => {
        img.style.transition = "filter 0.2s ease";
        img.style.filter = "brightness(90%)";
      };

      const handleMouseLeave = () => {
        img.style.filter = originalFilter;
      };

      const handleClick = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        dispatchRef.current({
          type: "OPEN_IMAGE",
          src: img.src,
          alt: img.alt || "",
        });
      };

      img.addEventListener("mouseenter", handleMouseEnter);
      img.addEventListener("mouseleave", handleMouseLeave);
      img.addEventListener("click", handleClick);

      imageEventHandlers.set(img, {
        enter: handleMouseEnter,
        leave: handleMouseLeave,
        click: handleClick,
      });
    }

    return () => {
      for (const img of document.querySelectorAll(selector)) {
        if (!(img instanceof HTMLImageElement)) continue;

        const handlers = imageEventHandlers.get(img);
        if (handlers) {
          img.removeEventListener("mouseenter", handlers.enter);
          img.removeEventListener("mouseleave", handlers.leave);
          img.removeEventListener("click", handlers.click);
          img.style.cursor = "";
          imageEventHandlers.delete(img);
        }
      }
    };
  }, [selector]);

  const handleDialogChange = (open: boolean) => {
    if (!open) dispatch({ type: "CLOSE_IMAGE" });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "CLOSE_IMAGE" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      dispatch({ type: "CLOSE_IMAGE" });
    }
  };

  const handleImageLoad = () => {
    dispatch({ type: "IMAGE_LOADED" });
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const img = e.currentTarget;
    dispatch({
      type: "IMAGE_ERROR",
      error: `无法加载图片: ${img.src}`,
    });
  };

  return (
    <>
      {state.image ? (
        <Dialog open={state.isOpen} onOpenChange={handleDialogChange}>
          <DialogContent
            hideCloseButton
            className="cursor-pointer p-0 overflow-hidden bg-black/0 border-0 shadow-none sm:max-w-[95vw] sm:rounded-lg"
          >
            <DialogTitle className="sr-only hidden">图片查看器</DialogTitle>
            <DialogDescription className="sr-only hidden">
              放大查看文章中的图片
            </DialogDescription>
            <div
              className="relative w-full h-full flex justify-center items-center"
              onClick={handleImageClick}
              onKeyDown={handleKeyDown}
            >
              {state.isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                </div>
              )}

              {state.error ? (
                <div className="flex flex-col items-center justify-center p-6 text-center bg-black/10 rounded-lg">
                  <span className="text-red-500 mb-2">⚠️ {state.error}</span>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (state.image) {
                        dispatch({
                          type: "OPEN_IMAGE",
                          src: state.image,
                          alt: state.alt,
                        });
                      }
                    }}
                  >
                    重试加载
                  </button>
                </div>
              ) : (
                <div className="max-h-[90vh] max-w-[90vw] cursor-pointer">
                  <img
                    src={state.image}
                    alt={state.alt}
                    className="object-contain "
                    onClick={handleImageClick}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    onKeyDown={handleKeyDown}
                    aria-label="关闭图片查看器"
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};
