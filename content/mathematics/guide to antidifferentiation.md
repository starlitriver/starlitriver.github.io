---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

with the power rule, we know that $f(x)=x^n$ means $f'(x)=nx^n-1$

as you remember, derivative is an operation, and it is quite a destructive operation in the sense that we can't find the original expression when given its derivative
antidifferentiation tries to get an idea of what the original expression was, and is depicted with the symbol $\int$

we have these identities where $c$ can be any constant
$\int nx^{n-1}=x^n+c$

$\int x^n=\dfrac{x^{n+1}}{n+1}+c$

we also have the sum and constant multiple rules, the same as in derivatives
$\int f(x)+g(x)=\int f(x)+\int g(x)$
$\int c\cdot f(x)=c\cdot\int f(x)$


worked example: we know that $f'(x)=-3x^2+4x$ and $f(0)=0$, find $f(x)$
we want to find the antiderivative of $-3x^2+4x$ 
$f(x)=\int -3x^2+4x$
$f(x)=-x^3+2x^2+c$
given $f(0)=0$, $c=0$
$f(x)=-x^3+2x^2$

worked example: we know that $f'(x)=x^3+4x^2$ and $f(0)=0$. find $f(x)$
$f(x)=\int x^3+4x^2$
$f(x)=\dfrac{x^4}{4}+\dfrac{4x^3}{3}+c$
$f(x)=\dfrac{x^4}{4}+\dfrac{4x^3}{3}$
