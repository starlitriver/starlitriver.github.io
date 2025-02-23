---
title: 
description: 
aliases: []
tags: []
created: 2024-12-04T21:51:30
modified: 2025-02-22T19:06:16
permalink:
---

## start on calculus

[[guide to differentiation - a start on calculus]]

calculus is yours to learn!

[[exercise - basic differentiation concepts]]

## list of definitions

Now before we start things, I've arranged a list of definitions.
Please read.
- The function $f'(x)$ is the derivative of function $f(x)$.
- "Find the derivative of" is exactly same as "differentiate."
- The derivative is an operation performed on expressions. The expression $x+1$ has a derivative of $\dfrac{d}{dx}[x+1]$. Keep in mind, derivative is an operation on expressions.
- Equations can be made into functions. If you were given $y=x+1$, its graph is the same as $y(x)=x+1$. Therefore, the derivative of function $y(x)$ is just $y'(x)$.
- $f'(x)$ has many different appearances. $f'(x)=\dfrac{d}{dx}[x]$. We call it a few things, like "f prime of x", "derivative of f of x"...

## derivative rules

What if you knew there was a way that's easier than using First Principles? It's derivative rules!

Originally derived from the principles we all know and love, these derivative rules only require you to remember them in exchange for faster differentiating.

### constant rule

- Constant rule - derivative of the expression $c$ is $\dfrac{d}{dx}[c]=0$

### variable rule

- Variable rule - derivative of the expression $x$ is $\dfrac{d}{dx}[x]=1$

### power rule

- Power rule - derivative of the expression $x^n$ is $\dfrac{d}{dx}[x^n]=nx^{n-1}$

### constant multiple rule

- Constant multiple rule - derivative of the expression $c \cdot f(x)$ is $\dfrac{d}{dx}[c \cdot f(x)]=c \cdot \dfrac{d}{dx}[f(x)]$

### sum rule

- Sum rule - derivative of the expression $f(x)+g(x)$ is $\dfrac{d}{dx}[f(x)+g(x)]=\dfrac{d}{dx}[f(x)]+\dfrac{d}{dx}[g(x)]$

### sin(x) and cos(x)

- derivative of $\sin(x)$ is $\dfrac{d}{dx}[\sin(x)]=\cos(x)$
- derivative of $\cos(x)$ is $\dfrac{d}{dx}[\cos(x)]=-\sin(x)$

### things about the number e

- derivative of $e^x$ is $\dfrac{d}{dx}[e^x]=e^x$
- derivative of $ae^{bx+c}$ is $\dfrac{d}{dx}[ae^{bx+c}]=bae^{bx+c}$
- derivative of $ae^{m(x)}$ is $\dfrac{d}{dx}[ae^{m(x)}]=ae^{m(x)}\cdot m'(x)$
- derivative of $\ln(x)$ is $\dfrac{d}{dx}[\ln(x)]=\dfrac{1}{x}$
- derivative of $\ln(ax)$ is $\dfrac{d}{dx}[\ln(ax)]=\dfrac{1}{x}$
- derivative of $\ln(m(x))$ is $\dfrac{d}{dx}[\ln(m(x))]=\dfrac{m'(x)}{m(x)}$


[[guide to differentiation - start application questions]]

### chain rule

- Chain rule - derivative of the expression $m(n(x))$ is $\dfrac{d}{dx}[m(n(x))]=m'(n(x))\cdot n'(x)$

[[exercise - chain rule]]

figure: Visual aid here. Hopefully the colors speak louder than words.

![[guide to differentiation 2024-11-25 11.10.28.excalidraw.svg|226]]
%%[[guide to differentiation 2024-11-25 11.10.28.excalidraw.md|🖋 Edit in Excalidraw]]%%

To remember this, we say, outer prime of inner times inner prime. 

I made it short for remembering.


The chain rule is used to differentiate many complex expressions.

The chain rule is the beginning of thinking about how many different variables change relative to others.

Let's use an example to illustrate this.

$y=(8x+1)^3$

now, we know that we want the derivative of the equation, which is $\dfrac{dy}{dx}$



So, with this understanding, here's how to use the chain rule.

You will need to recognize when an expression has nested functions, which you can easily recognize in the form of $m(n(x))$.

A few examples would be $(2x^4+2)^5$, where you have $2x^2+2$ nested within $x^5$. Another one is $\sin^2(x)$, where you have $\sin(x)$ nested within $x^2$.

The chain rule states that $\dfrac{d}{dx}[m(n(x))]=m'(n(x))\cdot n'(x)$


Ready? Please check that you understand the chain rule with [this](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-1a/a/chain-rule-review).

### product rule

- Product rule - derivative of the expression $m(x)n(x)$ is $\dfrac{d}{dx}[m(x)n(x)]=m'(x)n(x)+m(x)n'(x)$

figure: Another visual aid. I love them.
![[guide to differentiation 2024-11-25 11.33.13.excalidraw.svg|376]]
%%[[guide to differentiation 2024-11-25 11.33.13.excalidraw.md|🖋 Edit in Excalidraw]]%%

[[practice product rule]]

### quotient rule

- Quotient rule - derivative of the expression $\dfrac{m(x)}{n(x)}$ is $\dfrac{d}{dx}[\dfrac{m(x)}{n(x)}]=\dfrac{m'(x)n(x)-m(x)n'(x)}{n(x)^2}$

[[proof of quotient rule]]

Note: You do not need to know the quotient rule, for you can rearrange and use the power, product and chain rules instead. However, the quotient rule is good to know.

figure: Visual aid.

![[guide to differentiation 2024-11-25 14.50.26.excalidraw.svg|387]]
%%[[guide to differentiation 2024-11-25 14.50.26.excalidraw.md|🖋 Edit in Excalidraw]]%%

We see that the quotient rule is a bit similar to the product rule.

[[practice quotient rule]]

## test your understanding!

[[exercise - basic derivative rules]]



[[exercise - differentiation but a test on your reasoning]]

[[exercise - differentiation but messy]]


[[exercise - differentiation but you factorize first]]


[[exercise - differentiation application questions]]
