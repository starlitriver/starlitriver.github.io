---
title: 
description: 
aliases: []
tags: []
created: 2024-12-04T21:50:46
modified: 2025-02-09T15:53:46
permalink:
---

worked example: let A and B be points on the function $f(x)=-x^2+x-2$ at $x=1$ and $x=1+h$ respectively. find the gradient of line AB in terms of $h$.

let's draw something

![[practice First Principles 2024-11-25 16.15.37.excalidraw.svg|229]]
%%[[practice First Principles 2024-11-25 16.15.37.excalidraw.md|🖋 Edit in Excalidraw]]%%

to find the gradient of line AB, we need $\dfrac{f(1+h)-f(1)}{h}$

$=\dfrac{-(1+h)^2+(1+h)-2-(-1^2+1-2)}{h}$
$=\dfrac{-(h^2+2h+1)+1+h-2+1-1+2}{h}$
$=\dfrac{-h^2-h}{h}$
$=\dfrac{h(-h-1)}{h}$
$=-h-1$






worked example: A secant line intersects the curve $y=x^2+5x$ at two points that have x-coordinates $2$ and $2+\Delta x$. Express the slope of the secant line in terms of $\Delta x$

figure: Clumsy graph here haha
![[guide to differentiation - practice First Principles 2024-11-28 11.40.48.excalidraw.svg|136]]
%%[[guide to differentiation - practice First Principles 2024-11-28 11.40.48.excalidraw.md|🖋 Edit in Excalidraw]]%%

the slope of the secant line here is rise over run, which is $\dfrac{f(2+\Delta x)-f(2)}{\Delta x}$
$=\dfrac{(2+\Delta x)^2+5(2+\Delta x)-(2^2+5(2))}{\Delta x}$
$=\dfrac{\Delta x ^{2}+4\Delta x+4+10+5\Delta x-14}{\Delta x}$
$=\dfrac{\Delta x^{2}+9\Delta x}{\Delta x}$
$=\Delta x+9$



worked example: What is the slope of the secant line that intersects the graph of $f(x)=0.5^{-x}$ at $x=1$ and $x=5$?

the slope of the secant line is rise over run, which is $\dfrac{0.5^{-5}-0.5^{-1}}{5-1}$
$=\dfrac{32-2}{4}$
$=\dfrac{15}{2}$

worked example: let A and B be points on the function $f(x)=x^2+5x+2$ at $x=8$ and $x=8+h$ respectively. find the gradient of line AB in terms of $h$.

let's draw something

![[practice First Principles 2024-11-25 16.15.37.excalidraw.svg|229]]
%%[[practice First Principles 2024-11-25 16.15.37.excalidraw.md|🖋 Edit in Excalidraw]]%%

to find the gradient of line AB, we need $\dfrac{f(8+h)-f(8)}{h}$

$=\dfrac{h^2+16h+64+40+5h+2-(8^2+40+2)}{h}$
$=\dfrac{h^2+21h}{h}$
$=h+21$



worked example: A secant line intersects the curve $y=-2x^2-7x$ at two points where $x=-4$ and $x=t$. What is the slope of the secant line in terms of $t$?

The slope is rise over run, $\dfrac{-2t^2-7t-(-2(-4)^2+28)}{t-(-4)}$
$=\dfrac{-2t^2-7t+4}{t+4}$
$=\dfrac{-2t^2-8t+t+4}{t+4}$
$=\dfrac{-2t(t+4)+1(t+4)}{t+4}$
$=-2t+1$


worked example: Differentiate $f(x)=2x^2-\dfrac{1}{x}$ using First Principles

$f'(x)=\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{2(x+h)^2-\dfrac{1}{x+h}-(2x^2-\dfrac{1}{x})}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{2(x^2+2xh+h^2)-\dfrac{1}{x+h}-2x^2+\dfrac{1}{x}}{h}$
$f'(x)=\lim\limits_{h\to0}\dfrac{4xh+2h^2+\dfrac{-x+x+h}{x(x+h)}}{h}$
$f'(x)=\lim\limits_{h\to0}\dfrac{4xh+2h^2+\dfrac{h}{x^2+hx}}{h}$
$f'(x)=\lim\limits_{h\to0}4x+2h+\dfrac{1}{x^2+hx}$
$f'(x)=4x+\dfrac{1}{x^2}$


worked example: Differentiate $f(x)=\dfrac{1}{x+2}$ using First Principles

$f'(x)\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{\dfrac{1}{x+h+2}-\dfrac{1}{x+2}}{h}$

$f'(x)=\lim\limits_{h\to0}(\dfrac{1}{h})(\dfrac{1}{x+h+2}-\dfrac{1}{x+2})$

$f'(x)=\lim\limits_{h\to0}(\dfrac{1}{h})\dfrac{x+2-x-h-2}{(x+2)(x+h+2)}$

$f'(x)=\lim\limits_{h\to0}(\dfrac{1}{h})\dfrac{-h}{(x+2)(x+h+2)}$

$f'(x)=\lim\limits_{h\to0}\dfrac{-1}{(x+2)(x+h+2)}$

$f'(x)=\dfrac{-1}{(x+2)^2}$


worked example: Use First Principles to find the derivative of $f(x)=x^2$

$f'(x)=\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{(x+h)^2-(x)^2}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{x^2+2xh+h^2-x^2}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{2xh+h^2}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{h(2x+h)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{1(2x+h)}{1}$

$f'(x)=2x$


worked example: Use First Principles to find the derivative of $f(x)=\dfrac{1}{x}$

$f'(x)=\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{\dfrac{1}{x+h}-\dfrac{1}{x}}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{1}{h}(\dfrac{x-x-h}{x(x+h)})$

$f'(x)=\lim\limits_{h\to0}\dfrac{1}{h}(\dfrac{-h}{x(x+h)})$

$f'(x)=\lim\limits_{h\to0}\dfrac{-1}{x(x+h)}$

$f'(x)=\dfrac{-1}{x^2}$


worked example: Differentiate $f(x)=\sqrt{x}$ using First Principles

$f'(x)=\lim\limits_{h\to0}\dfrac{f(x+h)-f(x)}{h}$

$f'(x)=\lim\limits_{h\to0}\dfrac{\sqrt{x+h}-\sqrt{x}}{h}$

multiply by the conjugate

$f'(x)=\lim\limits_{h\to0}\dfrac{\sqrt{x+h}-\sqrt{x}}{h}\cdot \dfrac{\sqrt{x+h}+\sqrt{x}}{\sqrt{x+h}+\sqrt{x}}$

$f'(x)=\lim\limits_{h\to0}\dfrac{x+h-x}{h(\sqrt{x+h}+\sqrt{x})}$

$f'(x)=\lim\limits_{h\to0}\dfrac{h}{h(\sqrt{x+h}+\sqrt{x})}$

$f'(x)=\dfrac{1}{\sqrt{x+h}+\sqrt{x}}$

$f'(x)=\dfrac{1}{2\sqrt{x}}$
