---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

probability is a branch of mathematics that aims to tell us what to expect

probability is a numerical measure of randomness, the likelihood of events to occur

a trial can be repeated under the exact same conditions and all possible outcomes must be known before the trial begins

an event is depicted with a capital letter. for an event $A$, the probability of $A$ is shown as $\text{Pr}(A)$ and $0\leq\text{Pr}(A)\leq1$

the union of events $A$ and $B$ is shown as $A\cup B$ and means the situation where either event happens or both events happen. this is read as A or B

the intersection of events $A$ and $B$ is shown as $A\cap B$ and means the situation where both events happen. this is read as A and B

## addition and multiplication rules of probability

two events $A$ and $B$ are mutually exclusive if $\text{Pr}(A\cap B)=0$. there is no possible overlap between the events

two events $A$ and $B$ are called independent events if $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot\text{Pr}(B)$. this means that the events are not related to each other and neither event cares about the other.



if we have just two events, we can use a probability table
a probability table is always very useful for calculating

|     | A                     | A'                     |                 |
| --- | --------------------- | ---------------------- | --------------- |
| B   | $\text{Pr}(A\cap B)$  | $\text{Pr}(A'\cap B)$  | $\text{Pr}(B)$  |
| B'  | $\text{Pr}(A\cap B')$ | $\text{Pr}(A'\cap B')$ | $\text{Pr}(B')$ |
|     | $\text{Pr}(A)$        | $\text{Pr}(A')$        | 1               |

the table isn't hard to understand.
additionally, keep in mind that $\text{Pr}(A\cup B)=1-\text{Pr}(A'\cap B')$

the probability of an event occurring given that another event has already occurred is called conditional probability.

the probability of $A$ given that $B$ happened is depicted as $\text{Pr}(A|B)$, the probability of $A$ given $B$ 

to calculate conditional probability we use an equation derived from the multiplication rule of probability, $\text{Pr}(A|B)=\dfrac{\text{Pr}(A\cap B)}{\text{Pr}(B)}$

## permutations

a [[permutation]] is a sequence of objects that are presented in a specific order. for example, if we have 10 books on a shelf and we need to pick 3 to put on another shelf, there are $P(10,3)$ ways to do that

## combinations

[[combination]] means that we do not care about specific order of the elements
that is, the tuples $(1,2,3)$ and $(3,2,1)$ are the same combination. for example, if we have 10 books on a shelf and we need to pick 3 of them to bring to a trip, there are $C(10,3)$ ways to do that


[[how to do probability questions]]
