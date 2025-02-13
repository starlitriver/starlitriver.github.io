---
title: 
description: 
aliases: [continuity, continuous, discontinuities, discontinuity]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:46
permalink:
---

in mathematics, a continuous function is a function that have no abrupt changes in value called discontinuities

defined using [[limit|limits]], a function $f$ is continuous at the point $x=c$ if $\lim\limits_{x\to c}f(x)$ exists and $f(c)=\lim\limits_{x\to c}f(x)$

a function is continuous over an interval if
- the interval is within the function's domain
- the function is continuous for all points within the interval

## discontinuity

a discontinuity is an abrupt change in the output value of a function that makes the function not a [[continuous function]]

classification of discontinuities:

### removable discontinuity

there is a removable discontinuity at $x=c$ of $f(x)$ if $\lim\limits_{x\to c^-}f(x)=\lim\limits_{x\to c^+}f(x)=d$ and $f(x)\neq d$

### jump discontinuity

there is a jump discontinuity at $x=c$ of $f(x)$ if $\lim\limits_{x\to c^-}f(x)\neq\lim\limits_{x\to c^+}f(x)$

### essential discontinuity

there is an essential discontinuity at $x=c$ of $f(x)$ if $\lim\limits_{x\to c^-}f(x)\lor \lim\limits_{x\to c^+}f(x)$ does not exist
