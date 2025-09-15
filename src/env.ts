export function env() {
  const EMBEDDING_CHUNK_SIZE = Number(process.env.EMBEDDING_CHUNK_SIZE) || 2048;
  const EMBEDDING_CHUNK_OVERLAP =
    Number(process.env.EMBEDDING_CHUNK_OVERLAP) || 100;
  const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL ?? "text-embedding-004";
  const EMBEDDING_PROVIDER = process.env.EMBEDDING_PROVIDER ?? "google";
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  const GOOGLE_CSE_API_KEY = process.env.GOOGLE_CSE_API_KEY;
  const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID;
  const LLM_NAME = process.env.LLM_NAME ?? "gemini-2.5-flash-preview-05-20";
  const LLM_PROVIDER = process.env.LLM_PROVIDER ?? "google";
  const GOOGLE_APPLICATION_CREDENTIALS_CONTENT =
    process.env.GOOGLE_APPLICATION_CREDENTIALS_CONTENT;
  const SITE_URL = process.env.SITE_URL ?? "http://localhost:4321";

  return {
    EMBEDDING_CHUNK_SIZE,
    EMBEDDING_CHUNK_OVERLAP,
    EMBEDDING_MODEL,
    EMBEDDING_PROVIDER,
    GOOGLE_API_KEY,
    GOOGLE_CSE_API_KEY,
    GOOGLE_CSE_ID,
    LLM_NAME,
    LLM_PROVIDER,
    SITE_URL,
    GOOGLE_APPLICATION_CREDENTIALS_CONTENT,
  };
}
