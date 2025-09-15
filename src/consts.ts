import { env } from "./env";

export interface CardTheme {
  textColor: string;
  backgroundClass: string;
  accentColor: string;
  borderColor: string;
  subtleColor: string;
  decorativeLineColor: string;
  numberColor: string;
  backgroundColor: string;
  backgroundImage?: string;
  gradient?: string;
  titleColor: string;
  titleFontSize: string;
  titleFontWeight: string;
  titleFontFamily?: string;
  descriptionColor: string;
  descriptionFontSize: string;
  descriptionFontFamily?: string;
  sectionTitleColor: string;
  sectionTitleFontSize: string;
  sectionTitleFontWeight: string;
  sectionTitleFontFamily?: string;
  keyPointColor: string;
  keyPointFontSize: string;
  keyPointFontFamily?: string;
  numberBackgroundColor: string;
  numberTextColor: string;
  numberFontWeight: string;
  numberFontFamily?: string;
  decorativeLineWidth: string;
  decorativeLineHeight: string;
  fontFamily?: string;
  linkColor: string;
}

export interface SlideTheme {
  background: string;
  type: "solid" | "gradient";
  titleFont: string;
  titleWeight: number | "normal" | "bold";
  titleTransform: "uppercase" | "none" | "capitalize" | "lowercase";
  textFont: string;
  titleColor: string;
  textColor: string;
  overlayColor: string;
}

export const SITE_TITLE = "MONA";
export const SITE_DESCRIPTION = "Mona — Learn from What We Build";

export const PROD_URL = "https://www.mymona.xyz";

export const isProdEnv = () => {
  if (import.meta.env.PROD || import.meta.env.MODE === "production") {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.location.origin === PROD_URL;
  }

  return false;
};

export const isProd = isProdEnv();

export const ASSETS_IMAGES_PREFIX = "/src/assets/images";

export const KNOWLEDGE_CARD_SYSTEM_PROMPT = `
  Access the provided content and extract the following information in English:
  1. Title: The main title of the content
  2. Description: A brief summary of the content (2-3 sentences)
  3. Key Points: Extract 3-6 main points from the content
      - Each key point should be concise and informative, highlighting the author's viewpoints and within 100 characters
  4. References: references used in the content, including title and URL
  5. Tools: tools mentioned in the content, including title and URL

  Format the output as a JSON object with the following structure:
  {
    "title": "The extracted title",
    "description": "The brief summary",
    "keyPoints": [
      "Key point 1",
      "Key point 2",
      "Key point 3",
      "Key point 4",
      "Key point 5",
      "Key point 6"
    ],
    "references": [
      {
        "title": "Reference title 1",
        "url": "Reference URL 1"
      },
      {
        "title": "Reference title 2",
        "url": "Reference URL 2"
      }
    ],
    "tools": [
      {
        "title": "Tool title 1",
        "url": "Tool URL 1"
      },
      {
        "title": "Tool title 2",
        "url": "Tool URL 2"
      }
    ],
    "mermaidMarkdown": "Mindmap content"
  }

  **IMPORTANT:**
  1. Keep the content concise and well-structured
  2. Use clear and professional language
  3. Only include relevant and significant information
  4. Return ONLY the JSON object, without any additional text or explanations
  5. Ensure the JSON is properly formatted and valid
  6. For mindmap, use the following:
    Based on the given article:
        1. try to summary and extra the key points for the diagram generation.
        2. these key points must be informative and concise.
        3. these key points should highlight the author's viewpoints.
        4. try to keep the key points in a logical order.
        5. don't include any extra explanation and irrelevant information.

        Use them to generate a Mindmap.
        Mindmap syntax rules:
        - Each line should not have any quotes marks
        - Do not include 'mermaid' at the start of the diagram
        - Do not use 3-nesting parentheses for root, ie: "root((Mixture of Experts (MoE)))". The correct is "root((MoE))"
        - Do not use abbreviations with parentheses in the middle of a line, but it can be used at the end of a line
        - Do not use any special characters in the diagram except emojis
        - Keep function name without parameters when you are reading a programming article, ie: free, not free()
        - Can only have one root node, ie no other node can be at the same level as the root node.

        - Basic structure example:
        <Basic Structure>
        mindmap
          Root
            A
              B
              C

        Each node in the mindmap can be different shapes:
        <Square>
        id[I am a square]
        <Rounded square>
        id(I am a rounded square)
        <Circle>
        id((I am a circle))
        <Bang>
        id))I am a bang((
        <Cloud>
        id)I am a cloud(
        <Hexagon>
        id{{I am a hexagon}}
        <Default>
        I am the default shape

        Icons can be used in the mindmap with syntax: "::icon()"

        Markdown string can be used like the following:
        <Markdown string>
        mindmap
            id1["\`**Root** with
        a second line
        Unicode works too: 🤓\`"]
              id2["\`The dog in **the** hog... a *very long text* that wraps to a new line\`"]
              id3[Regular labels still works]

        Here is a mindmap example:
        <example mindmap>
        mindmap
          root((mindmap))
            Origins
              Long history
              ::icon(fa fa-book)
              Popularisation
                British popular psychology author Tony Buzan
            Research
              On effectiveness<br/>and features
              On Automatic creation
                Uses
                    Creative techniques
                    Strategic planning
                    Argument mapping
            Tools
              Pen and paper
              Mermaid

        The max deepth of the generated mindmap should be 3.
        The first level can have at most 6 nodes, and the second level can have at most 6 nodes.

        The output syntax should be correct. Try to avoid the following common errors:
        - never use \" in the output
        - \`\`\`mermaid in the output
        <error examples>
        - Gating network (G) decides experts (E)
          - fixed: Gating network decides experts
        - root((Mixture of Experts (MoE)))
          - fixed: root((MoE))
        - 2017: Shazeer et al. (Google) - 137B LSTM
          - fixed: 2017: Shazeer et al. Google 137B LSTM
        - calloc()
          - fixed: calloc
        - sbrk(0) returns current break
          - fixed: sbrk:0 returns current break
        - Allocate N + sizeof(header_t) bytes
          - fixed: Allocate N + sizeof header_t bytes

        Review the output to ensure it is logical and follows the correct syntax, if not, correct it.
`;

export const DEFAULT_TEMPERATURE = 0.1;

export { KNOWLEDGE_CARD_THEME } from "./themes/knowledge-card-themes";

// --- Application Limits, Defaults, and Enums ---

export const MILLISECONDS_PER_HOUR = 1000 * 60 * 60;

// --- MIME Types ---
export const MIME_TYPES: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpg",
  jpeg: "image/jpeg",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

export const MERMAID_LIVE_BASE_URL = "https://mermaid.live";

export interface MenuItem {
  id: string;
  label: string;
  href: string;
  showWhenLoggedOut?: boolean;
  showWhenLoggedIn?: boolean;
  title?: string;
  description?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "blogs",
    label: "Articles",
    href: "/blogs",
    title: "Articles",
    description:
      "Practical guides, in-depth technical pieces, and lessons from real projects.",
  },
  {
    id: "cards",
    label: "Cards",
    href: "/cards",
    title: "Cards",
    description: "Developer-Gathered, AI-Crafted, Human-Checked.",
  },
  {
    id: "slides",
    label: "Slides",
    href: "/slides",
    title: "Slides",
    description: "Interactive presentations crafted for developers.",
  },
  {
    id: "open-source",
    label: "GitHub",
    href: "https://github.com/DTeam-Top",
    title: "GitHub",
    description: "Explore our open-source projects.",
  },
];

export const getNavigationItems = (): MenuItem[] => {
  return MENU_ITEMS;
};
