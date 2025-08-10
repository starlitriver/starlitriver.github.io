---
title: 
description: 
aliases: []
tags: []
created: 2025-07-05T14:57:57
modified: 2025-07-26T13:31:05
permalink:
---

## A coin lands on heads 40% of the time. You flip the coin 5 times. Find the probability that 3 heads are found.

$X\sim\text{Bi}(n=5,p=0.4)$

$\text{Pr}(X=x)=\displaystyle {n\choose x}p^x(1-p)^{n-x}$

$\text{Pr}(X=3)=\displaystyle {5\choose 3}\cdot 0.4^3\cdot (0.6)^2=0.2304$

## A fair coin is tossed 10 times. What is the probability, correct to 4 decimal places of getting 5 or more heads?

$X\sim\text{Bi}(n=10,p=0.5)$

The probability of $X$ being within the range $[a,b]$ is calculated with $\text{binomCdf}(n,p,a,b)$

For example, $\text{Pr}(X \geq 30)=\text{binomCdf}(n,p,30,\infty)$

$\text{Pr}(X \geq 5)=\text{binomCdf}(10,0.5,5,\infty)=0.6230$

## Five fair coins are tossed at the same time. The outcome for each coin is independent of the outcome for any other coin. Find the probability that there are two heads, given that there is at least one head.

$X\sim\text{Bi}(n=5,p=0.5)$

$\text{Pr}(X=x)=\displaystyle {n\choose x}p^x(1-p)^{n-x}$

$\dfrac{\text{Pr}(X=2)}{\text{Pr}({X\geq 1})}$
$=\dfrac{\displaystyle {5\choose 2}\cdot 0.5^2\cdot 0.5^3}{1-\displaystyle {5\choose 0}\cdot 0.5^0\cdot 0.5^5}$
$=0.3226$

## A study shows that a proportion p, of the town all have a unique gene. 10 people are randomly chosen. Write an expression for the probability that exactly 1 of the 10 people have the gene.

$X\sim\text{Bi}(n=10,p=p)$
$\text{Pr}(X=1)=\displaystyle {10\choose 1}\cdot p^1\cdot (1-p)^9=10p(1-p)^9$

## A farm produces eggs and packs them in cartons of 12 before sending them to supermarkets. It is known that 2% of eggs produced by this farm are bad. Only cartons with no bad eggs are accepted by supermarkets. Find the probability that a carton is accepted.

$X\sim\text{Bi}(n=12,p=0.98)$

$\text{Pr}(X=12)=\displaystyle {12\choose 12}\cdot 0.98^{12}\cdot 0.02^0=0.7847$

## A biased coin is tossed 5 times. If the probability of tossing more than 4 heads, given that more than 3 heads have been tossed, is 0.3182, find probability of getting a head.

$X\sim\text{Bi}(n=5,p=p)$

$0.3182=\dfrac{\text{Pr}(X > 4)}{\text{Pr}(X > 3)}=\dfrac{\text{Pr}(X = 5)}{\text{Pr}(X = 5)+\text{Pr}(X = 4)}$

$\text{Pr}(X=5)=p^5$
$\text{Pr}(X=4)=\displaystyle {5\choose 4}\cdot p^4\cdot (1-p)^1$
$\text{Pr}(X=4)=5p^4\cdot (1-p)$

$0.3182=\dfrac{p^5}{p^5+5p^4\cdot (1-p)}$
$p=0.7000$

## An archer can successfully hit a target with a probability of 0.9. The archer attempts to hit the target 80 times. The outcome of each attempt is independent of any other attempt. Given that the archer successfully hits the target at least 70 times, the probability that the archer successfully hits the target exactly 75 times, correct to four decimal places, is?

$X\sim\text{Bi}(n=80,p=0.9)$

$\dfrac{\text{Pr}(X =75)}{\text{Pr}(X \geq 70)}=\dfrac{\displaystyle {80\choose 75}\cdot 0.9^{75}\cdot 0.1^5}{\text{binomCdf}(80,0.9,70,\infty)}$
$=0.1076$

## A marble bag contains marbles of two colour: green and yellow. A marble is drawn 30 times with replacement, and the probability of drawing a green marble is four times the probability of drawing a yellow marble. If random variable X represents the number of times a green marble is drawn, what is the standard deviation?

$X\sim\text{Bi}(n=30,p=0.8)$

$\text{Pr}(X=0)=0.2^{30}$
$\text{Pr}(X=1)=30\cdot0.8\cdot0.2^{29}$

## If the probability of obtaining 2 successful trials out of 8 total trials is 0.2587, find the probability of success on a trial, correct to two decimal places.

$X\sim\text{Bi}(n=8,p=p)$

$\text{Pr}(X=2)=0.2587=\displaystyle {8\choose 2}\cdot p^2(1−p)^6$

$0.2587=28p^2\cdot (1−p)^6$
$p=0.17$

## A farm produces eggs and packs them in cartons of 12 before sending them to supermarkets. It is known that 2% of eggs produced by this farm are bad. The expected number of bad eggs in a single carton is 

$X\sim\text{Bi}(n=12,p=0.02)$

$E(X)=np=12\cdot 0.02=0.24$ eggs

## A random variable X follows a binomial distribution with parameters n and p. If the mean of X is 8 and its variance is 4.8, determine the values of n and p. 

$X\sim\text{Bi}(n=12,p=0.02)$

$E(X)=np$
$Var(X)=np(1-p)$

$Var(X)=4.8$
$E(X)=np=8$

$n=\dfrac{8}{p}$
$4.8=np(1-p)$
$4.8=8(1-p)$

$p=0.4$
$n=20$

## A game at a carnival requires the player to throw 40 balls into a bucket, where there is a 0.25 chance of getting a ball into the bucket, the game is won if 40% or more of the balls land in the bucket. Find how many times one should play the game in order to ensure more than 6% chance of winning at least once? 

For one game:

$X\sim\text{Bi}(n=40,p=0.25)$

A win requires at least $40\%$ of 40 balls, i.e. $X\ge 16$.

$$
\Pr(\text{win in one game}) \;=\; P(X\ge 16)
        \;=\; \sum_{k=16}^{40}\binom{40}{k}(0.25)^{k}(0.75)^{40-k}
        \;\approx\; 0.02624\;.
$$

So there is about a **2.624 %** chance to win any single play.

If you play $k$ independent games, the chance of winning *none* of them is $(1-0.02624)^{k}$.
Therefore the chance of winning *at least once* is

$$
P_{\text{at least one win}}(k)\;=\;1-(1-0.02624)^{k}.
$$


$$
1-(1-0.02624)^{k} \;>\; 0.06
\;\;\Longrightarrow\;\;
(1-0.02624)^{k} \;<\; 0.94
\;\;\Longrightarrow\;\;
k \;>\;
\frac{\ln(0.94)}{\ln(1-0.02624)}
\;\approx\; 2.2.
$$

## Let X be a discrete random variable with binomial distribution X∼Bi(n,p). The mean and the standard deviation of this distribution are equal. Given that 0<p<1, the smallest number of trials, n, such that p≤0.01 is 

$E(X)=sd(X)=\sqrt{Var(X)}=\sqrt{np(1-p)}$

## A random variable X follows a binomial distribution with n trials and success probability p=0.4. If the probability of getting exactly 3 successes is twice the probability of getting exactly 2 successes, what is the value of n? 

$\text{Pr}(X=x)=\displaystyle {n\choose x}p^x(1-p)^{n-x}$

$\text{Pr}(X=2)=\text{Pr}(X=3)$
