---
title: 
description: 
aliases: []
tags: []
created: 2025-08-05T16:07:15
modified: 2025-08-08T13:07:22
permalink:
---

## A bag contains 7 red balls and 5 blue balls. Three balls are drawn, one at a time, from the bag, without replacement. The probability that the second ball is blue is

$\dfrac{7}{12}\cdot \dfrac{5}{11}+\dfrac{5}{12}\cdot \dfrac{4}{11}=\dfrac{5}{12}$

## Maggie works in a library and her job is to choose 14 random books from a vast collection and put them in a box. It is known that the expected number of fictional books in a single box is 3.3. Assume that the number of fictional books in a box is binomially distributed, the population proportion of fictional books corrected to 4 decimal places is

$p=\dfrac{3.3}{14}=0.2357$

## Assume that 60% of people have a driver’s licence. Using the normal approximation, find the approximate probability that, in a randomly selected sample of size 100, more than 55% people have a driver’s licence.

Large population, large sample.

$X∼Bi(n=100,p=0.6)$


Since we're using the **normal approximation to the binomial distribution**, we can use:

$\hat{p}∼N(\mu,\sigma)$

$\mu=p=0.6$


$\sigma=\sqrt{\dfrac{p(1 - p)}{n}}=\sqrt{0.0024}$

We want:


$z=\dfrac{\hat{p}-p}{\sigma}=\dfrac{-0.05}{\sqrt{0.0024}}$

$Pr(\hat{p} > 0.55)=Pr(Z\geq z)=0.846$

## The proportion of voters in the population who favour Candidate A is 52%. Of a random sample of 400 voters, 230 indicated that they would vote for Candidate A at the next election. Find the approximate probability that, in another random sample of 400 voters, the proportion who favour Candidate A is greater than or equal to p​ as specified in the question.

Large population, large sample.

$p=0.52$

$\hat{p}∼N(\mu,\sigma)$

$\sigma=\sqrt{\dfrac{p(1 - p)}{n}}=\sqrt{0.000624}$

$z=\dfrac{\hat{p}-p}{\sigma}=\dfrac{0.055}{\sigma}=2.2$

$Pr(\hat{p}\geq0.575)=Pr(Z\geq z)=0.0139$

## A small class contains 5 boys and 7 girls. If a random group of 4 students are chosen, determine the mean and standard deviation of the sample proportion of girls.

Small population, small sample.

Have to use selections.

$p=\dfrac{5}{12}$
