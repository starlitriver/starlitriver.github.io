---
title: 
description: 
aliases: []
tags: []
permalink:
---

Pascal's rule (also known as Pascal's formula or Pascal's identity) states that $C(n-1,k)+C(n-1,k-1)=C(n,k)$, where C is the [[combination]] function

algebraic proof

$\displaystyle \begin{aligned}C(n-1,k)+{C(n-1,k-1)}&={\frac {(n-1)!}{k!(n-1-k)!}}+{\frac {(n-1)!}{(k-1)!(n-k)!}}\\&=(n-1)!\left[{\frac {n-k}{k!(n-k)!}}+{\frac {k}{k!(n-k)!}}\right]\\&=(n-1)!{\frac {n}{k!(n-k)!}}\\&={\frac {n!}{k!(n-k)!}}\\&={C(n,k)}\end{aligned}$
