---
title: 
description: 
aliases: []
tags: []
created: 2024-12-04T21:50:47
modified: 2025-02-09T15:53:45
permalink:
---

Hey, welcome aboard calculus. I'll make this interesting, I promise.

figure: Consider $f(x)$. What is the rate of change between these points?

![[guide to differentiation 2024-11-21 18.26.52.excalidraw.svg|325]]
%%[[guide to differentiation 2024-11-21 18.26.52.excalidraw.md|🖋 Edit in Excalidraw]]%%

You can see, for a function $f(x)$, the average rate of change from one x value to another is easily calculated by rise over run, as  $\dfrac{f(c+\Delta x)-f(c)}{\Delta x}$

figure: Consider a lower value of h.

![[guide to differentiation 2024-11-21 18.43.25.excalidraw.svg|325]]
%%[[guide to differentiation 2024-11-21 18.43.25.excalidraw.md|🖋 Edit in Excalidraw]]%%

Okay, that wasn't much different. We still calculate the average rate of change the same way.

Combining this simple logic with the idea of [[limit|limits]], we can calculate the instantaneous rate of change (the slope) of a point.

The instantaneous rate of change at the point $(x,f(x))$ can be calculated with $\lim\limits_{\Delta x\to0}\dfrac{f(c+h)-f(c)}{h}$

We found the slope for a point on the function. We show this as $f'(x=c)$, meaning the slope of $f(x)$ at the point where $x=c$.

As a general thing, $f'(x)$ is a function that can give you the slope for any x value you have.

We can find that, $f'(x=c)=\lim\limits_{\Delta x\to0}\dfrac{f(c+\Delta x)-f(c)}{\Delta x}$.

and finally,

$f'(x)=\lim\limits_{\Delta x\to0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}$.

Remember this and leave it inside your head as the First Principles.

A wonderful explanation of First Principles is [here](https://mathsathome.com/differentiation-by-first-principles).

This, my friends, is the start of calculus.
