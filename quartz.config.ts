import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "♡ wiki",
    pageTitleSuffix: " ♡",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "wiki.hiii.au",
    ignorePatterns: [".obsidian", "assets/*.md", "temp", "plugins"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      // fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chalkboard SE", // Patrick Hand
        body: "sans-serif",
        code: "monospace",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#eaeaea",
          gray: "#7b7b7b",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#ff0054",
          tertiary: "#ab2222",
          highlight: "#ff240011",
          textHighlight: "#ff240011",
        },
        darkMode: {
          light: "#ffffff",
          lightgray: "#eaeaea",
          gray: "#7b7b7b",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#ff0054",
          tertiary: "#ab2222",
          highlight: "#ff240011",
          textHighlight: "#ff240011",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
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
        lazyLoad: false,
        prettyLinks: true,
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.RemoveAnkiCodeBlocks(),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // Plugin.ExplicitPublish(),
    ],
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
        rssLimit: 2048,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
