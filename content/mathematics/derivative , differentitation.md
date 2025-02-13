---
title: 
description: 
aliases: [derivative, differentiate, differentiation]
tags: []
created: 2024-11-23T13:40:44
modified: 2025-02-09T15:53:46
permalink: derivative
---

[[guide to differentiation]]

A derivative is an [[operation]] that quantifies the sensitivity of change of a function's output as its input changes

The act of finding a derivative is called differentiation.
Differentiation is the core of [[calculus , differential calculus , integral calculus|differential calculus]].

## syntax

there are a few ways derivatives are presented.

if we have an expression $x^3$, its derivative is shown as $\dfrac{d}{dx}[x^3]$
if we have a function $f(x)=x^3$, the derivative of the function is $f'(x)=\dfrac{d}{dx}[x^3]$
if we have an equation $y=x^3$, the derivative of the equation is $\dfrac{dy}{dx}=\dfrac{d}{dx}[x^3]$
notice how differentiation is an operation so it can be done to both sides of the equation



the derivative of a function $f(x)$ are point $x=c$ is the [[slope]] of tangent line at that point

finding the derivative is called differentiation. for a function $f(x)$ we can find its derivative with:

$f'(x)=\lim \limits_{x \to c} \dfrac{f(x)-f(c)}{x-c}$

this definition is explained in [[proof of finding derivative]]

## differentiability

in calculus, we have a way to tell if you can perform a derivative on a function

for a point $x=c$ on function $f$: $f$ is not differentiable if $f$ is not continuous at $x=c$, or if $f$ has a sharp turn at $x=c$. in order for $f$ to be continuous at $x=c$, $\lim \limits_{x \to c}\dfrac{f(x)-f(c)}{x-c}$ must exist.

if differentiable, then it must be continuous.

## derivative rules

### constant rule

for any constant $c$, $\dfrac{d}{dx}\left[c\right]=0$

### variable rule

$\dfrac{d}{dx}\left[x\right] = 1$

### constant multiple rule

c is a constant $\dfrac{d}{dx}\left[c*f(x)\right] = c*\dfrac{d}{dx}\left[f(x)\right] = c*f'(x)$

### sum rule

$\dfrac{d}{dx}\left[f(x)+g(x)\right] = \dfrac{d}{dx}\left[f(x)\right] +\dfrac{d}{dx}\left[g(x)\right] = f'(x) + g'(x)$

### difference rule

it's exactly equal to the sum rule, no problem here

$\dfrac{d}{dx}\left[f(x)-g(x)\right] = \dfrac{d}{dx}\left[f(x)\right] -\dfrac{d}{dx}\left[g(x)\right] = f'(x) - g'(x)$

### power rule

if $f(x) = x^n$ and $n\neq0$, then $f'(x)=n\cdot x^{n-1}$

this means that to get $\dfrac{d}{dx}\left[ \sqrt[3]{x^2} \right]$ at $x=8$

we could evaluate $\dfrac{d}{dx}\left( x^{\dfrac{2}{3}} \right)$, which is equal to $\dfrac{2}{3}*x^{\left(\dfrac{2}{3}-1\right)}$, which is equal to $\dfrac{2}{3}*x^{-\dfrac{1}{3}}$

substitute $x=8$, we get $\dfrac{2}{3}*8^{-\dfrac{1}{3}}$, which is equal to $\dfrac{1}{3}$

this means that if $y=x^13$, then $\dfrac{d}{dx}\left[ y \right] = 13x^{12}$

### product rule

$\dfrac{d}{dx}\left[f(x)g(x)\right] = f'(x)g(x)+f(x)g'(x)$

### quotient rule

$\dfrac{d}{dx}\left[\dfrac{f(x)}{g(x)}\right] = \dfrac{f'(x)g(x)-f(x)g'(x)}{g(x)^2}$

#### where numerator is 1

$\dfrac{d}{dx}\left[\dfrac{1}{f(x)}\right]=-\dfrac{f'(x)}{f(x)^2}$

### chain rule

$\dfrac{d}{dx}\left[f(g(x))\right] = f'(g(x))\cdot g'(x)$

here is an example of the chain rule

$\dfrac{d}{dx}\left[\ln(\sin(x))\right] = \dfrac{1}{\sin(x)}\cdot\cos(x)$

### other

$\dfrac{d}{dx}\left[\sin(x)\right] = \cos(x)$

$\dfrac{d}{dx}\left[\cos(x)\right] = -\sin(x)$

$\dfrac{d}{dx}\left[e^x\right] = e^x$

$\dfrac{d}{dx}\left[\ln(x)\right] = \dfrac{1}{x} = x^{-1}$

$\dfrac{d}{dx}\left[\tan(x)\right] = \dfrac{1}{\cos^2(x)} = \sec^2(x)$

$\dfrac{d}{dx}\left[\cot(x)\right] = \dfrac{-1}{\sin^2(x)} = -\csc^2(x)$

$\dfrac{d}{dx}\left[\sec(x)\right] = \dfrac{\sin(x)}{\cos^2(x)} = \tan(x)*\sec(x)$

$\dfrac{d}{dx}\left[\csc(x)\right] = \dfrac{-\cos(x)}{\sin^2(x)} = -\cot(x)*\csc(x)$

$\text{if }a>0\text{, }\dfrac{d}{dx}\left[a^x\right] = \ln(a)*a^x$

$\text{if }a>0\text{, and }a\neq1\text{, }\dfrac{d}{dx}\left[\log_a(x)\right] = \dfrac{1}{\ln(a)*x}$

### $f(x) = x^5+2x^3-x^2$

$f'(x) = \dfrac{d}{dx}\left[f(x)\right] = \dfrac{d}{dx}\left[x^5+2x^3-x^2\right]$

$f'(x) = \dfrac{d}{dx}\left[x^5\right] + \dfrac{d}{dx}\left[2x^3\right] - \dfrac{d}{dx}\left[x^2\right]$

$f'(x) = 5x^4+6x^2-2x^1$

### implicit differentiation

we have this very hard equation:

$x^2+(y-x)^3=28$

the graph of this equation is continuous, but the slope changes dramatically at different x values.

take the derivative of this equation:

$\dfrac{d}{dx}\left[x^2+(y-x)^3\right] = \dfrac{d}{dx}\left[28\right]$

apply derivative rules:

$2x+3(y-x)^2(\dfrac{dy}{dx}-1)=0$

$2x-3(y-x)^2+3(y-x)^2\cdot\dfrac{dy}{dx}=0$

$3(y-x)^2\cdot\dfrac{dy}{dx}=3(y-x)^2-2x$

$\dfrac{dy}{dx} = \dfrac{3(y-x)^2-2x}{3(y-x)^2}$

okay, realize how this derivative equation has x and y in it. this is what makes it an implicit differentiation.

this video is an example of how implicit differs from using explicit differentiation
https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-2/v/showing-explicit-and-implicit-differentiation-give-same-result

## derivatives of inverse functions

the inverse of $f(x)$ is $f^{-1}(x)$.

the derivative of $f(x)$ is $f'(x)$.

$f'(x) = \dfrac{1}{f^{-1}(f(x))}$

this is really exciting! also,

$\dfrac{d}{dx}\left[\sin^{-1}(x)\right] = \dfrac{1}{\sqrt{1-x^2}}$

$\dfrac{d}{dx}\left[\cos^{-1}(x)\right] = -\dfrac{1}{\sqrt{1-x^2}}$

$\dfrac{d}{dx}\left[\tan^{-1}(x)\right] = \dfrac{1}{1+x^2}$

### second derivatives

we can take the derivative of the derivative of a function. this is called the second derivative. the second derivative of $f$ is $\dfrac{d}{dx}\left[\dfrac{d}{dx}\left[f\right]\right]$, or $f''$

### hidden derivatives

what is $\lim \limits_{x \to 0}\dfrac{3(2+x)^4-3(2)^4}{h}$

this limit expression has the form:

$\lim \limits_{x \to 0}\dfrac{f(t+x)-f(t)}{x}$

we can tell that $t$, or the x value, is 2.

this means that we need to evaluate $f'(2)$

in this case, $f(x)=3x^4$, and $f'(x)=12x^3$

so the answer is $f'(2)$, which is $12(2)^3$, which is $96$

### related derivatives

https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-5/v/falling-ladder-related-rates
here is example of a related rates problem


the differentiable functions $f$ and $g$ are related by the following equation:

$\sin(f)+\cos(g)=\sqrt{2}$

also, $\dfrac{df}{dt}=5$

find $\dfrac{dg}{dt}$ when $y=\dfrac{\pi}{4}$ and $0<x<\dfrac{\pi}{2}$

### $\dfrac{d}{dt}\left[\sin(f(t))\right]+\dfrac{d}{dt}\left[\cos(g(t))\right]=\dfrac{d}{dt}\left[\sqrt{2}\right]$

$\dfrac{d}{dt}\left[\sin(f)\right]*\dfrac{df}{dt}+\dfrac{d}{dt}\left[\cos(g)\right]*\dfrac{dg}{dt}=0$

in this case, $\dfrac{df}{dt}=5$ and $y=\dfrac{\pi}{4}$, and after solving for $g$ we know that $g=\dfrac{\pi}{4}$ so we can simplify:

$5*\cos(\dfrac{\pi}{4})-\dfrac{dy}{dt}*\sin(\dfrac{\pi}{4})=0$

$5-\dfrac{dy}{dt}=0$

$\dfrac{dy}{dt}=5$
