---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-07-05T14:38:57
permalink:
---

A probability is a numerical measure of the chance of a particular event occurring.

It can be determined experimentally or by using logic.

## overview

Probability contains:
- [[Discrete probability]] includes only a limited amount of outcomes, including the binomial distribution.
- Continuous probability includes a continuous range of outcomes, including the [[normal distribution]].
- Sampling questions can include elements of both discrete and continuous probability methods, you need to distinguish what tools to use.


A trial can be repeated under the same conditions. A trial must result in one of the possible outcomes. All possible outcomes must be known before the trial begins.


An event is depicted with a capital letter. \for an event $A$, the probability of $A$ is shown as $\text{Pr}(A)$ and $0\leq\text{Pr}(A)\leq1$.

The union of events $A$ and $B$ is shown as $A\cup B$ and means the situation where either event happens or both events happen. This is read as A or B.

The intersection of events $A$ and $B$ is shown as $A\cap B$ and means the situation where both events happen. this is read as A and B.

## addition and multiplication rules of probability

The addition rule says $\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$. This comes from adding both probabilities, and subtracting the overlap between them.
![[probability 2025-06-25 16.52.41.excalidraw.svg|357]]
%%[[probability 2025-06-25 16.52.41.excalidraw.md|🖋 Edit in Excalidraw]]%%



The multiplication rule says $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot \text{Pr}(B|A)$. This is derived from a tree diagram. As you can see, the probability of both is equal to $\text{Pr}(A)$ and $\text{Pr}(B|A)$ multiplied together, where the second one is "probability of B given A".

![[probability 2025-06-25 16.47.34.excalidraw.svg|430]]
%%[[probability 2025-06-25 16.47.34.excalidraw.md|🖋 Edit in Excalidraw]]%%




Two events $A$ and $B$ are mutually exclusive if $\text{Pr}(A\cap B)=0$. There is no possible overlap between the events.

Saying two events $A$ and $B$ are independent is equivalent to saying $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot\text{Pr}(B)$ and $\text{Pr}(A|B)=\text{Pr}(A)$ and $\text{Pr}(B|A)=\text{Pr}(B)$. This means that the events are not related to each other.


A two-way table, aka Karnaugh map, is very useful to visualize the relationships between two events.

|     | A                     | A'                     |                 |
| --- | --------------------- | ---------------------- | --------------- |
| B   | $\text{Pr}(A\cap B)$  | $\text{Pr}(A'\cap B)$  | $\text{Pr}(B)$  |
| B'  | $\text{Pr}(A\cap B')$ | $\text{Pr}(A'\cap B')$ | $\text{Pr}(B')$ |
|     | $\text{Pr}(A)$        | $\text{Pr}(A')$        | 1               |

Note that $\text{Pr}(A\cup B)=1-\text{Pr}(A'\cap B')$.

## conditional probability

the probability of an event occurring given that another event has already occurred is called conditional probability.

the probability of $A$ given that $B$ happened is depicted as $\text{Pr}(A|B)$, the probability of $A$ given $B$ 

to calculate conditional probability we use an equation derived from the multiplication rule of probability, $\text{Pr}(A|B)=\dfrac{\text{Pr}(A\cap B)}{\text{Pr}(B)}$



[[exercise - probability]]
