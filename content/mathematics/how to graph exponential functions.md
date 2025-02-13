---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

a [[exponential function]] has domain $\mathbb{R}$ and the range is dependent upon some things

assume we have an exponential function, in the form $f(x)=a\cdot c^{b(x-h)}+k$

one thing about all exponential functions, they all have a horizontal asymptote at the line $f(x)=k$


assume that $a$ and $b$ are positive and $c>1$, remember how a general exponential function looks like

figure: the general exponential function goes from the left to the upper right
![[how to graph exponential functions 2024-09-28 10.14.40.excalidraw.svg|486]]
%%[[how to graph exponential functions 2024-09-28 10.14.40.excalidraw.md|🖋 Edit in Excalidraw]]%%


now, we think about other values for $a$, $b$ and $c$

if a is negative, there will be a vertical reflection across the asymptote
if $b$ is negative, there will be a horizontal reflection
if $c$ is in the range $0<c<1$, there will be a horizontal reflection




worked example: graph $y=1-\dfrac{3}{2^{5-2x}}$

since the coefficient of $x$ is negative, we need to flip horizontally 

simplify to the form $f(x)=a\cdot c^{b(x-h)}+k$
$y=-3\cdot2^{2(x-\frac{5}{2})}+1$

since a is negative, there is a vertical reflection across the asymptote
since $b$ is positive, there is no horizontal reflection
so our graph is like this
![[how to graph exponential functions 2024-10-02 11.45.34.excalidraw.svg|350]]
%%[[how to graph exponential functions 2024-10-02 11.45.34.excalidraw.md|🖋 Edit in Excalidraw]]%%

the asymptote is $y=1$

now find the axial intercepts

x-intercepts
$0=-3\cdot2^{2(x-\frac{5}{2})}+1$
$-1=-3\cdot2^{2(x-\frac{5}{2})}$
$\dfrac{1}{3}=2^{2x-5}$
$\dfrac{1}{3}=\dfrac{2^{2x}}{2^5}$

$x\approx 1.71$

y-intercepts
$y=-3\cdot2^{-5}+1$
$y=1-\dfrac{3}{2^5}$
$y\approx 0.91$




worked example: graph $y=\dfrac{e}{e^{5+3x}}-e$
simplify to the form $f(x)=a\cdot c^{b(x-h)}+k$
$y=e^1\cdot e^{-5-3x}-e$
$y=e^{-3x-4}-e$
$y=e^{-3(x+\frac{4}{3})}-e$

since $a$ is positive, there is no vertical reflection across the asymptote
since $b$ is negative, there is horizontal reflection

the asymptote is $y=-e$

x-intercepts
$0=e^{-3x-4}-e$
$e=e^{-3x-4}$
$1=-3x-4$
$x=-\dfrac{5}{3}$

y-intercepts
$y=e^{-4}-e$
$y\approx-2.70$





worked example: graph $y=2e^{3x-2}-1$
simplify to the form $f(x)=a\cdot c^{b(x-h)}+k$
$y=2e^{3(x-\frac{2}{3})}-1$

asymptote is $y=-1$

since $a$ is positive, there is no vertical reflection across the asymptote
since $b$ is positive, there is no horizontal reflection

x-intercepts
$0=2e^{3x-2}-1$
$1=2\cdot e^{3x}\cdot\dfrac{1}{e^2}$

$\dfrac{e^2}{2}=e^{3x}$
$\log_e(\dfrac{e^2}{2})=\log_e(e^{3x})$

$\ln(e^2)-\ln(2)=3x$
$2-\ln(2)=3x$
$x=\dfrac{2-\ln(2)}{3}$


y-intercepts

$y=2e^{-2}-1$
$y\approx-0.73$


worked example: graph $y=5\cdot(\dfrac{4}{5})^x$ 
simplify to the form $f(x)=a\cdot c^{b(x-h)}+k$

$y=5\cdot(\dfrac{4}{5})^x$ 

asymptote is $y=0$

since $a$ is positive, there is no vertical reflection across the asymptote
since $b$ is positive, there is no horizontal reflection
siince $c$ is in $0<c<1$, there is hori

x-intercepts
btw since we know the asymptote is the x axis, we already know there are no x-intercepts
$0=5\cdot(\dfrac{4}{5})^x$
$(\dfrac{4}{5})^x=0$
no x-intercepts

y-intercepts
$y=5$
