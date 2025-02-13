---
title: 
description: 
aliases: []
tags: ["#exercise"]
created: 2024-12-04T21:50:47
modified: 2025-02-09T15:53:46
permalink:
---

worked example: Differentiate $f(x)=\left(1+(1+x^2)^3\right)^4$

this is a hard question to test your skills - we have to use the chain rule many times

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
