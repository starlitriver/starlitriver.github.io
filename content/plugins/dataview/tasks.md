---
title: 
description: 
aliases: []
tags: []
created: 2024-11-23T13:40:44
modified: 2025-02-09T15:53:42
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
