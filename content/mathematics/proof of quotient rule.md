---
title: 
description: 
aliases: []
tags: []
created: 2024-12-04T21:50:47
modified: 2025-02-09T15:53:45
permalink:
---

say we have an expression $\dfrac{m(x)}{n(x)}$ and we need to find the derivative.

the quotient rule says that $\dfrac{d}{dx}[\dfrac{m(x)}{n(x)}]=\dfrac{m'(x)n(x)-m(x)n'(x)}{n(x)^2}$

let's do it step by step

we solve for $\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]$

product rule

$\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]=m'(x)(n(x)^{-1})+m(x)\dfrac{d}{dx}[n(x)^{-1}]$

chain rule

$\dfrac{d}{dx}[n(x)^{-1}]=(-1)(n(x))^{-2}\cdot n'(x)$

$\dfrac{d}{dx}[n(x)^{-1}]=-n(x)^{-2}\cdot n'(x)$

$\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]=m'(x)(n(x)^{-1})+m(x)[-n(x)^{-2}\cdot n'(x)]$

$\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]=\dfrac{m'(x)}{n(x)}+\dfrac{-m(x)n'(x)}{n(x)^2}$

$\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]=\dfrac{m'(x)n(x)}{n(x)^2}+\dfrac{-m(x)n'(x)}{n(x)^2}$

$\dfrac{d}{dx}[m(x) \cdot n(x)^{-1}]=\dfrac{m'(x)n(x)-m(x)n'(x)}{n(x)^2}$

interesting, we did it!
