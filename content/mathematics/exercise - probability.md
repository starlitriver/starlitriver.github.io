---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-06-27T15:01:59
permalink:
---

[[exercise - probability with two-way tables]]

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

## All the letters of the alphabet are written on separate pieces of paper and placed into a box. If Maureen randomly chooses two letters without replacement, find the probability that at least one of them is a vowel.

$\text{Pr(at least one vowel)}=1-\text{Pr(no vowels)}=1-\dfrac{21}{26}\cdot \dfrac{20}{25}=\dfrac{23}{65}$

## A box contains seven red marbles and three blue marbles. Two marbles are drawn from the box, without replacement. The probability that they are the same colour is.

$\text{Pr(same colour)}=\dfrac{7*6}{10*9}+\dfrac{3*2}{10*9}=\dfrac{48}{90}=\dfrac{8}{15}$

## Every day, Lucy goes to school by one of three methods: by car, by bus or on foot. The probability that she goes by car is 0.45 and the probability that she goes by bus is 0.2. When Lucy goes by car, the probability that she arrives early is 0.6. When she goes by bus, the probability that she arrives early is 0.1. When she walks, she always arrives early. What is the probability that Lucy goes to school by bus, given that she arrives early?

let arrive early = A
let car,bus,walk = C,B,W

need $\text{Pr}(B|A)$
$\text{Pr}(B|A)=\dfrac{\text{Pr}(B\cap A)}{\text{Pr}(A)}$
$=\dfrac{0.2\cdot 0.1}{0.45\cdot 0.6+0.2\cdot 0.1+0.35\cdot 1}$
$=\dfrac{1}{32}$

## At the start of a particular week, Kim has three red apples and four green apples. She eats one apple every day. On Monday, Tuesday and Wednesday of that week, she randomly selects an apple to eat. In this three-day period, the probability that Kim does not eat an apple of the same colour on any two consecutive days is.

3 red 4 green

Probability of no consecutive = Pr(red green red) + Pr(green red green)
$=\dfrac{3}{7}\cdot \dfrac{4}{6}\cdot \dfrac{2}{5}+\dfrac{4}{7}\cdot \dfrac{3}{6}\cdot \dfrac{3}{5}$
$=\dfrac{2}{7}$

## Find the probability that out of 3 coin tosses, exactly 2 are heads.

Don't stress too much, sometimes brute force is aok.

$HHT+HTH+THH=3\cdot \dfrac{1}{8}=\dfrac{3}{8}$

## A person rolls two fair dice. What is that probability that the sum of the two numbers rolled is 5?

|     | 1   | 2   | 3   | 4   | 5   | 6   |
| --- | --- | --- | --- | --- | --- | --- |
| 1   | 2   |     |     |     |     |     |
| 2   | 3   | 4   |     |     |     |     |
| 3   | 4   | 5   | 6   |     |     |     |
| 4   | 5   | 6   | 7   | 8   |     |     |
| 5   | 6   | 7   | 8   | 9   | 10  |     |
| 6   | 7   | 8   | 9   | 10  | 11  | 12  |

4 out of 36 outcomes = 1/9
