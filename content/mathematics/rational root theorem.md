---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-19T19:28:04
permalink:
---

The rational root theorem helps find possible rational roots (x-intercepts) of a polynomial equation. It states that if a polynomial has **integer** coefficients, any rational root, expressed as a fraction p/q, must satisfy: p is a factor of the constant term, and q is a factor of the leading coefficient.  

Now action.

For a polynomial $f(x)$, all of the possible rational roots (x-intercepts) of the function reside within $x=\pm\dfrac{\text{any one factor of constant term}}{\text{any one factor of leading coefficient}}$

Why is the above statement true? Umm [here](https://en.wikipedia.org/wiki/Rational_root_theorem).

Remember to try the factors that are closer to zero first, since they are small.

After you get a possible root, divide your polynomial using [[synthetic division , polynomial long division|synthetic division]] instead of polynomial long division, cause easier.

## examples

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
no remainder!
$(x+2)(x^2-9)$
$(x+2)(x+3)(x-3)$
