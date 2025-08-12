---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-03-26T19:02:14
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

## rational root theorem

The rational root theorem helps find possible rational roots (x-intercepts) of a polynomial equation. It states that if a polynomial has **integer** coefficients, any rational root, expressed as a fraction p/q, must satisfy: p is a factor of the constant term, and q is a factor of the leading coefficient.  

Now action.

For a polynomial $f(x)$, all of the possible rational roots (x-intercepts) of the function reside within $x=\pm\dfrac{\text{any one factor of constant term}}{\text{any one factor of leading coefficient}}$

Why is the above statement true? Umm [here](https://en.wikipedia.org/wiki/Rational_root_theorem).

Remember to try the factors that are closer to zero first, since they are small.

After you get a possible root, divide your polynomial using [[synthetic division , polynomial long division|synthetic division]] instead of polynomial long division, cause easier.

### examples

worked example: factor $x^3-2x^2-5x+6$
$x\in\{1,-1,2,-2,3,-3,6,-6\}$
try $(x-1)$
$(x-1)(x^2-x-6)$
$(x-1)(x+2)(x-3)$


worked example: factor $2x^3+x^2-5x+2$
$x\in\{1,-1,2,-2\}$
try $(x-1)$


worked example: factor $x^3+3x^2-6x-8$
$x\in\{1,-1,2,-2,4,-4,8,-8\}$
try $(x-1)$
we get a remainder
try $(x+1)$
$(x+1)(x^2+2x-8)$
$(x+1)(x-2)(x+3)$


worked example: factor $x^3+2x^2-9x-18$
$x\in\{1,-1,2,-2,3,-3,6,-6\dots\}$
try $(x-1)$
we get a remainder
try $(x+1)$
we get a remainder
try $(x-2)$
we get a remainder
try $(x+2)$
no remainder
$(x+2)(x^2-9)$
$(x+2)(x+3)(x-3)$
x
