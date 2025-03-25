---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-03-21T18:27:42
permalink:
---

## remainder theorem

The remainder theorem states when polynomial $f(x)$ is divided by $(ax+b)$ then the remainder is equal to $f(\dfrac{-b}{a})$.

Example questions.

### Find the remainder when $f(x)=x^3-3x^2+2x+6$ is divided by $x-2$.

$f(2)=6$

### Find the remainder when $f(x)=x^3-2x+4$ is divided by $2x+1$.

$f(\dfrac{-1}{2})=\dfrac{39}{8}$

## factor theorem

The factor theorem states when polynomial $f(x)$ is divided by $(ax+b)$ and the remainder is zero, then $(ax+b)$ is a factor of $f$.

Using the remainder theorem as well, we have the statement:

For a polynomial $f(x)$, the statements "$ax+b$ is a factor" and "$f(\dfrac{-b}{a})=0$" are equivalent.


It's pretty intuitive yes?

Applications of the factor theorem:
- evaluating to see if $(ax+b)$ is a factor of $f(x)$
- finding coefficients of $f(x)$ when given the factor or remainder of $f(x)$ by $(ax+b)$

### Given the polynomial $f(x)=3x^2-4x+7$, determine if $(x-1)$ is a factor.

If the remainder of $f$ divided by $(x-1)$ is equal to $f(1)$ then $(x-1)$ is a factor of $f$.

When we divide $f$ by $(x-1)$ we get $3x-1$ with a remainder of $6$, and $f(1)=6$. The answer is yes.

### Show that $x+1$ is a factor of $x^3-4x^2+x+6$ and hence find other factors.

$f(-1)=0$ means that $x+1$ is a factor.

Perform division to factorise.

$=(x+1)(x^2-5x+6)$
$=(x+1)(x-3)(x-2)$

### Factorise $x^3-2x^2-5x+6$.

Step one, trial and error.

$f(-1)=8$
$f(1)=0$ means that $x-1$ is a factor.

Perform division to factorise.

$=(x-1)(x^2-x-6)$
$=(x-1)(x-3)(x+2)$
