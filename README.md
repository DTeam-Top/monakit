# MonaKit

An Astro-powered content platform featuring AI-driven research and presentation tools.

## Features

- **Knowledge Cards**: AI-generated research summaries and insights
- **Articles**: Blog posts and long-form content
- **Slide Presentations**: Interactive slides with reveal.js and image processing
- **AI Content Generation**: Automated content creation and processing using LangChain

## Tech Stack

- Astro 5 with SSR (Vercel deployment)
- React components with Radix UI
- TailwindCSS for styling
- AI integrations (Google Vertex AI, LangChain)
- Content collections (MDX support)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Generate content
npm run generate:blog
npm run generate:card

# Build for production
npm run build
```

## Content Structure

- **Knowledge Cards**: `src/content/cards/` - Research summaries in Markdown
- **Blog Articles**: `src/content/blogs/` - Long-form content
- **Slide Presentations**: `src/content/slides/` - Markdown-based slides for reveal.js
