---
title: 
description: 
aliases: []
tags: []
created: 2025-06-16T10:40:20
modified: 2025-06-22T11:00:05
permalink:
---

## Find the value of a, where a>0 such that the area enclosed by the curve of function f(x) and the x-axis equals 1, where $f:[0,π]→R$, $f(x)=a\sin(x)$.

The area enclosed is $\displaystyle\int_{0}^{\pi} a\sin(x)\cdot dx=\Big[ ax-\cos(x) \Big]_0^\pi=1$ 
$a(-\cos(\pi)-(-1))=1$
$2a=1$
$a=\dfrac{1}{2}$

## Evaluate $\displaystyle\int_{\frac{-\pi}{2}}^{\frac{\pi}{2}} \sin(2x)\cdot dx$.

$\displaystyle\int_{\frac{-\pi}{2}}^{\frac{\pi}{2}} \sin(2x)\cdot dx$
$=\Big[ \dfrac{-\cos(2x)}{2} \Big]_\frac{-\pi}{2}^\frac{\pi}{2}$
$=\dfrac{1}{2}-\dfrac{1}{2}$
$=0$

## Given $\displaystyle\int_0^3 q(x)\cdot dx=5$, find $\displaystyle\int_0^6 [q\left(\frac{x}{2}\right) + x]\cdot dx$.

$\displaystyle\int_0^6 \left(q\left(\frac{x}{2}\right) + x\right)\cdot dx$
$=\displaystyle\int_0^6 q\left(\frac{x}{2}\right)\cdot dx+\displaystyle\int_0^6 x\cdot dx$
$=\Big[ 2\cdot Q(\dfrac{x}{2}) \Big]_0^6+\Big[ \dfrac{x^2}{2} \Big]_0^6$
$=2\cdot \Big[ Q(x) \Big]_0^3+\Big[ \dfrac{x^2}{2} \Big]_0^6$
$=2\cdot(Q(3)-Q(0))+\Big[ \dfrac{x^2}{2} \Big]_0^6$
$=10+18$
$=28$

## Evaluate $\displaystyle\int_{\frac{-\pi}{3}}^{\frac{\pi}{2}} \sec^2(\dfrac{x}{2})\cdot dx$.

$=\Big[ 2\tan(\dfrac{x}{2}) \Big]_\frac{-\pi}{3}^\frac{\pi}{2}$
$=2\tan(\dfrac{\pi}{4})-2\tan(\dfrac{-\pi}{6})$
$=2+\dfrac{2\sqrt{3}}{3}$

## Find the exact area of the region bounded by $y=\dfrac{1}{2}x+1$, $y=−x+2$ and the x−axis.

Intersection at $\dfrac{1}{2}x+1=-x+2$
$x+2=-2x+4$
$3x=2$
$x=\dfrac{2}{3}$

x-int at $x=-2$ and $x=2$
Total area needed is $\displaystyle\int_{-2}^\frac{2}{3} [\dfrac{1}{2}x+1]\cdot dx+\displaystyle\int_\frac{2}{3}^2 [-x+2]\cdot dx$
$=\Big[ \dfrac{x^2}{4}+x \Big]_{-2}^\frac{2}{3}+\Big[ \dfrac{-x^2}{2}+2x \Big]_\frac{2}{3}^2$

Ok this is too bad. Let's be smart and just calculate the triangle. $\dfrac{1}{2}\cdot 4\cdot \dfrac{4}{3}=\dfrac{8}{3}$


![[lecture 15 applications of antidiff 2025-06-16 11.35.34.excalidraw.svg|350]]
%%[[lecture 15 applications of antidiff 2025-06-16 11.35.34.excalidraw.md|🖋 Edit in Excalidraw]]%%

## By first differentiating $\sqrt{x^3+1}$, find an antiderivative of $\dfrac{x^2}{\sqrt{x^3+1}}$.

$\dfrac{d}{dx}[\sqrt{x^3+1}]=\dfrac{1}{2}(x^3+1)^{\dfrac{-1}{2}}\cdot 3x^2=\dfrac{3x^2}{2\sqrt{x^3+1}}$



$\dfrac{3}{2}\cdot \dfrac{x^2}{\sqrt{x^3+1}}=\dfrac{d}{dx}[\sqrt{x^3+1}]$

$\dfrac{x^2}{\sqrt{x^3+1}}=\dfrac{d}{dx}[\sqrt{x^3+1}]\cdot \dfrac{2}{3}$

Take antiderivative of both sides

Answer is $\dfrac{2}{3}\cdot \sqrt{x^3+1}+C$

## Find the area enclosed by the graphs $y=e^x$, $y=e^{-x}$ and $x=\ln(2)$.

![[lecture 15 applications of antidiff 2025-06-16 12.05.49.excalidraw.svg|370]]
%%[[lecture 15 applications of antidiff 2025-06-16 12.05.49.excalidraw.md|🖋 Edit in Excalidraw]]%%


Bounded area is top minus bottom

$\displaystyle\int_0^{\ln(2)} e^x-e^{-x}\cdot dx$
$=\Big[ e^x+e^{-x} \Big]_0^{\ln(2)}$
$=2+\dfrac{1}{2}-(2)$
$=\dfrac{1}{2}$

## Find the average value of the function $f(x)=\dfrac{3}{2x-5}-3$ over the interval $[0,1]$.

Average value is $\displaystyle\int_0^{1} \dfrac{3}{2x-5}-3\cdot dx$
$=\displaystyle\int_0^{1} 3\cdot(2x-5)^{-1}-3\cdot dx$
$=\Big[ \dfrac{3}{2}\ln(2x-5) \Big]_0^1+\Big[ -3 \Big]_0^1$
$=\dfrac{3}{2}[\ln(-3)-\ln(-5)]-3$
$=\dfrac{3}{2}\ln(\dfrac{3}{5})-3$

## For $\displaystyle\int_0^{3} q(x)\cdot dx=5$, find the value of $\displaystyle\int_0^{6} [q(\dfrac{x}{2})-2x]\cdot dx$.

$\displaystyle\int_0^{6} [q(\dfrac{x}{2})-2x]\cdot dx$

$=\displaystyle\int_0^{6} q(\dfrac{x}{2})\cdot dx+\displaystyle\int_0^{6} -2x\cdot dx$
$=\Big[ 2\cdot Q\left(\dfrac{x}{2}\right) \Big]_0^{6} + \Big[ -x^2 \Big]_0^6$
$=2\cdot [Q(3)-Q(0)]-36$
$=2\cdot 5-36$
$=-26$

## For $h(x)=2x^3-x^2+2x+1$, find average value of h over the interval $[-2,1]$.

Average value is $\displaystyle\int_{-2}^{1} h(x)\cdot dx \cdot \dfrac{1}{3}$
$=\Big[ \dfrac{x^4}{2}-\dfrac{x^3}{3}+x^2+x \Big]_{-2}^1\cdot \dfrac{1}{3}$
$=[\dfrac{1}{2}-\dfrac{1}{3}+1+1-(8+\dfrac{8}{3}+4-2)]\cdot \dfrac{1}{3}$
$=\dfrac{-7}{2}$

## Find the average value of $f(x)=\cos(x)$ over the interval $[0,\dfrac{\pi}{6}]$.

Average value is $\displaystyle\int_{0}^{\frac{\pi}{6}} f(x)\cdot dx \cdot \dfrac{6}{\pi}$
$= \Big[ \sin(x) \Big]_0^{\frac{\pi}{6}} \cdot \dfrac{6}{\pi}$  
$=\left[ \sin\left(\dfrac{\pi}{6}\right) - \sin(0) \right] \cdot \dfrac{6}{\pi}$  
$=[ \dfrac{1}{2} - 0 ] \cdot \dfrac{6}{\pi}$  
$=\dfrac{3}{\pi}$

## Find the average value of $f(x)=\dfrac{1}{3x+1}$ over the interval $[0,2]$.

Average value is $\displaystyle\int_{0}^{2} f(x)\cdot dx \cdot \dfrac{1}{2}$
$= \Big[ \dfrac{1}{3}\cdot \ln(3x+1) \Big]_0^{2} \cdot \dfrac{1}{2}$  
$=[\dfrac{\ln(7)}{3}-\dfrac{\ln(1)}{3}] \cdot \dfrac{1}{2}$  
$=\dfrac{\ln(7)}{3}\cdot \dfrac{1}{2}$  
$=\dfrac{\ln(7)}{6}$

## A quantity of gas expands according to the law $pv^{0.9}=75$, where $v\text{m}^3$ is the volume of the gas and $p\text{Nm}^{-2}$ is the pressure. What is the average pressure as the volume changes from $\dfrac{1}{2}\text{m}^3$ to $1\text{m}^3$?

We can find the function $p(v)=\dfrac{75}{v^{0.9}}$ so $p(v)=75\cdot v^{-0.9}$

Average pressure over the interval $v\in[\dfrac{1}{2},1]$ is $\displaystyle\int_{\frac{1}{2}}^{1} p(v)\cdot dv \cdot 2$
$= \Big[ 75\cdot [\dfrac{v^{0.1}}{0.1}] \Big]_{\frac{1}{2}}^{1} \cdot 2$  
$= \Big[ 750\cdot v^{0.1} \Big]_{\frac{1}{2}}^{1} \cdot 2$  
$=[750-750(\dfrac{1}{2}^{0.1})] \cdot 2$  
$=[1-\dfrac{1}{2}^{0.1}] \cdot 2\cdot 750$  
$=1500-\dfrac{1500}{2}^{0.1}$  

Therefore we found the average p over the interval.

## For  $\displaystyle\int_{0}^{5} g(x)\cdot dx =20$, find  $\displaystyle\int_0^5 [2g(x)+3]\cdot dx$.

$\displaystyle\int_0^5 [2g(x)+3]\cdot dx$
$=\displaystyle\int_0^5 [2g(x)]\cdot dx+\displaystyle\int_0^5 [3]\cdot dx$
$= \Big[ 2\cdot G(x)\Big]_{0}^{5} + \Big[ 3x\Big]_{0}^{5}$ 
$=2\cdot 20+15$
$=55$

## Find the average value of $f(x)=\cos(x)$ over the interval $[0,\pi]$.

Average value is $\displaystyle\int_0^{\pi} \cos(x)\cdot dx\cdot \dfrac{1}{\pi}$
$= \Big[ \sin(x) \Big]_{0}^{\pi}\cdot \dfrac{1}{\pi}$ 
$=0$

## An object is cooling and its temperature, T degrees, after t minutes is given by $T=45e^{−2t}$. What is its average temperature over the first 15 minutes of cooling?

Answer is $\displaystyle\int_0^{15} 45e^{-2t}\cdot dt\cdot \dfrac{1}{15}$
$= 45\cdot\Big[ \dfrac{e^{-2t}}{-2} \Big]_{0}^{15}\cdot \dfrac{1}{15}$ 
$= \dfrac{45}{-2}\cdot (e^{-30}-1) \cdot \dfrac{1}{15}$ 
$= \dfrac{3}{-2}\cdot (e^{-30}-1)$ 
$=\dfrac{3}{2}-\dfrac{3}{2}e^{-30}$

## Find the average value of the function $f(x)=\dfrac{1}{3}x^2$ over the interval $[6,9]$.

Average value is  $\displaystyle\int_6^{9} \dfrac{1}{3}x^2\cdot dx\cdot \dfrac{1}{3}$
$=\dfrac{1}{9}\cdot \Big[ x^3 \Big]_{6}^{9}\cdot \dfrac{1}{3}$
$=\dfrac{9^3-6^3}{27}$
$=19$

## Find the average value of the function $f(x)=e^x+e^{-x}$ over the interval $[-2,2]$.

Average value is  $\displaystyle\int_{-2}^{2} e^x+e^{-x}\cdot dx\cdot \dfrac{1}{4}$
$=\Big[ e^x-e^{-x} \Big]_{-2}^{2}\cdot \dfrac{1}{4}$
$=[e^2-\dfrac{1}{e^2}-(\dfrac{1}{e^2}-e^2)]\cdot \dfrac{1}{4}$
$=[2e^2-\dfrac{2}{e^2}]\cdot \dfrac{1}{4}$
$=\dfrac{e^2-e^{-2}}{2}$

## For $f'(x)=g'(x)+3$, $f(0)=3$ and $g(0)=1$. Find $f(x)$.

## Find the area enclosed by the curve $y=-e^x$, both axes, and the line $x=−1$.

So the interval we want is probably $[-1.0]$

$\displaystyle\int_{-1}^{0} -e^x\cdot dx$
$=-1\cdot \Big[ e^{x} \Big]_{-1}^{0}$
$=-1(1-\dfrac{1}{e})$
$=\dfrac{1}{e}-1$

## For $f(x)=x^2-3x+2$, find average value in the interval $[-2,3]$.

$\displaystyle\int_{-2}^{3} [x^2-3x+2]\cdot dx\cdot\dfrac{1}{5}$
$=\Big[ \dfrac{x^3}{3}-\dfrac{3x^2}{2}+2x \Big]_{-2}^{3}\cdot \dfrac{1}{5}$
$=[9-\dfrac{27}{2}+6-(\dfrac{-8}{3}-6-4)]\cdot \dfrac{1}{5}$
$=[25-\dfrac{27}{2}+\dfrac{8}{3}]\cdot \dfrac{1}{5}$
$=\dfrac{17}{6}$

## For $\displaystyle\int_{0}^{a} f(x)\cdot dx=k$, find $\displaystyle\int_{0}^{a} 3f(x)+2\cdot dx$.

$\displaystyle\int_{0}^{a} 3f(x)+2\cdot dx$
$=3k+2a$

## The average value of $f(x)=x^2-2x$ over the interval $[1,a]$ is $\dfrac{13}{3}$. Find $a$.

$\displaystyle\int_{1}^{a} [x^2-2x]\cdot dx \cdot \dfrac{1}{a-1}=\dfrac{13}{3}$
$\Big[ \dfrac{x^3}{3}-x^2 \Big]_1^{a}\cdot \dfrac{1}{a-1}=\dfrac{13}{3}$
$[\dfrac{a^3}{3}-a^2-\dfrac{1}{3}+1\cdot ]\dfrac{1}{a-1}=\dfrac{13}{3}$
$a=-3,5$

## Given that $\cos(2x)=2\cos^2(x)−1$, find the value of $\displaystyle\int_{\frac{\pi}{4}}^{\frac{3\pi}{4}} \sin^2(x)\cdot dx$.

$\displaystyle\int_{\frac{\pi}{4}}^{\frac{3\pi}{4}} \sin^2(x)\cdot dx$.
$=$
