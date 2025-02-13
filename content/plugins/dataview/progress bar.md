---
title: 
description: 
aliases: []
tags: []
created: 2024-11-23T13:40:44
modified: 2025-02-09T15:53:42
permalink:
---


- [x] operation happy: destroy sadness
- [ ] operation happy: make good change
- [ ] operation happy: make stuff

match something
`$= const valToSearch= "operation happy"; const value = Math.round(((dv.pages().file.tasks.where(t => t.completed).where(t => t.text.includes(valToSearch)).length) / (dv.pages().file.tasks).where(t => t.text.includes(valToSearch)).length) * 100); "<progress value='" + value + "' max='100'></progress>" + "<span style='font-size:smaller;color:var(--text-muted)'> " + value + "% &nbsp;| &nbsp;" + (dv.pages().file.tasks.where(t => t.text.includes(valToSearch)).length - dv.pages().file.tasks.where(t => t.completed).where(t => t.text.includes(valToSearch)).length) + " left</span>"`

inside a note
`$= const tasks = dv.page("").file.tasks; const value = Math.round(tasks.where(t => t.completed).length / tasks.length * 100); "<progress value='" + value + "' max='100'></progress>" + "<span style='font-size:smaller;color:var(--text-muted)'> " + value + "% &nbsp;| &nbsp;" + (tasks.length - tasks.where(t => t.completed).length) + " left</span>"`
