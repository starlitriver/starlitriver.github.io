---
title: 
description: 
aliases: []
tags: []
permalink:
---

```dataviewjs
// add all extensions you want to ignore to the array, i.e. ["md", "js", "css"]
const allNonMdFiles = app.vault.getFiles().filter(file => !["md"].includes(file.extension))
const allNonMdOutlinks = dv.pages().file.outlinks.path.filter(link => !link.endsWith('.md'))
const notReferenced = allNonMdFiles.filter(file => !allNonMdOutlinks.includes(file.path));

if (!notReferenced.length) {
	dv.span(`> [!done] All good! No unused attachments found :) `)
} 

dv.list(dv.array(notReferenced).map(link => dv.fileLink(link.path)))
```
