import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "quartz",
    enableSPA: true,
    enablePopovers: true,
    baseUrl: "starlitriver.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "plugins", "story"],
    defaultDateType: "modified",
    locale: "en-US",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F3EDD1",
          lightgray: "#e5e5e5",
          gray: "#4B4B4B",
          darkgray: "#212121",
          dark: "#000000",
          secondary: "#1DAB5C",
          tertiary: "#1FCE6E",
          highlight: "rgba(75, 194, 128, 0.1)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#393639",
          gray: "#CCCCCC",
          darkgray: "#e6e6e6",
          dark: "#ffffff",
          secondary: "#83ffc2",
          tertiary: "#95ffc4",
          highlight: "rgba(122, 255, 187, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
