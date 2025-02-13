---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:45
permalink:
---

both differential calculus and integral calculus rely on limits.

we have a function $f(x)=\dfrac{x^2-1}{x-1}$
it is discontinuous at $x=1$, the limit is used to calculate what $f(x)$ should be as it gets closer and closer to 1


we can graph this by simplifying
$f(x)=\dfrac{x^2-1}{x-1}$
$f(x)=\dfrac{(x-1)(x+1)}{x-1}$
$f(x)=x+1|x\neq1$

figure: graph of f(x)
![[guide to limits 2024-11-18 10.57.40.excalidraw.svg|260]]
%%[[guide to limits 2024-11-18 10.57.40.excalidraw.md|🖋 Edit in Excalidraw]]%%

this shows that the limit as x approaches 1 of $f(x)$ is 2
$\lim\limits_{x\to1}f(x)=\lim\limits_{x\to1}\dfrac{x^2-1}{x-1}=\lim\limits_{x\to1}[x+1|x\neq1]=2$


worked example: evaluate $\lim\limits_{x\to4}\dfrac{x^2-2x+1}{x-1}$
direct substitution
$=\dfrac{(4)^2-2(4)+1}{4-1}$
$=3$


worked example: evaluate $\lim\limits_{x\to1}\dfrac{x^2-2x+1}{x-1}$
direct substitution fail
rearrange
$=\lim\limits_{x\to1}\dfrac{(x-1)(x-1)}{x-1}$
$=\lim\limits_{x\to1}x-1|x\neq1$
$=0$



for example, assume $f(x)=x^2,x\neq7$

the graph of this function will be the same as $f(x)=x^2$, but has a undefined gap at $x=7$

as we approach $x=7$ from the left hand side, we could get as close to $x=7$ as we want but not reaching it

| x    | f(x)  |
| ---- | ----- |
| 6    | 36    |
| 6.5  | 42.25 |
| 6.9  | 47.61 |
| 6.99 | 48.86 |

we say the limit of $f(x)$ as $x$ approaches 7 from the left hand side is 49, expressed as $\lim \limits_{x \to 7-} [f(x)] = 49$

as we approach $x=7$ from the right hand side, we could get as close to $x=7$ as we want but not reaching it

| x    | f(x)  |
| ---- | ----- |
| 8    | 64    |
| 7.5  | 56.25 |
| 7.1  | 50.41 |
| 7.01 | 49.14 |

we say the limit of $f(x)$ as $x$ approaches 7 from the right hand side is 49, expressed as $\lim \limits_{x \to 7+} [f(x)] = 49$


because $\lim \limits_{x \to 7-} [f(x)]=\lim \limits_{x \to 7+} [f(x)]=49$, the limit of $f(x)$ as $x$ approaches 7 is 49, expressed as $\lim \limits_{x \to 7} [f(x)] = 49$

if the values from left hand side and right hand side are not equal, the limit does not exist
if the values from left hand side and right hand side are both infinity or both negative infinity, the limit is unbounded

## limit properties

when dealing with limits we have these laws for $a$, $b$, and $c$ are constants

$\lim \limits_{x \to c}x=0$

$\lim \limits_{x \to c} \left[ f(x)+g(x) \right] = \lim \limits_{x \to c} f(x) + \lim \limits_{x \to c} g(x)$
$\lim \limits_{x \to c} \left[ f(x)-g(x) \right] = \lim \limits_{x \to c} f(x) - \lim \limits_{x \to c} g(x)$
$\lim \limits_{x \to c} \left[ f(x)\cdot g(x) \right] = \lim \limits_{x \to c} f(x) \cdot \lim \limits_{x \to c} g(x)$

$\lim \limits_{x \to c} \left[ \dfrac{f(x)}{g(x)} \right] = \dfrac{ \lim \limits_{x \to c} f(x) }{ \lim \limits_{x \to c} g(x) }$

$\lim \limits_{x \to a} \left[ a\cdot f(x) \right]=a\cdot\lim\limits_{x\to c}f(x)$

$\lim \limits_{x \to c} \left[ f(x) \right]= \left[\lim\limits_{x\to c}f(x)\right]^a$

$\lim \limits_{x \to c} \left[a^{f(x)} \right]=a^{\lim\limits_{x\to c}f(x)}$

if $f(x)=g(x)$ for every $x$ in an interval except for when $x=c$ then $\lim\limits_{x\to c}[f(x)]=\lim\limits_{x\to c}[g(x)]$

if $\lim \limits_{x \to c}g(x)$ exists and $f(x)$ is continuous at $x = \lim \limits_{x \to c}g(x)$ then $\lim \limits_{x \to c} f(g(x)) = f(\lim \limits_{x \to c}g(x))$
if the above rule cannot be used you should follow this [video](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-5a/v/limits-of-composite-functions-external-limit-doesn-t-exist)


even though the limits do not exist individually they might exist for combinations of functions
for the following rules, if the left hand and right hand combined limits exist then the combined limit exists
$\lim \limits_{x \to c^-} f(x)+g(x) = \lim \limits_{x \to c^-} f(x) + \lim \limits_{x \to c^-} g(x)$
$\lim \limits_{x \to c^+} f(x)+g(x) = \lim \limits_{x \to c^+} f(x) + \lim \limits_{x \to c^+} g(x)$
$\lim \limits_{x \to c^-} f(x)-g(x) = \lim \limits_{x \to c^-} f(x) - \lim \limits_{x \to c^-} g(x)$
$\lim \limits_{x \to c^+} f(x)-g(x) = \lim \limits_{x \to c^+} f(x) - \lim \limits_{x \to c^+} g(x)$
$\lim \limits_{x \to c^-} f(x)\cdot g(x) = \lim \limits_{x \to c^-} f(x) \cdot \lim \limits_{x \to c^-} g(x)$
$\lim \limits_{x \to c^+} f(x)\cdot g(x) = \lim \limits_{x \to c^+} f(x) \cdot \lim \limits_{x \to c^+} g(x)$
$\lim \limits_{x \to c^-} g(f(x)) = \lim \limits_{(x \to \lim \limits_{x \to c^-} f(x))} g(x)$
$\lim \limits_{x \to c^+} g(f(x)) = \lim \limits_{x \to (\lim \limits_{x \to c^+} f(x))} g(x)$

## limits by substitution

when we know that the function that we have to take the limit of is always continuous, we can find a limit value just by substituting $x$ as the limit value

for example,  to find $\lim\limits_{x\to-1}(6x^2+5x-1)$ we know the function is always continuous, so $\lim\limits_{x\to-1}(6x^2+5x-1)=6(-1)^2+5(-1)-1=0$
see this [video](https://www.khanacademy.org/math/differential-calculus/dc-limits/dc-direct-substitution/v/limit-by-substitution)

### intermediate limits

when calculating limits by substitution and we get $\dfrac{0}{0}$
this is intermediate form and you can use methods to calculate the limit

see [[how to find the limit of an experession]]

## squeeze theorem

let's say we have three functions, and $f(x) \leq g(x) \leq h(x)$

if $\lim \limits_{x \to c} f(x) = L$ and $\lim \limits_{x \to c} h(x) = L$, we can conclude that $\lim \limits_{x \to c} g(x) = L$

for review, do this [exercise](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-7/a/limit-strategies-flow-chart)







this also means that for a function $f$, the equation of the tangent line at $x=c$ will be equal to $y-f(c)=f'(c)(x-c)$


write an equation of the line tangent to the graph of $f(x)=2x^2+7x-9$ at the point where $x=-3$.

	remember: for a function $f$, the equation of the tangent line at $x=c$ will be equal to $y-f(c)=f'(c)(x-c)$

	also, $\dfrac{d}{dx}\left[f(x)+g(x)\right] = \dfrac{d}{dx}\left[f(x)\right] +\dfrac{d}{dx}\left[g(x)\right] = f'(x) + g'(x)$

	and $f(c)$ is -12

	$f'(c)$ is $\dfrac{d}{dx}\left[2x^2\right]+\dfrac{d}{dx}\left[7x\right]$, which is $4x+7$, which is $-5$ when $x=c=-3$

	so the answer is $y+12=-5(x+3)$, or $-5x-27$
