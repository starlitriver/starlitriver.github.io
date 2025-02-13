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
const pagelimit = 5;
const metadataMap = {};

dv.pages().forEach(page => {
	Object.keys(page).forEach(metadata => {
		if (metadata === 'file') return;
		metadata = metadata.toLowerCase().replaceAll(" ", "-")
		if (!metadataMap[metadata]) {
			metadataMap[metadata] = []
		}
		if (!metadataMap[metadata].some(l => l.path === page.file.link.path)) {
			metadataMap[metadata].push(page.file.link);
		}
	})
})

dv.table(["meta data", "page count", `pages (first ${pagelimit})`], Object.keys(metadataMap).sort().map(key => [key, metadataMap[key].length, dv.array(metadataMap[key]).limit(pagelimit)]))
```
