---
title: 
description: 
aliases: []
tags: []
created: 2024-11-21T07:46:18
modified: 2025-02-09T15:53:45
permalink:
---

worked example: if $\text{Pr}(A)=0.4$, $\text{Pr}(B)=0.5$ and $\text{Pr}(A\cap B)=0.2$, find
- $\text{Pr}(A\cup B)$
make a table

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | 0.3 | 0.5 |
| B'  | 0.2 | 0.3 | 0.5 |
|     | 0.4 | 0.6 | 1   |

$\text{Pr}(A\cup B)=0.7$

- $\text{Pr}(A|B)$
$\text{Pr}(A|B)=\dfrac{0.2}{0.5}=\dfrac{2}{5}$



worked example: if $\text{Pr}(A)=0.44$, $\text{Pr}(B)=0.16$ and $\text{Pr}(A\cup B)=0.53$, find
- $\text{Pr}(A\cap B)$
make a table
$\text{Pr}(A\cup B)=0.53$ means that $\text{Pr}(A'\cap B')=0.47$

|     | A    | A'   |      |
| --- | ---- | ---- | ---- |
| B   | 0.07 | 0.09 | 0.16 |
| B'  | 0.37 | 0.47 | 0.84 |
|     | 0.44 | 0.56 | 1    |

$\text{Pr}(A\cap B)=0.07$

- $\text{Pr}(B|A)$
$\text{Pr}(B|A)=\dfrac{0.07}{0.44}=\dfrac{7}{44}$

worked example: if A and B are mutually exclusive events and $\text{Pr}(A)=0.38$ and $\text{Pr}(B)=0.51$, find $\text{Pr}(A\cup B)$
if A and B are mutually exclusive, $\text{Pr}(A\cap B)=0$
make a table

|     | A    | A'   |      |
| --- | ---- | ---- | ---- |
| B   | 0    | 0.51 | 0.51 |
| B'  | 0.38 | 0.11 | 0.49 |
|     | 0.38 | 0.62 | 1    |

$\text{Pr}(A\cup B)=0.89$


worked example: if A and B independent events and $\text{Pr}(A)=0.3$ and $\text{Pr}(B)=0.4$, find $\text{Pr}(A\cup B)$
if A and B are independent, $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot\text{Pr}(B)$
make a table

|     | A    | A'   |     |
| --- | ---- | ---- | --- |
| B   | 0.12 | 0.28 | 0.4 |
| B'  | 0.18 | 0.42 | 0.6 |
|     | 0.3  | 0.7  | 1   |

$\text{Pr}(A\cup B)=0.58$


worked example: if $\text{Pr}(A)=2\cdot\text{Pr}(B)$ and $\text{Pr}(A\cap B)=0.2$ and $\text{Pr}(A\cup B)=0.7$, find $\text{Pr}(A)$
make a table
$\text{Pr}(A\cup B)=0.7$ means that $\text{Pr}(A'\cap B')=0.3$

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 |     |     |
| B'  |     | 0.3 |     |
|     |     |     | 1   |

we have to use some variables here

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | p   | n   |
| B'  | o   | 0.3 |     |
|     | m   |     | 1   |

some equations

$m=2n$
$0.2+o+p=0.7$
$0.2+o=m$
$0.2+p=n$

$0.2+o+0.2+p=0.9$
$0.2+o+0.2+p=3n$
$n=0.3$

phew that was hard

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | 0.1 | 0.3 |
| B'  | 0.4 | 0.3 | 0.7 |
|     | 0.6 | 0.4 | 1   |

$\text{Pr}(A)=0.6$
