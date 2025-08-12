---
title: 
description: 
aliases: []
tags: []
created: 2025-07-26T16:41:08
modified: 2025-07-30T17:58:04
permalink:
---

## 1

Suppose that the random variable $X$ has the probability density function

$$
f(x)=
\begin{cases}
m\cos(3x), & \dfrac{\pi}{6}<x<\dfrac{\pi}{3},\\[6pt]
0, & x\le\dfrac{\pi}{6}\ \text{or}\ x\ge\dfrac{\pi}{3}.
\end{cases}
$$

Find the value of $m$ that makes $f$ a probability density function.

---

**Solution**

A probability density function must satisfy

$$
\int_{-\infty}^{\infty} f(x)\,dx = 1.
$$

Because $f(x)=0$ outside $(\pi/6,\pi/3)$, we need

$$
\int_{\pi/6}^{\pi/3} m\cos(3x)\,dx = 1.
$$

Evaluate the integral:

$$
m\int_{\pi/6}^{\pi/3}\cos(3x)\,dx
= m\left[ \frac{1}{3}\sin(3x) \right]_{\pi/6}^{\pi/3}
= m\frac{1}{3}\bigl[\,\sin(\pi)-\sin(\tfrac{\pi}{2})\,\bigr]
= m\frac{1}{3}(0-1)
= -\frac{m}{3}.
$$

Setting this equal to 1 gives

$$
-\frac{m}{3}=1
\quad\Rightarrow\quad
m=-3.
$$

Note that $\cos(3x)\le0$ on $(\pi/6,\pi/3)$; with $m=-3$, the product $f(x)=m\cos(3x)$ is non-negative, as required.

$$
\boxed{\,m=-3\,}
$$

## 2

**Problem (in LaTeX)**

> The continuous random variable $X$ has probability density function
>
> $$
> f(x)=
> \begin{cases}
> -\sin x+\displaystyle\frac32, & a\le x\le b,\\[6pt]
> 0, & \text{elsewhere}.
> \end{cases}
> $$
>
> Find the probability
>
> $$
> \Pr\!\bigl(\tfrac{\pi}{6}< X<\tfrac{\pi}{3}\bigr).
> $$

---


Because $f(x)=0$ outside $[a,b]$, the required probability is

$$
\Pr\!\Bigl(\tfrac{\pi}{6}<X<\tfrac{\pi}{3}\Bigr)
  \;=\;
  \int_{\max\!\left(\frac{\pi}{6},\,a\right)}
       ^{\min\!\left(\frac{\pi}{3},\,b\right)}
       \Bigl[-\sin x+\frac32\Bigr]\,dx.
$$

---

When the whole interval $\bigl(\tfrac{\pi}{6},\tfrac{\pi}{3}\bigr)$ lies **inside** $[a,b]$

If $\displaystyle a\le\frac{\pi}{6}\quad\text{and}\quad\frac{\pi}{3}\le b,$ we have

$$
\begin{aligned}
\Pr\!\Bigl(\tfrac{\pi}{6}<X<\tfrac{\pi}{3}\Bigr)
  &=\int_{\pi/6}^{\pi/3}\Bigl(-\sin x+\frac32\Bigr)\,dx \\[6pt]
  &=\Bigl[\cos x+\frac{3x}{2}\Bigr]_{\pi/6}^{\pi/3}\\[6pt]
  &=\Bigl(\cos\frac{\pi}{3}+\frac{3\pi}{6}\Bigr)
     -\Bigl(\cos\frac{\pi}{6}+\frac{3\pi}{12}\Bigr)\\[6pt]
  &=\frac12+\frac{\pi}{2}-\frac{\sqrt3}{2}-\frac{\pi}{4}\\[6pt]
  &=\frac{\pi}{4}+\frac{1-\sqrt3}{2}\;\;\approx\;0.419.
\end{aligned}
$$

Hence, provided $\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$ both lie within the support $[a,b]$, the probability is

$$
\boxed{\displaystyle
\Pr\!\Bigl(\tfrac{\pi}{6}<X<\tfrac{\pi}{3}\Bigr)
      \;=\;
      \frac{\pi}{4}+\frac{1-\sqrt3}{2}
      \;\approx\;0.419}
$$

Otherwise, take the integral only over the overlapping portion (or 0 if there is none).

## 3

Suppose that the random variable \(X\) has the probability density function.


Find the value of \(a\), correct to \(2\) decimal places, that makes \(f\) a probability density function.

$$
f(x)=
\begin{cases}
(x-1)^2+2, & a \le x \le 4,\\[6pt]
0, & x<a \ \text{or}\ x>4.
\end{cases}
$$

### Solution

For $f$ to be a valid probability-density function, its integral over the real line must be $1$.
Because $f(x)=0$ outside $[a,4]$,

$$
\int_{-\infty}^{\infty} f(x)\,dx \;=\;\int_{a}^{4} \bigl((x-1)^2+2\bigr)\,dx \;=\;1.
$$

---

**1. Evaluate the integral**

$$
\int\bigl((x-1)^2+2\bigr)\,dx
 =\int \bigl(x^2-2x+1+2\bigr)\,dx
 =\int \bigl(x^{2}-2x+3\bigr)\,dx
 =\frac{x^{3}}{3}-x^{2}+3x + C.
$$

---

**2. Apply the limits**

$$
\left[\frac{x^{3}}{3}-x^{2}+3x\right]_{a}^{4}
 \;=\;\left(\frac{4^{3}}{3}-4^{2}+3\!\cdot\!4\right)
      -\left(\frac{a^{3}}{3}-a^{2}+3a\right)
 \;=\;\frac{52}{3}-\Bigl(\frac{a^{3}}{3}-a^{2}+3a\Bigr).
$$

Set this equal to $1$:

$$
\frac{52}{3}-\left(\frac{a^{3}}{3}-a^{2}+3a\right)=1.
$$

---

**3. Form the cubic equation**

Multiply by $3$:

$$
52-\bigl(a^{3}-3a^{2}+9a\bigr)=3
\;\;\Longrightarrow\;\;
a^{3}-3a^{2}+9a-49=0.
$$

---

**4. Solve for $a$**

Testing integer endpoints shows the root lies between $3$ and $4$.
Using either a CAS, numerical solver or a few iterations of Newton's method gives

$$
a \approx 3.91.
$$

(To two decimal places.)

---

$$
\boxed{\,a = 3.91\,}
$$
