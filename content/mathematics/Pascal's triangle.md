---
title: 
description: 
aliases: [binomial coefficients]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:46
permalink:
---

Pascal's triangle is an infinite triangular array of the binomial coefficients.
These numbers are the binomial coefficients used in [[guide to binomial expansions|binomial expansion]].

For each row, the row number is $n$ and the column number is $k$, where:

The second number of each row is equal to its row number.
The second number of each row has a column number of 1.

The [[combination]] function is used to calculate a value $a$ in Pascal's triangle with row number $n$ and column number $k$
$a=C(n,k)$

Figure: rows 0 to 7 of Pascal's triangle

$\begin{matrix}1\\1\quad1\\1\quad2\quad1\\1\quad3\quad3\quad1\\1\quad4\quad6\quad4\quad1\\1\quad5\quad10\quad10\quad5\quad1\\1\quad6\quad15\quad20\quad15\quad6\quad1\\1\quad7\quad21\quad35\quad35\quad21\quad7\quad1\end{matrix}$




Figure: rows 0 to 7 of Pascal's triangle, represented in combinations

$\begin{matrix}C(0,0)\\C(1,0)\quad C(1,1)\\C(2,0)\quad C(2,1)\quad C(2,2)\\C(3,0)\quad C(3,1)\quad C(3,2)\quad C(3,3)\\C(4,0)\quad C(4,1)\quad C(4,2)\quad C(4,3)\quad C(4,4)\\C(5,0)\quad C(5,1)\quad C(5,2)\quad C(5,3)\quad C(5,4)\quad C(5,5)\\C(6,0)\quad C(6,1)\quad C(6,2)\quad C(6,3)\quad C(6,4)\quad C(6,5)\quad C(6,6)\\C(7,0)\quad C(7,1)\quad C(7,2)\quad C(7,3)\quad C(7,4)\quad C(7,5)\quad C(7,6)\quad C(7,7)\end{matrix}$




Symmetry shows that $C(n,k)=C(n,n-k)$.

Pascal's rule (also Pascal's formula or Pascal's identity) states that $C(n-1,k)+C(n-1,k-1)=C(n,k)$

$\displaystyle \begin{aligned}C(n-1,k)+{C(n-1,k-1)}&={\frac {(n-1)!}{k!(n-1-k)!}}+{\frac {(n-1)!}{(k-1)!(n-k)!}}\\&=(n-1)!\left[{\frac {n-k}{k!(n-k)!}}+{\frac {k}{k!(n-k)!}}\right]\\&=(n-1)!{\frac {n}{k!(n-k)!}}\\&={\frac {n!}{k!(n-k)!}}\\&={C(n,k)}\end{aligned}$
