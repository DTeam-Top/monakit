# MonaKit

An Astro Template supports multiple content types:

- **Knowledge Cards**: Short summaries and insights
- **Articles**: Blog posts and long-form content
- **Slide Presentations**: Interactive slides with reveal.js and image processing

## How to Use

```bash
npm create astro@latest my-astro-project -- --template DTeam-Top/monakit
```

## Tech Stack

- Astro 5 with SSR (Vercel deployment)
- React components with Radix UI
- TailwindCSS for styling
- Content collections (MDX support)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Content Structure

- **Knowledge Cards**: `src/content/cards/` - Research summaries in Markdown
- **Blog Articles**: `src/content/blogs/` - Long-form content
- **Slide Presentations**: `src/content/slides/` - Markdown-based slides for reveal.js
