---
title: 
description: 
aliases: []
tags: []
permalink:
---

## tagged someday

```dataviewjs
dv.taskList(dv.pages().file.tasks.sort(t => t.path, 'desc').where(t => t.text.includes("#someday")).where(t => !t.completed),false);
```

## no tags

```dataviewjs
dv.taskList(dv.pages().file.tasks.sort(t => t.path, 'desc').where(t => !t.text.includes("#")).where(t => !t.completed),false);
```
