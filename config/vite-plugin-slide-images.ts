import type { Plugin } from "vite";
import { SlideImageProcessor } from "../scripts/slide-images";

export function slideImagesPlugin(): Plugin {
  const processor = new SlideImageProcessor();
  let isProcessing = false;

  return {
    name: "slide-images",

    // Process images during build start
    buildStart() {
      if (!isProcessing) {
        isProcessing = true;
        processor.copySlideImages().finally(() => {
          isProcessing = false;
        });
      }
    },

    // Watch for changes during development
    configureServer(server) {
      // Process images on server start
      processor.copySlideImages();

      // Watch for changes in slide content directories
      server.watcher.add("src/content/slides/**/imgs/**/*");

      server.watcher.on("add", (file) => {
        if (file.includes("src/content/slides") && file.includes("/imgs/")) {
          console.log(`🖼️  New slide image detected: ${file}`);
          processor.copySlideImages();
        }
      });

      server.watcher.on("change", (file) => {
        if (file.includes("src/content/slides") && file.includes("/imgs/")) {
          console.log(`🖼️  Slide image changed: ${file}`);
          processor.copySlideImages();
        }
      });

      server.watcher.on("unlink", (file) => {
        if (file.includes("src/content/slides") && file.includes("/imgs/")) {
          console.log(`🖼️  Slide image removed: ${file}`);
          // Note: We don't automatically remove from public/ to avoid breaking existing references
        }
      });
    },
  };
}
