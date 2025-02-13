---
title: 
description: 
aliases: []
tags: []
created: 2024-12-04T21:50:47
modified: 2025-02-09T15:53:45
permalink:
---

- [[guide to limits]]
- [[guide to differentiation]]

This [video](https://www.khanacademy.org/math/calculus-1/cs1-derivatives-definition-and-basic-rules/cs1-differentiability/v/differentiability-at-a-point-algebraic-is-differentiable) explains an algebraic way to know if a function is differentiable at a point. here is the function described in the video:

Is $f(x)$ differentiable at $x=3$ for $f(x)={\begin{cases}x^2&,x<3\\6x-9&,x\geq 3\end{cases}}$

We see that this is a piecewise function, and piecewise functions have a tendency to be, you know, having sharp turns.

We'll think about this with algebra first, and then I'll use a graphical interpretation to make things clear.

First and most importantly, continuity. Is it continuous? On one side we have the limit $(3)^2=9$ and on the other side we have $6(3)-9=9$. Looks like it's continuous. But... is it a sharp turn? Is there an infinite slope?

The slope of $f(x)$ as $x\to3^{-}$, is $\dfrac{d}{dx}[x^2]=2x=6$. What about as $x\to3^{+}$? The slope is 6, the slopes are the same! The slope we approach from the left is the same as the slope we approach from the right; this means it's differentiable.




Let's do another example. We have this [video](https://www.khanacademy.org/math/calculus-1/cs1-derivatives-definition-and-basic-rules/cs1-differentiability/v/differentiability-at-a-point-algebraic-not-differentiable) now.

Is $f(x)$ differentiable at $x=1$ for $f(x)={\begin{cases}x-1&,x<1\\(x-1)^2&,x\geq 1\end{cases}}$

First, continuity. One one side we have $1-1=0$ and on the other side we have $(1-1)^2=0$. It's continuous!
But what about sharp turns and infinite slope?
The slope of $f(x)$ as $x\to1^{-}$, is $1$. What about as $x\to1^{+}$? The slope is $\dfrac{d}{dx}[(x-1)^2]=(2)(x-1)(1)=2x-2$, the slopes are different! It is therefore a sharp turn, and the point is not differentiable.



Just one final example.
Is $f(x)$ differentiable at $x=4$ for $f(x)={\begin{cases}2x+3&,x<4\\x^2-5&,x\geq 4\end{cases}}$
First, continuity. Limit from the left is $2\cdot 4+3=11$ and right is $4^2-5=11$. It is continuous. What about slope? Slope from the left is $\dfrac{d}{dx}[2x+3]=2$, and slope from the right is $\dfrac{d}{dx}[x^2=5]=2x=8$. So not differentiable.


I'll leave this up to you now... this [exercise](https://www.khanacademy.org/math/calculus-1/cs1-derivatives-definition-and-basic-rules/cs1-differentiability/e/differentiability-at-a-point-algebraic) will help you a lot!


worked example: Is $f(x)$ differentiable at $x=2$ for $f(x)={\begin{cases}x^2+1&,x<2\\x-x^2&,x\geq 2\end{cases}}$
First continuity. One side has limit $(2)^2+1=5$ and the other has $2-(2)^2=-2$. It's not continuous. And not differentiable.
