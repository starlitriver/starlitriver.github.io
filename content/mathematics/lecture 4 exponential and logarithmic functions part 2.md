---
title: 
description: 
aliases: []
tags: []
created: 2025-03-03T19:10:36
modified: 2025-03-06T09:48:25
permalink:
---


> To evaluate $\log_a(b)$, we must restrict $b\in(0,\infty)$ and $a\in(0,\infty) \backslash \{1\}$.

Need to memorize some log identities, see [[logarithm]].

## Let $f:(0,\infty)\to\mathbb{R}$, where $f(x)=\ln(x)$ and $g:\mathbb{R}\to\mathbb{R}$, where $g(x)=x^2+1$.

- Find the rule for h where $h(x)=f(g(x))$. State the domain and range of h.

Function g has domain R, and it outputs a positive number, which fits in the domain of f, Therefore, function h has domain R.

dom h = R

The rule is $h(x)=\ln(x^2+1)$.

The range is the same as the range of f.

We know the value that g(x) inputs to f(x), $x^2+1$, is always greater than 1.

We know that the graph of $\ln(x)$ has a x-intercept at (1,0).

Therefore

ran h = $[0,\infty)$


- Show that $h(x)+h(-x)=f((g(x))^2)$
$h(x)+h(-x)=\ln(x^2+1)+\ln(-x)^2+1)=\ln((x^2+1)^2)=f(g(x))^2)$

## Let $k:(-\infty,0]\to\mathbb{R}$, where $k(x)=\ln(x^2+1)$.

- Find the rule for $k^{-1}$.
Let $y=k^{-1}(x)$

$k(x)=\ln(x^2+1)$
$x=\ln(y^2+1)$
$e^x=y^2+1$
$y^2=e^x-1$
$y=\pm\sqrt{e^x-1}$

$k^{-1}(x)=\pm\sqrt{e^x-1}$

- State the domain and range of $k^{-1}$.

## Let $h:\mathbb{R}\to\mathbb{R},h(t)=e^{-t}(t^2+at+10)$, where a is a real number. Given $h'(t)=e^{-t}(-t^2+(2-a)t+a-10)$,

- Find values of a such that the graph $y=h(t)$ has exactly one stationary point.
At a stationary point, h'(t) = 0.

$0=e^{-t}\cdot (-t^2+(2-a)t+a-10)$
Given this equation, we know at least one of $e^{-t}$ or $(-t^2+(2-a)t+a-10)$ must be zero. Since $e^{-t}$ is always positive, therefore
$0=-t^2+(2-a)t+a-10$
We are looking for cases where $y=h(t)$ has exactly one stationary point. This means the discriminant is zero.
$\Delta=(2-a)^2-4(-1)(a-10)$
$\Delta=4-4a+a^2+4a-40$
$\Delta=$

- Find values of a such that $h'(t)<0$ for all real values of t.

## Find the range of the function $f(x)=\dfrac{a^x-4}{a^x-2}$ where $a>0$ and $a\neq1$.

To find the range, we should graph it.

The structure of this function is new, so we will need to graph it using deductions.

We see that the function has a restriction that $a^x-2\neq0$, which means $x\neq\log_a(2)$. Therefore, there is a vertical asymptote $x\neq\log_a(2)$.

## Solve $\dfrac{1}{2}\ln(9x^2-30x+25)-\dfrac{1}{4}\ln(81)=0$.

$\dfrac{1}{2}\ln((3x-5)^2)-\ln(81^{\dfrac{1}{4}})=0$

Notice the restriction $9x^2-30x+25\neq0$ which is $3x-5\neq0$ which is $x \neq\dfrac{5}{3}$.

$\ln(|3x-5|)-\ln(3)=0$

$\ln(\dfrac{|3x-5|}{3})=0$

$\ln(|x-\dfrac{5}{3}|)=\ln(1)$

$|x-\dfrac{5}{3}|=1$
$x-\dfrac{5}{3}=\pm1$
$x=\dfrac{2}{3}\lor x=\dfrac{8}{3}$

Restrictions satisfied.


Umm we got another way to do this.

$\dfrac{1}{2}\ln(9x^2-30x+25)-\dfrac{1}{4}\ln(81)=0$

$\ln((9x^2-30x+25)^{\dfrac{1}{2}})=\ln(81^{\dfrac{1}{4}})$

Notice the restriction $9x^2-30x+25\neq0$ which is $3x-5\neq0$ which is $x \neq\dfrac{5}{3}$.

$(9x^2-30x+25)^{\dfrac{1}{2}}=81^{\dfrac{1}{4}}$

$(9x^2-30x+25)^{\dfrac{1}{2}}=3$

$9x^2-30x+25=9$

$9x^2-30x+16=0$

$x=\dfrac{30\pm18}{18}$

$x=\dfrac{2}{3}\lor x=\dfrac{8}{3}$

## The graph of $f(x)=ae^x+b$ passes through the points $(0,-10)$ and $(\ln(2),-17)$. Find the values of a and b.

$-10=a+b$
$-17=ae^{\ln(2)}+b$

$b=-10-a$

$-17=ae^{\ln(2)}-10-a$
$0=2a-10-a+17$
$0=a+7$
$a=-7$
$b=-3$

## The graph of $f(x)=e^{ax+b}-2$ passes through the points $(1,2e-2)$ and $(0,e-2)$. Find the values of a and b.

$2e-2=e^{a+b}-2$

$e-2=e^b-2$

$e=e^b$
$b=1$

$2e-2=e^{a+1}-2$
$2e=e^{a+1}$

$2=e^a$
$a=\ln(2)$

## Given $2^a=5^b=10$, evaluate $\dfrac{1}{a}+\dfrac{1}{b}$.

$a=\log_2(10)$
$b=\log_5(10)$
$\dfrac{1}{a}+\dfrac{1}{b}=\log_{10}(2)+\log_{10}(5)=1$

## Find the range of $y=f(x)$ for $f:(-2,0)\to\mathbb{R},f(x)=4-9e^{-4x-8}$.

We need to graph it.

$f(x)=-9e^{-4(x+2)}+4$


Restrictions are:

Dilation by 9 in x axis.
Reflection in x axis.
Dilation by 4 in y axis.
Reflection in y axis.
Translate 2 left.
Translate 4 up.

![[lecture 4 exponential and logarithmic functions part 2 2025-03-05 18.45.56.excalidraw.svg|380]]
%%[[lecture 4 exponential and logarithmic functions part 2 2025-03-05 18.45.56.excalidraw.md|🖋 Edit in Excalidraw]]%%

We know what the graph roughly looks like.
We know the asymptote is $y=4$.

Range can be $(-\infty,4])$.

Add domain restrictions now.

$f(-2)=-5$
$f(0)=4-9e^{-8}$

Therefore the range is $(-5,4-9e^{-8})$

## Simplify $\dfrac{e^{-x}\cdot 8^{x}\cdot (e^{4x}+e^x)}{16(e^{3x}+1)}$.

$=\dfrac{8^{x}\cdot (e^{3x}+1)}{16(e^{3x}+1)}$
$=\dfrac{8^x}{16}$
$=\dfrac{2^{3x}}{2^{4}}$
$=2^{3x-4}$

## Let $f:\mathbb{R}\to\mathbb{R},f(x)=3e^x+2$ a\in(0,\infty) \backslash \{1\}and let $g:(1,∞)\to\mathbb{R},g(x)=2\ln(​x)$. Find $f(g(x))$ in the form $ax^2+b$.

$f(g(x))=3e^{2\ln(x)}+2$ | $x\in(1,\infty)$

$f(g(x))=3e^{\ln(x)^{2}}+2$ | $x\in(1,\infty)$

$f(g(x))=3x^{2}+2$ | $x\in(1,\infty)$

## The graph $y=-5e^{ax+b}+5$ passes through points $(0,5-5e)$ and $(-\dfrac{1}{3},0)$. Find the values of a and b.

$5-5e=-5e^{b}+5$
$0=-5e^{\dfrac{-a}{3}+b}+5$

$-5e=-5e^b$
$e=e^b$
$b=1$
$0=-5e^{\dfrac{-a}{3}+1}+5$
$0=e^{\dfrac{-a+3}{3}}-1$
$1=e^{\dfrac{-a+3}{3}}$
$e^0=e^{\dfrac{-a+3}{3}}$
$0=-a+3$
$a=3$

## Solve $22\cdot 3^{2x}+3^{x+2}-1=0$.

$22\cdot 3^{2x}+9\cdot 3^{x}-1=0$
Let $k=3^x$
$22k^2+9k-1=0$
$(11k-1)(2k+1)=0$
$k=\dfrac{1}{11}\lor k=\dfrac{-1}{2}$


$3^{x}=\dfrac{1}{11}\lor3^{x}=\dfrac{-1}{2}$
$x=\log_3(\dfrac{1}{11})\lor x=\log_3(\dfrac{-1}{2})$

Second impossible.
$x=\log_3(\dfrac{1}{11})$
$x=-\log_3(11)$

## Given $u=\log_9(x)$ and $3^6=729$, express $\log_x(729)$ in terms of u.

$\log_x(729)=\dfrac{\log_9(729)}{\log_9(x)}$
$=\dfrac{3}{\log_9(x)}$
$=\dfrac{3}{u}$

## Solve $\log_x(100)+\log_{x^2}(100)=3$.

$\log_x(100)+\dfrac{\log_x(100)}{\log_x(x^2)}=3$
$\log_x(100)+\dfrac{\log_x(100)}{\log_x(x^2)}=3$

$\log_x(100)+\dfrac{\log_x(100)}{2}=3$
$\dfrac{3}{2}\log_x(100)=3$
$\log_x(100)=2$
$x=\sqrt{100}$
$x=\pm10$
> To evaluate $\log_a(b)$, we must restrict $b\in(0,\infty)$ and $a\in(0,\infty) \backslash \{1\}$.
$x=10$

## Solve $35e^{2x}-e^x-12=0$.

Let $k=e^x$
$35k^2-k-12=0$
$\Delta=1-4(35\cdot -12)$
$\Delta=1681$
$k=\dfrac{1\pm\sqrt{1681}}{70}$
$e^x=\dfrac{1\pm41}{70}$
$x=\ln(\dfrac{1\pm41}{70})$
$\dfrac{1\pm41}{70}>0$
$x=\ln(\dfrac{42}{70})$
$x=\ln(\dfrac{3}{5})$

## Find a and b where $y=\ln(ax+b)-4$ given it passes through $(0,-2)$ and the asymptote is $x=\dfrac{e^2}{3}$.

$-2=\ln(b)-4$
$2=\ln(b)$
$e^2=b$

$\dfrac{ae^2}{3}+b=0$
$\dfrac{ae^2}{3}+e^2=0$
$ae^2+3e^2=0$
$(a+3)e^2=0$
$a=-3$

## Find a and b where $y=\ln(ax+b)+6$ given it passes through $(2,6)$ and the asymptote is $x=\dfrac{7}{4}$.

$6=\ln(2a+b)+6$
$\ln(2a+b)=0$
$2a+b=1$ | $2a+b>0$
$2a+b=1$

$\dfrac{7}{4}a+b=0$
$7a+4b=0$

$8a+4b=4$
$a=4$
$28+4b=0$
$b=-7$

## Given that the graph of the function $f(x)=2\log_4​(ax+b)−3$ passes through the points $(0,−3)$ and $(1,1)$. Find the values of a and b.

$-3=2\log_4(b)-3$
$1=2\log_4(a+b)-3$

$2\log_4(b)=0$
$\log_4(b)=0$
$b=1$


$1=2\log_4(a+1)-3$
$4=2\log_4(a+1)$
$2=\log_4(a+1)$
$16=a+1$
$a=15$
