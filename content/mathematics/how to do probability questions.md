---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

[[how to do probability questions make table edition]]

worked example: a card is chosen from a pack of playing cards. what is the probability that the card is

- a queen
- a heart
- a queen but not a heart
- a picture card (J,Q,K)
- not a picture card
- black and not a picture card


worked example: a target board is made up of 3 rings. the archer has an equal chance of hitting every point on the target.

![[how to do probability application questions 2024-11-06 16.22.56.excalidraw.svg|200]]
%%[[how to do probability application questions 2024-11-06 16.22.56.excalidraw.md|🖋 Edit in Excalidraw]]%%

- calculate the exact total area of the target
$25\pi$
- calculate the probability the archer hits the bullseye
$\dfrac{\pi}{25\pi}=\dfrac{1}{25}$
- calculate the probability the archer hits the outer shaded region
area of the outer shaded region is $25\pi-9\pi=16\pi$
answer is $\dfrac{16}{25}$
- calculate the probability the archer hits the bullseye given that he hits a shaded region
probability of hitting shaded region is $\dfrac{\pi+16\pi}{25\pi}=\dfrac{17}{25}$
probability of hitting bullseye is $\dfrac{1}{25}$
answer is $\dfrac{1/25}{17/25}=\dfrac{1}{17}$



worked example: in a group of 100 students, 50 study mathematics (M), 60 study physics (P) and 35 study both mathematics and physics.
- represent the information in a Venn diagram
![[how to do probability application questions 2024-11-06 16.39.48.excalidraw.svg|180]]
%%[[how to do probability application questions 2024-11-06 16.39.48.excalidraw.md|🖋 Edit in Excalidraw]]%%

- find $n(M\cap P)$
$35$

- one student is selected. find $\text{Pr}(P\cap M')$
$\dfrac{25}{100}=\dfrac{1}{4}$

- one student is selected. find $\text{Pr}((P'\cup M)')$
$\text{Pr}(P'\cup M)=\dfrac{15}{100}$
$\text{Pr}((P'\cup M)')=\dfrac{85}{100}=\dfrac{17}{20}$


worked example: if $\text{Pr}(A)=0.3$ and $\text{Pr}(B)=0.5$ and $\text{Pr}(A\cap B)=0.1$, find
- $\text{Pr}(A\cup B)$
$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$
$\text{Pr}(A\cup B)=0.3+0.5-0.1$
- $\text{Pr}(A|B)$
$\text{Pr}(A|B)=\dfrac{\text{Pr}(A\cap B)}{\text{Pr}(B)}$
$\text{Pr}(A|B)=\dfrac{0.1}{0.5}$

worked example: if $\text{Pr}(A)=0.45$ and $\text{Pr}(B)=0.65$ and $\text{Pr}(A\cup B)=0.8$, find
- $\text{Pr}(A\cap B)$
$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$
$0.8=0.45+0.65-\text{Pr}(A\cap B)$
$\text{Pr}(A\cap B)=0.3$

- $\text{Pr}(B|A)$
$\text{Pr}(B|A)=\dfrac{\text{Pr}(A\cap B)}{\text{Pr}(A)}=\dfrac{0.3}{0.45}=\dfrac{2}{3}$



worked example: if A and B are mutually exclusive events and $\text{Pr}(A)=0.27$ and $\text{Pr}(B)=0.44$, find $\text{Pr}(A\cup B)$
if A and B are mutually exclusive, $\text{Pr}(A\cap B)=0$

$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$
$\text{Pr}(A\cup B)=0.27+0.44-0$
$\text{Pr}(A\cup B)=0.71$



worked example: if A and B independent events and $\text{Pr}(A)=0.6$ and $\text{Pr}(B)=0.2$, find $\text{Pr}(A\cup B)$
if A and B are independent, $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot\text{Pr}(B)$

$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$
$\text{Pr}(A\cup B)=0.6+0.2-0.12$


worked example: if $\text{Pr}(A)=2\cdot\text{Pr}(B)$ and $\text{Pr}(A\cap B)=0.3$ and $\text{Pr}(A\cup B)=0.9$, find $\text{Pr}(A)$
$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$
$0.9=3\cdot\text{Pr}(B)-0.3$
$\text{Pr}(B)=0.4$
$\text{Pr}(A)=0.8$


worked example: the probability you will win a game is $\frac{7}{12}$. you play two games.
- draw a tree diagram
- what is the probability you win both games?
- what is the probability you win one of the games?
- what is the probability you win at least one game?
- what is the probability you win both games given you win at least one game?



worked example: a bag contains 2 blue and 3 red marbles. 2 marbles are selected without replacement.
- draw a tree diagram
- what is the probability of selecting a blue marble and then a red marble?
- what is the probability of selecting one blue marble?
- what is the probability of selecting at least one blue marble?
- if at least one blue marble was selected, what is the probability of selecting exactly one blue marble?

worked example: 2 letters are selected from the word "mime" without replacement. find the probability of
- selecting two M
$\dfrac{1}{2}\cdot \dfrac{1}{3}=\dfrac{1}{6}$
- selecting M and then E
$\dfrac{1}{2}\cdot \dfrac{1}{3}=\dfrac{1}{6}$
- selecting a M and a E
$\dfrac{1}{2}\cdot \dfrac{1}{3}+\dfrac{1}{2}\cdot \dfrac{2}{3}=\dfrac{1}{2}$
- selecting two M given that one M is selected
probability that one M is selected is $1-\dfrac{1}{2}\cdot \dfrac{1}{3}=\dfrac{5}{6}$
probability that two M selected is $\dfrac{1}{6}$
answer is $\dfrac{1}{5}$



worked example: $\text{Pr}(A)=\dfrac{1}{2}$, $\text{Pr}(B|A)=\dfrac{1}{3}$, and $\text{Pr}(B|A')=\dfrac{1}{5}$. find $\text{Pr}(A'\cup B')$
we want the probability of A not happening or B not happening. this is the same as $1-\text{Pr}(A\cap B)$
$\text{Pr}(A\cap B)=\dfrac{1}{3}\cdot \dfrac{1}{2}=\dfrac{1}{6}$
$\text{Pr}(A'\cup B')=1=\dfrac{1}{6}=\dfrac{5}{6}$


worked example: Probability of a randomly selected student being undergraduate student is 0.6, the probability that they are studying chemistry is 0.1, and the probability that they are both undergraduate and is studying chemistry is 0.05. What is the probability that a randomly selected student is not an undergraduate student and is not studying chemistry?

let being undergraduate be A and studying chemistry be B

$\text{Pr}(A\cup B)=\text{Pr}(A)+\text{Pr}(B)-\text{Pr}(A\cap B)$

$\text{Pr}(A\cup B)=0.6+0.1-0.05$
$\text{Pr}(A\cup B)=0.65$

$\text{Pr}(A'\cap B')=1-0.65=0.35$


worked example: Naomi eats take out for dinner once every fortnight. The probability of her buying Chinese takeout is 0.45, the probability of her buying Thai takeout is 0.35 and the probability of her buying both is 0.1. Given that Naomi does not buy Chinese takeout, what is the probability that she eats Thai takeout?

let Chinese takeout be A and Thai takeout be B
make a table
