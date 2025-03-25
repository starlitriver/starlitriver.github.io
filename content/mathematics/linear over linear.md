---
title: 
description: 
aliases: []
tags: []
created: 2025-03-22T19:43:56
modified: 2025-03-22T19:58:42
permalink:
---

So there is one situation. I hope you can use it sometimes.

Let numbers a b c d, and we want to simplify the expression $\dfrac{ax+b}{cx+d}$, which is a linear expression over a linear expression.

Follow these steps:
- $\dfrac{a}{c}$ will be the constant term of the result.
- Let $n$ be the value of x where the denominator is zero.
- $a(n)+b$ will be the numerator of the fraction part of the result. With the same denominator as the original expression.

For example, $\dfrac{3x+4}{6x+5}$ can be simplified with this method. The constant term of the result is $\dfrac{3}{6}=\dfrac{1}{2}$. Find $n=\dfrac{-5}{6}$. The numerator is $3(\dfrac{-5}{6})+4=\dfrac{3}{8}$. The result is $\dfrac{1}{2}+\dfrac{-5}{6(6x+5)}$.

For example, $\dfrac{2-3x}{x-1}$. The constant term is $\dfrac{-3}{1}=-3$. The numerator is $2-3(1)=-1$. The result is $-3+\dfrac{-1}{x-1}$

Note that substitution works too. For example, $\dfrac{3x^2+4}{6x^2+5}$ can be simplified using this shortcut if you just let $k=x^2$ and use this method. 
