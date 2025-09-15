import { join } from "node:path";
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "fs";
import { glob } from "glob";

export class SlideImageProcessor {
  private contentDir = "src/content/slides";
  private publicDir = "public/slides";

  async copySlideImages(): Promise<void> {
    console.log("🖼️  Processing slide images...");

    try {
      // Find all slide directories
      const slidePatterns = await glob(`${this.contentDir}/**/`, {
        ignore: ["**/node_modules/**"],
      });

      for (const slideDir of slidePatterns) {
        await this.processSlideDirectory(slideDir);
      }

      console.log("✅ Slide images processed successfully");
    } catch (error) {
      console.error("❌ Error processing slide images:", error);
    }
  }

  private async processSlideDirectory(slideDir: string): Promise<void> {
    const imgsDir = join(slideDir, "imgs");

    if (!existsSync(imgsDir)) {
      return; // No images directory
    }

    // Extract slide path (e.g., "2025-09" from "src/content/slides/2025-09/")
    const slidePath = slideDir
      .replace(`${this.contentDir}/`, "")
      .replace(/\/$/, "");

    if (!slidePath) {
      return; // Skip root directory
    }

    const targetDir = join(this.publicDir, slidePath, "imgs");

    // Create target directory if it doesn't exist
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    // Copy all images
    const files = readdirSync(imgsDir);

    for (const file of files) {
      const sourcePath = join(imgsDir, file);
      const targetPath = join(targetDir, file);

      // Only copy if it's a file and doesn't exist or is newer
      if (statSync(sourcePath).isFile()) {
        const shouldCopy =
          !existsSync(targetPath) ||
          statSync(sourcePath).mtime > statSync(targetPath).mtime;

        if (shouldCopy) {
          copyFileSync(sourcePath, targetPath);
          console.log(`📋 Copied: ${slidePath}/imgs/${file}`);
        }
      }
    }
  }
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const processor = new SlideImageProcessor();
  processor.copySlideImages();
}
