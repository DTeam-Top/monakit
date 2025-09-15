import { z } from "zod";

export const SlideMetadata = z.object({
  title: z.string(),
  author: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  pubDate: z.coerce.date().optional(),
  theme: z.string().default("beige"),
  transition: z.string().default("slide"),
  controls: z.boolean().default(true),
  progress: z.boolean().default(true),
});
