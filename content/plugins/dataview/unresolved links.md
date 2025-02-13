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
const unresolvedLinksMap = app.metadataCache.unresolvedLinks

const res = {}

for (let page in unresolvedLinksMap) {
	const unresolved = Object.keys(unresolvedLinksMap[page]);
	
	if (unresolved.length === 0) {
    	continue;
    }
    	
	for (let link of unresolved) {
		if (!res[link]) {
    		res[link] = {link, usages: []}
    	}
    	
		res[link].usages.push(dv.fileLink(page))
	}
}

const rows = Object.values(res)
    .map(l => [dv.fileLink(l.link), l.usages.join(' · '), l.usages.length])
    .sort((a, b) => a[2] > b[2] ? -1 : 1)

dv.table(
    ["Unresolved Link", "Contained in", "Count"], 
    rows
);
```
