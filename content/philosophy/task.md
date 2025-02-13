---
title: 
description: 
aliases: [tasks]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:43
permalink:
---


some attributes of tasks

| attribute name           | default value if blank | type        | description                                           |
| ------------------------ | ---------------------- | ----------- | ----------------------------------------------------- |
| status                   | active                 | string      | maybe it's like a special status or something         |
| progress                 | 0                      | probability | completion                                            |
| debut                    | None                   | datetime    | when the task is first thought about                  |
| officially due           | None                   | datetime    | official due time                                     |
| positive importance      | 0                      | probability | how much good things would happen if you do the task  |
| negative importance      | 0                      | probability | how much bad things would happen if you fail the task |
| instantaneous motivation | 0                      | probability | motivation right this instant                         |
| weekly motivation        | 0                      | probability | motivation this week                                  |
| best within days         | Infinity               | float       | best before time, before it becomes not fun           |
| time needed minutes      | Infinity               | float       | time needed, in minutes                               |
