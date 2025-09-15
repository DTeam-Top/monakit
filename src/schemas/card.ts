import { z } from "zod";

export const CardMetadata = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  pubDate: z.coerce.date().optional(),
  template: z.string().default("blackWhite"),
});
