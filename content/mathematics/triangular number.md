---
title: 
description: 
aliases: [triangular numbers]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:44
permalink:
---

in mathematics, triangular numbers are used to count objects arranged in an equilateral triangle.

a triangular number $T_n$ is a figurate number that can be represented with a triangular grid of points where each row contains one more item than the previous one.

$T_1=1$, $T_2=1+2$, $T_3=1+2+3$

and the pattern continues.

for some reason, we can use the [[combination]] function to evaluate triangular numbers. math is weird.
$T_n=C(n-1,2)$

also we have a special case of the combination function where $k=2$ can use the formula $C(n,2)=\dfrac{n(n-1)}{2}$

therefore, $T_n=\dfrac{(n-1)(n-2)}{2}$



worked example: what is the tenth triangular number?
$\dfrac{(10-1)(10-2)}{2}$
$\dfrac{(9)(8)}{2}$
$36$


worked example: what is the sum of all integers form 1 to 100 inclusive?



references
https://mathworld.wolfram.com/TriangularNumber.html
