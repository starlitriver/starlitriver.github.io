---
title: 
description: 
aliases: []
tags: []
created: 2025-01-30T13:13:11
modified: 2025-02-09T15:53:45
permalink:
---

This is a part of [[guide to graphing functions]].

## sine, cosine and tangent

we will graph a function in the form $f(x)=A\cdot\sin(n(x-b))+c$,
and $f(x)=A\cdot\cos(n(x-b))+c$, and $f(x)=A\cdot\tan(n(x-b))+c$

$A$ is the amplitude of the graph
$c$ is the vertical translation of the graph and the midline is $y=c$
the period of the graph is $\dfrac{2\pi}{n}$ for sine and cosine, and is $\dfrac{\pi}{n}$ for tangent
the dilation factor from the x-axis is $\dfrac{1}{n}$
$b$ is the amount of horizontal translation to the right


what do we do?
read your question.
it usually restricts your function domain, for example by defining the function for a domain interval
if there are no restrictions on the domain, just draw everything that should be in the graph and 

things we need

- the domain for which we sketch
- midline
- amplitude
- period
- one x-intercept. this can be used to find all x intercepts.
- y-intercept

the period is $\frac{2\pi}{n}$ 

to find the coordinates of the y-intercept, set $x=0$
to find the coordinates of the x-intercepts, if any, set $y=0$



amplitude is always shown as capital A[^amplitude]



worked example: graph $y=2\sin(\dfrac{x}{2})$ for $x\in(0,4\pi)$

amplitude is 2
period is $\dfrac{2\pi}{0.5}=4\pi$

![[guide to trigonometry 2024-09-06 17.12.13.excalidraw.svg|508]]
%%[[guide to trigonometry 2024-09-06 17.12.13.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example: graph $y=3\sin(2x)$ for $x\in(-\pi,\pi)$

amplitude is 3
period is $\dfrac{2\pi}{2}=\pi$
![[guide to trigonometry 2024-09-06 17.51.15.excalidraw.svg|690]]
%%[[guide to trigonometry 2024-09-06 17.51.15.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example: graph $y=\sin(2(x-\dfrac{\pi}{4}))$ for $x\in[-\dfrac{3\pi}{4},\dfrac{\pi}{2}]$
amplitude is is 1, period is $\dfrac{2\pi}{2}=\pi$, translated $\dfrac{\pi}{4}$ to the right

![[guide to trigonometry 2024-09-06 18.01.14.excalidraw.svg|624]]
%%[[guide to trigonometry 2024-09-06 18.01.14.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example graph $y=2\sin(3(x+\dfrac{\pi}{4}))$
amplitude is 2, period is $\dfrac{2\pi}{3}$ and translated $\dfrac{\pi}{4}$ to the left

calculate y-intercept: $y=2\sin(\dfrac{3\pi}{4})=2\sin(\dfrac{\pi}{4})=\sqrt{2}$


find maximum points
$\sin(3(x+\dfrac{\pi}{4}))=1$
$\sin(\dfrac{\pi}{2})=1$
$3(x+\dfrac{\pi}{4})=\dfrac{\pi}{2}$
$x+\dfrac{\pi}{4}=\dfrac{\pi}{6}$
$x=\dfrac{-\pi}{12}$

find minimum points
$\sin(3(x+\dfrac{\pi}{4}))=-1$
$\sin(\dfrac{3\pi}{2})=-1$
$3(x+\dfrac{\pi}{4})=\dfrac{3\pi}{2}$
$x+\dfrac{\pi}{4}=\dfrac{\pi}{2}$
$x=\dfrac{\pi}{4}$

find x-intercepts
$2\sin(3(x+\dfrac{\pi}{4}))=0$
$\sin(3(x+\dfrac{\pi}{4}))=0$
$\sin(0)=0$
$3(x+\dfrac{\pi}{4})=0$
$x=\dfrac{\pi}{4}$



worked example: graph $f(x)=2\cos(2x)-1$

amplitude is 2, period is $\pi$ and translated 1 down

find x-intercepts
$0=2\cos(2x)-1$
$0=\cos(2x)-\dfrac{1}{2}$
$\dfrac{1}{2}=\cos(2x)$
$\dfrac{1}{2}=\cos(\dfrac{\pi}{3})$
$2x=\dfrac{\pi}{3}$
$x=\dfrac{\pi}{6}$


worked example: graph $y=\sqrt{2}\sin(2(x+\dfrac{\pi}{6}))+2$



worked example: graph $y=-2\sin(2x+\pi)+1$
to graph this we need to put it in the format we recognize by factoring
$y=-2\sin(2(x+\dfrac{\pi}{2}))+1$
we need to flip this vertically at the end because negative at the front
amplitude is 2
period is $\dfrac{2\pi}{2}=\pi$
translation is $\dfrac{\pi}{2}$ to the left
midline is $y=1$




worked example: graph $y=3\tan(2x)$ where $x\in[-\pi,\pi]$
period is $\dfrac{\pi}{2}$

find x-intercepts
$0=3\tan(2x)$
$0=\tan(2x)$
$0=\tan(0)$
$2x=0$
$x=0$


find asymptotes
$\cos(2x)=0$
$\cos(\dfrac{\pi}{2})=0$
$2x=\dfrac{\pi}{2}$
$x=\dfrac{\pi}{4}$




worked example: graph $y=2\tan(\dfrac{x}{2})-2$ where $x\in(\dfrac{-\pi}{2},\pi)$

period is $2\pi$

find x-intercepts
$0=2\tan(\dfrac{x}{2})-2$
$y=\tan(\dfrac{x}{2})-1$
$1=\tan(\dfrac{x}{2})$
$1=\tan(\dfrac{\pi}{4})$
$\dfrac{x}{2}=\dfrac{\pi}{4}$
$x=\dfrac{\pi}{2}$


find asymptotes
$\cos(\dfrac{x}{2})=0$
$\cos(\dfrac{\pi}{2})=0$
$x=\pi$



worked example: graph $y=-\tan(x-\dfrac{\pi}{4})$ where $x\in(-\pi,\pi)$

period is $\pi$

find x-intercepts

$0=-\tan(x-\dfrac{\pi}{4})$
$0=\tan(x-\dfrac{\pi}{4})$
$0=\tan(0)$
$x-\dfrac{\pi}{4}=0$
$x=\dfrac{\pi}{4}$


find asymptotes

$\cos(x-\dfrac{\pi}{4})=0$
$\cos(\dfrac{\pi}{2})=0$
$x-\dfrac{\pi}{4}=\dfrac{\pi}{2}$
$x=\dfrac{3\pi}{4}$

[^amplitude]:: amplitude is often shown as capital A in physics https://en.wikipedia.org/wiki/Amplitude
