---
title: 
description: 
aliases: []
tags: []
created: 2024-11-23T13:40:44
modified: 2025-02-09T15:53:42
permalink:
---

```dataviewjs
const word = "sad" // <-- Type your search between the ""

// We need to double-escape \b here so it's correctly fed into RegExp after the concationation (as "\b" and not as "b").
const regex = new RegExp("\\b" + word + "\\b", "gi")
// Query pages and crawl their raw data content 
const pages = await Promise.all(
    dv.pages('"/"')
    .map(async (page) => {
        const content = await dv.io.load(page.file.path);
        // Map pages to a custom object - if you want to have more infos in the
        // table below, you need to add them here!
        return {
            link: page.file.link,
            count: ( content.match(regex) || []).length
        };
    })
)
// Render the result table 
dv.table(
        ["Note", `Matches for "${word}"`],
            pages
            .filter(p => p.count)
            .sort((a, b) => b.count - a.count)
            .map(p => [p.link, p.count])  
    );
```
