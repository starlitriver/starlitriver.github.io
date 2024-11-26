---
title: 
description: 
aliases: []
tags: []
permalink:
---


worked example: Differentiate $f(x)=\dfrac{x+3}{2x^2+5x-3}$ by factorizing first

$f(x)=\dfrac{x+3}{(x+3)(2x-1)}$
$f(x)=(2x-1)^{-1}$

$f'(x)=(-1)(2x-1)^{-2}\cdot (2)$
$f'(x)=\dfrac{-2}{(2x-1)^2}$


worked example: Differentiate $f(x)=\dfrac{x+3}{2x^2+5x-3}$

$f'(x)=\dfrac{(1)(2x^2+5x-3)-(x+3)(4x+5)}{(2x^2+5x-3)^2}$

$f'(x)=\dfrac{2x^2+5x-3-(4x^2+5x+12x+15)}{(2x^2+5x-3)^2}$

$f'(x)=\dfrac{-2x^2-12x-18}{(2x^2+5x-3)^2}$



worked example: Differentiate $f(x)=\dfrac{x+1}{2x^2-x-3}$ by factorizing first

$f(x)=\dfrac{x+1}{(x+1)(2x-3)}$

$f(x)=(2x-3)^{-1}$

$f'(x)=(-1)(2x-3)^{-2}\cdot (2)$

$f'(x)=\dfrac{-2}{(2x-3)^2}$


worked example: Differentiate $f(x)=\dfrac{x+1}{2x^2-x-3}$

$f'(x)=\dfrac{(1)(2x^2-x-3)-(x+1)(4x-1)}{(2x^2-x-3)^2}$

$f'(x)=\dfrac{2x^2-x-3-(4x^2-x+4x-1)}{(2x^2-x-3)^2}$

$f'(x)=\dfrac{-2x^2-4x-2}{(2x^2-x-3)^2}$



worked example: Differentiate $f(x)=\dfrac{2x+1}{6x^2+x-1}$ by factorizing first

$f(x)=\dfrac{2x+1}{(3x-1)(2x+1)}$

$f'(x)=(3x-1)^{-1}$

$f'(x)=(-1)(3x-1)^{-2}\cdot (3)$

$f'(x)=\dfrac{-3}{(3x-1)^2}$


worked example: Differentiate $f(x)=\dfrac{2x+1}{6x^2+x-1}$

$f'(x)=\dfrac{(2)(6x^2+x-1)-(2x+1)(12x+1)}{(6x^2+x-1)^2}$

$f'(x)=\dfrac{12x^2+2x-2-(24x^2+2x+12x+1)}{(6x^2+x-1)^2}$

$f'(x)=\dfrac{-12x^2-12x-3}{(6x^2+x-1)^2}$


worked example: Differentiate $f(x)=\left(1+(1+x^2)^3\right)^4$

this is a tedious question to test your skills - we have to use the chain rule many times

when solving something hard, we write down things step by step

$m(x)=1+x^2$
$n(x)=x^3$
$j(x)=(1+x)^4$
$k(x)=n(m(x))$

$f(x)=j(k(x))$

$f'(x)=j'(k(x))\cdot k'(x)$

$j'(x)=(4)(1+x)^3\cdot (1)$
$j'(x)=4(x+1)^3$

$k'(x)=n'(m(x))\cdot m'(x)$
$k'(x)=(3)(1+x^2)^2\cdot 2x$
$k'(x)=6x(1+x^2)^2$

$f'(x)=j'((1+x^2)^3)\cdot 6x(1+x^2)^2$

$f'(x)=4((1+x^2)^3+1)^3\cdot 6x(1+x^2)^2$

$f'(x)=24x(1+x^2)^2((1+x^2)^3+1)^3$
