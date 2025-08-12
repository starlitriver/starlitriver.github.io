---
title: 
description: 
aliases: []
tags: []
created: 2025-07-05T14:38:28
modified: 2025-07-12T15:25:43
permalink:
---

## measuring spread

Consider a random variable. We would like to measure how spread out the values are from the expected value, aka the mean, $E(X)$.

| x       | 1   | 2   | 3   |
| ------- | --- | --- | --- |
| Pr(X=x) | 1/3 | 1/3 | 1/3 |

In this case, $E(X)=2$. we can find the difference, and square that so the distance from the expected value is positive.

| x          | 1   | 2   | 3   |
| ---------- | --- | --- | --- |
| Pr(X=x)    | 1/3 | 1/3 | 1/3 |
| x-E(X)     | -1  | 0   | 1   |
| (x-E(X))^2 | 1   | 0   | 1   |

Therefore, the variance of $X$, $\text{Var}(X)=E((x-E(X))^2)$. We can evaluate it to be $1/3\cdot 1+1/3\cdot 0+1/3\cdot 1=\dfrac{2}{3}$


Good news, we can find an easier way to find the variance. Hooray.

$\text{Var}(X)=E((x-E(X))^2)$
$=E(X^2-2X\cdot E(X)+E(X)^2)$
$=E(X^2)-2E(E(X)^2)+E(X)^2$
$\text{Var}(X)=E(X^2)-E(X)^2$

```anki
id: 1752206438673
---
$\text{Var}(X)$ = ==$E(X^2)-E(X)^2$==
```

## binomial distribution and binomial experiment

A binomial experiment (aka Bernoulli sequence) is a set of trials where:
- Each trial results in a binary outcome: A or A'
- All trials have the same probability for the outcomes.



Input $n$ is the number of trials. Input $p$ is probability of success, $\text{Pr(A)}$.

The statement below says "the random variable $X$ is distributed as a binomial distribution with 3 trials and 0.1 probability of success".
$X\sim\text{Bi}(n=3,p=0.1)$

The probability of achieving $x$ successes in $n$ trials of a binomial experiment is:

$\text{Pr}(X=x)=\displaystyle {n\choose x}p^x(1-p)^{n-x}$


The probability of $X$ being within the range $[a,b]$ is calculated with $\text{binomCdf}(n,p,a,b)$

For example, $\text{Pr}(X \geq 30)=\text{binomCdf}(n,p,30,\infty)$



[[exercise - binomial experiment]]
[[exercise - discrete random variables]]
