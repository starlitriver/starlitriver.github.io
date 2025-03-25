import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    // Component.Darkmode(),
    Component.Search(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  afterBody: [
    Component.MobileOnly(Component.TableOfContents()),
  ],
  footer: Component.Footer({
    links: {
      // "wiktionary": "https://wiktionary.org",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 2,
        scale: 1.7,
        repelForce: 2,
        centerForce: 0.3,
        linkDistance: 13,
        fontSize: 0.5,
        opacityScale: 3,
        removeTags: [],
        showTags: true,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: 3,
        scale: 1.6,
        repelForce: 2,
        centerForce: 0.8,
        linkDistance: 40,
        fontSize: 0.8,
        opacityScale: 2,
        removeTags: [],
        showTags: true,
      },
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
