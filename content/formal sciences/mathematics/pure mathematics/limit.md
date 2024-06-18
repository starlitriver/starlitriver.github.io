---
aliases:
  - limits
links: 
tags: 
title: 
---

the limit is the fundamental concept in calculus.


## introduction

consider this function $f(x)=\dfrac{x-1}{x-1}$
well, it is equal to $f(x)=1$ but we must also put a constraint, so the way we could simplify the function as $f(x)=1,x \neq 1$

the graph of this function will be a line, but has a gap at the place where $x=1$ because when $x=1$, y is undefined.

as we approach $x=1$ from the left hand side, we could get as close to $x=1$ as we want, as long as we are not exactly at $x=1$.

the same is true for the right hand side.

remember: a limit exists if it has the same value from the left hand side and the right hand side. if not, then the limit does not exist.

therefore, the limit as x approaches 1 of f(x) is equal to 1 and this is expressed as $\lim \limits_{x \to 1} f(x) = 1$


#### example
we have the function:

$$
g(x) = 
     \begin{cases}
       x^2 &\quad\text{if } x \neq 2\\
       1 &\quad\text{if } x=2\\
     \end{cases}
$$

so normally, f(x) is equal to $x^2$, except when $x=2$, then f(x) would be equal to 1

we could make x closer and closer to 2, but never equal to 2:

x=1,y=1
x=1.5,y=2.25
x=1.9,y=3.61
x=1.999,y=3.996

that was from the left hand side. from the right hand side, the limit also approaches 4.

remember: a limit exists if it has the same value from the left hand side and the right hand side. if not, then the limit does not exist.

so, the limit as x approaches 2 of g(x) is equal to 4.

$\lim \limits_{x \to 2} g(x) = 4$

when the limit from the left hand side is infinity, and the limit from the right hand side is infinity, we could say that the limit in unbounded.

this goes the same if both the left hand side and the right hand side approaches negative infinity. but if one approaches positive infinity and the other approaches negative infinity, we can safely say that the limit does not exist.



## one sided limtis


we have a function, f(x)

let us assume that the limit as we approach $x=-1$ from the left hand side is 5

but the limit as we approach $x=-1$ from the right hand side is 7

this means that the limit as x approaches negative one of f(x) does not exist.

$\lim \limits_{x \to -1} f(x) \text{ does not exist}$

but we have a way to express one-sided limits as well.

the limit of f(x) as we approach $x=-1$ from the left hand side is 5:

$\lim \limits_{x \to -1^-} f(x) = 5$

the limit of f(x) as we approach $x=-1$ from the right hand side is 7:

$\lim \limits_{x \to -1^+} f(x) = 7$

so, the one sided limits of f(x) are different therefore there isn't a limit for f(x). however, it does have a left hand limit and a right hand limit.

## limit properties

when operating with limits, we have these laws:

we assume a, b, c, L and M are constants, and that $\lim \limits_{x \to c} f(x) = L$ and $\lim \limits_{x \to c} g(x) = M$

$$\lim \limits_{x \to c} \left( f(x)+g(x) \right) = \lim \limits_{x \to c} f(x) + \lim \limits_{x \to c} g(x) = L+M$$

$$\lim \limits_{x \to c} \left( f(x)-g(x) \right) = \lim \limits_{x \to c} f(x) - \lim \limits_{x \to c} g(x) = L-M$$

$$\lim \limits_{x \to c} \left( f(x)g(x) \right) = \lim \limits_{x \to c} f(x) * \lim \limits_{x \to c} g(x) = L*M$$

$$\lim \limits_{x \to c} \left( \dfrac{f(x)}{g(x)} \right) = \dfrac{ \lim \limits_{x \to c} f(x) }{ \lim \limits_{x \to c} g(x) } = \dfrac{L}{M}$$

$$\lim \limits_{x \to c} \left( f(x) \right) ^{\dfrac{a}{b}} = L^{\dfrac{a}{b}}$$

yes, that seems intuitive. but for another strategy, remember THIS: even if one of the limits does not exist, that does not mean that the altogether limit does not exist. :/

here is another rule that should be quite intuitive too, and it applies not only to multiplication, but for addition, subtraction and division too:

$$\lim \limits_{x \to c^-} \left( f(x)g(x) \right) = \lim \limits_{x \to c^-} f(x) * \lim \limits_{x \to c^-} g(x)$$

$$\lim \limits_{x \to c^+} \left( f(x)g(x) \right) = \lim \limits_{x \to c^+} f(x) * \lim \limits_{x \to c^+} g(x)$$

that should be helpful.

## limits of combined functions

here is the intro video about the limits of combined functions.
https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-5a/v/limits-of-combined-functions-piecewise


if $\lim \limits_{x \to c}g(x)$ exists, and f(x) is continuous at $x = \lim \limits_{x \to c}g(x)$, then $\lim \limits_{x \to c} f(g(x)) = f(\lim \limits_{x \to c}g(x))$ , if conditions not met, you will need to use the technique demonstrated \href{https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-5a/v/limits-of-composite-functions-external-limit-doesn-t-exist}{here}. that technique might be confusing, but learn it throughly!



basically, even if the limits of each of the two functions at that point does not exist, it exists for the combined function if the sum of the two limits from the left hand side is equal to the sum of the limits from the right.

for revision, consider watching the videos after the intro video about the limits of combined functions, especially \href{https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-5a/v/limits-of-composite-functions-internal-limit-doesn-t-exist}{this one}


## intermediate limits
in [this video](https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-6/v/limits-by-rationalizing), there is a harder function, and we calculated its limit to be $\dfrac{0}{0}$...

well, for harder functions like this, with more manipulation, we could actually find the answer. practise them with exercises linked below

https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-6/e/two-sided-limits-using-algebra

https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-6/e/limits_2

https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-6/e/find-limits-using-trig-identities

you know, you could open up those exercises, and start learning how to do complicated limits calculations with factoring, conjugates, and trig identties! good luck.

### example

find:

$$\lim \limits_{x \to -4} \frac{7x+28}{x^2+x-12}$$

okay, we could factor this a bit.

$$\lim \limits_{x \to -4} \frac{7(x+4)}{(x+4)(x-3)}$$

$$\lim \limits_{x \to -4} \frac{7}{x-3}$$

this function is undefined at $x=3$, but it is continuous except for at $x=3$. we can safely say that:

$$\lim \limits_{x \to -4} \frac{7}{x-3} = \frac{7}{-7} = -1$$

### example

find:

$\lim \limits_{x \to -3} \frac{\sqrt{4x+28}-4}{x+3}$

let us rationalize the numerator.

$\lim \limits_{x \to -3} \frac{\sqrt{4x+28}-4}{x+3}*\frac{\sqrt{4x+28}+4}{\sqrt{4x+28}+4}$

$\lim \limits_{x \to -3} \frac{(4x+28)-4^2}{(x+3)(\sqrt{4x+28}+4)}$

$\lim \limits_{x \to -3} \frac{4x+12}{(x+3)(\sqrt{4x+28}+4)}$

$\lim \limits_{x \to -3} \frac{4(x+3)}{(x+3)(\sqrt{4x+28}+4)}$

$\lim \limits_{x \to -3} \frac{4}{\sqrt{4x+28}+4}\text{, for x }\neq -3$

now we can use direct substitution:

$\lim \limits_{x \to -3} \frac{4}{\sqrt{4x+28}+4} = \frac{4}{\sqrt{-12+28}+4} = \frac{4}{8} = \frac{1}{2}$

\subsubsection{problem 3}
find:

$\lim \limits_{\theta \to -\frac{\pi}{4}} \frac{1+\sqrt{2}\sin(\theta)}{\cos(2\theta)}$

well, we can use trig identities:

$\cos(2\theta)=\cos^2(\theta)-\sin^2(\theta)=1-2\sin^2(\theta)=2\cos^2(\theta)-1$

we could factor:

$1-2\sin^2(\theta) = (1+\sqrt{2}\sin(\theta))(1-\sqrt{2}\sin(\theta))$

$\lim \limits_{\theta \to -\frac{\pi}{4}} \frac{1+\sqrt{2}\sin(\theta)}{(1+\sqrt{2}\sin(\theta))(1-\sqrt{2}\sin(\theta))}$

$\lim \limits_{\theta \to -\frac{\pi}{4}} \frac{1}{1-\sqrt{2}\sin(\theta)} \text{, }\theta \neq \frac{\pi}{4}$

$\frac{1}{1-\sqrt{2}\sin\left(\dfrac{-\pi}{4}\right)} = \frac{1}{2}$

#### example
find:

$\lim \limits_{x \to \frac{\pi}{2}} \dfrac{\cot^2(x)}{1-\sin(x)}$

expand cotangent

$\lim \limits_{x \to \frac{\pi}{2}} \dfrac{\cos^2(x)}{\sin^2(x)(1-\sin(x))}$

apply pythagorean identity

$\lim \limits_{x \to \frac{\pi}{2}} \dfrac{(1-\sin^2(x))}{\sin^2(x)(1-\sin(x))}$

difference of squares

$\lim \limits_{x \to \frac{\pi}{2}} \dfrac{(1-\sin(x))(1+\sin(x))}{\sin^2(x)(1-\sin(x))}$

$\lim \limits_{x \to \frac{\pi}{2}} \dfrac{1+\sin(x)}{\sin^2(x)}$

$\dfrac{1+\sin(\frac{\pi}{2})}{\sin^2(\frac{\pi}{2})}$

so, the answer is 2
## squeeze theorem
let's say we have three functions, and $f(x) \leq g(x) \leq h(x)$

if $\lim \limits_{x \to c} f(x) = L$ and $\lim \limits_{x \to c} h(x) = L$, we can conclude that $\lim \limits_{x \to c} g(x) = L$




\subsection{conclusion}

review the strategies to find a limit \href{https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-7/a/limit-strategies-flow-chart}{here}


\section{continuity}

\subsection{types of discontinuities}

there are three types of discontinuities, as described in \href{https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new/ab-1-10/v/types-of-discontinuities}{this video}

1. point/removable discontinuity

2. jump discontinuity

3. asymptotic discontinuity

\subsection{definition}

f is continuous at x=c if and only if $\lim \limits_{x \to c}f(x) = f(c)$



\subsection{intermediate value theorem}

Suppose $f$ is a function continuous at every point of the interval [a,b] (including).

This means that $f$ will take on every value between f(a) and f(b) over the interval.

For any L between the values f(a) and f(b), there exists a number c in [a,b] for which f(c)=L.

This is straightforward.

\pagebreak

\section{derivative}

the derivative of $f$ if $f'$, and the definition is:

$$f'(c) = \lim \limits_{x \to c} \frac{f(x)-f(c)}{x-c}$$

where c is a constant.

this could also be represented as $\dfrac{d}{dx}\left[f(x)\right]$


this also means that for a function $f$, the equation of the tangent line at $x=c$ will be equal to $y-f(c)=f'(c)(x-c)$

\subsection{example}
write an equation of the line tangent to the graph of $f(x)=2x^2+7x-9$ at the point where $x=-3$.

  remember: for a function $f$, the equation of the tangent line at $x=c$ will be equal to $y-f(c)=f'(c)(x-c)$

  also, $\dfrac{d}{dx}\left[f(x)+g(x)\right] = \dfrac{d}{dx}\left[f(x)\right] +\dfrac{d}{dx}\left[g(x)\right] = f'(x) + g'(x)$

  and $f(c)$ is -12

  $f'(c)$ is $\dfrac{d}{dx}\left[2x^2\right]+\dfrac{d}{dx}\left[7x\right]$, which is $4x+7$, which is $-5$ when $x=c=-3$

  so the answer is $y+12=-5(x+3)$, or $-5x-27$
