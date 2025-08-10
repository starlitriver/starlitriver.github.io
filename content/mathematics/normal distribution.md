---
title: 
description: 
aliases: []
tags: []
created: 2025-06-01T13:41:50
modified: 2025-07-30T18:02:34
permalink:
---
	
## intro

The normal distribution is a function defined as $f(x)=\dfrac{1}{\sqrt{2\pi\sigma^2}}\cdot e^{\dfrac{-(x-\mu)^2}{2\sigma^2}}$, where $\mu$ mu and $\sigma$ sigma are constants, the mean and the standard deviation respectively.

Figure 1: Some numbers you can memorize, the probability of being in some areas of the graph. Most of the probability is covered within these 6 standard deviations.
![[normal distribution 2025-06-01 13.42.40.excalidraw.svg]]
%%[[normal distribution 2025-06-01 13.42.40.excalidraw.md|🖋 Edit in Excalidraw]]%%




Assume a random variable X that is normally distributed with a mean of 12 and a standard deviation of 3.

$\mu=12$
$\sigma=3$


$\text{E}(X)=\mu$
$\text{sd}(X)=\sigma$
$\text{Var}(X)=\sigma^2$

The variance is defined as the standard deviation squared, that is, $\sigma^2$.

## PDF and CDF

The graph of a normal distribution is a **probability density function**, that is, it shows which numbers of the x axis is more probable.

When trying to get the coordinates of a single point, some calculators require 3 inputs: normPdf(x,mean,stddev), which outputs the corresponding y value.


![[Normal_Distribution_PDF.svg]]




The cumulative distribution function is another function that returns the area cumulated.

In other words, it is the [[antiderivative , antidifferentiation|antiderivative]] of the normal distribution

When trying to get the probability of the variable being between constants a and b, some calculators require 4 inputs: normCdf(a,b,mean,stddev), which outputs the total area sum within the set range.

![[Normal_Distribution_CDF.svg]]

## linear transformations

When a normal distribution $X=f(x)$ undergoes a linear transformation in the form $a\cdot f(x)+b$, the original $\mu$ becomes $a\mu+b$ and original variance $\sigma^2$ becomes $a^2\sigma^2$. Therefore, the original standard deviation $\sigma$ becomes $\sqrt{a^2\sigma^2}$.

## samples

The normal distribution describes the probability density for a single sample.

A sample of 1  from the normal distribution $X=f(x)$ is shown as $\bar{x}$.

A sample of 5 from the normal distribution $X=f(x)$ is shown as $\bar{x}_5$.

## transformations

## linear sum for different random variables $X$ and $Y$ etc...

$\text{E}(aX+c)=a\text{E}(X)+c$
$\text{Var}(aX+c)=a^2\text{Var}(X)$


$\text{E}(a_1X+a_2Y+c)=(a_1)^2\text{E}(X)+(a_2)^2\text{E}(Y)+c$
$\text{Var}(a_1X+a_2Y+c)=(a_1)^2\text{Var}(X)+(a_2)^2\text{Var}(Y)$

## sum of identically distributed but independent variables $X_1$ and $X_2$ etc...

So $X_1$ and $X_2$ have the same distribution but are independent from each other, such as choosing apple one and apple two from somewhere. Note this is different from choosing one apple and cloning it to get two apples.

$\text{E}(X_1+X_2+...+X_n)=n\cdot \text{E}(X_1)$
$\text{Var}(X_1+X_2+...+X_n)=n\cdot \text{Var}(X_1)$
