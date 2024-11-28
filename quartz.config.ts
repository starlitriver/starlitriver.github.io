import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "starlit",
    enableSPA: true,
    enablePopovers: true,
    analytics: none;
    locale: "en-US",
    baseUrl: "starlitriver.github.io",
    ignorePatterns: ["assets/*.md", "drafts", "temp", "private", "plugins", ".obsidian"],
    defaultDateType: "modified", // created or modified
    theme: {
      // fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chalkboard SE", // Patrick Hand
        body: "sans-serif",
        code: "Monaco",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#eaeaea",
          gray: "#7b7b7b",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#23BC73",
          tertiary: "#1fce6e",
          highlight: "rgba(75, 194, 128, 0.1)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#333333",
          gray: "#cccccc",
          darkgray: "#ffffff",
          dark: "#ffffff",
          secondary: "#55ffab",
          tertiary: "#95ffc4",
          highlight: "rgba(122, 255, 187, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter","git","filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({minEntries: 2}),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        rssLimit: 1024,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
