---
title: 
description: 
aliases: []
tags: []
created: 2024-11-21T07:46:18
modified: 2025-06-27T14:56:04
permalink:
---

worked example: if $\text{Pr}(A)=0.4$, $\text{Pr}(B)=0.5$ and $\text{Pr}(A\cap B)=0.2$, find
- $\text{Pr}(A\cup B)$
make a table

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | 0.3 | 0.5 |
| B'  | 0.2 | 0.3 | 0.5 |
|     | 0.4 | 0.6 | 1   |

$\text{Pr}(A\cup B)=0.7$

- $\text{Pr}(A|B)$
$\text{Pr}(A|B)=\dfrac{0.2}{0.5}=\dfrac{2}{5}$



worked example: if $\text{Pr}(A)=0.44$, $\text{Pr}(B)=0.16$ and $\text{Pr}(A\cup B)=0.53$, find
- $\text{Pr}(A\cap B)$
make a table
$\text{Pr}(A\cup B)=0.53$ means that $\text{Pr}(A'\cap B')=0.47$

|     | A    | A'   |      |
| --- | ---- | ---- | ---- |
| B   | 0.07 | 0.09 | 0.16 |
| B'  | 0.37 | 0.47 | 0.84 |
|     | 0.44 | 0.56 | 1    |

$\text{Pr}(A\cap B)=0.07$

- $\text{Pr}(B|A)$
$\text{Pr}(B|A)=\dfrac{0.07}{0.44}=\dfrac{7}{44}$

worked example: if A and B are mutually exclusive events and $\text{Pr}(A)=0.38$ and $\text{Pr}(B)=0.51$, find $\text{Pr}(A\cup B)$
if A and B are mutually exclusive, $\text{Pr}(A\cap B)=0$
make a table

|     | A    | A'   |      |
| --- | ---- | ---- | ---- |
| B   | 0    | 0.51 | 0.51 |
| B'  | 0.38 | 0.11 | 0.49 |
|     | 0.38 | 0.62 | 1    |

$\text{Pr}(A\cup B)=0.89$


worked example: if A and B independent events and $\text{Pr}(A)=0.3$ and $\text{Pr}(B)=0.4$, find $\text{Pr}(A\cup B)$
if A and B are independent, $\text{Pr}(A\cap B)=\text{Pr}(A)\cdot\text{Pr}(B)$
make a table

|     | A    | A'   |     |
| --- | ---- | ---- | --- |
| B   | 0.12 | 0.28 | 0.4 |
| B'  | 0.18 | 0.42 | 0.6 |
|     | 0.3  | 0.7  | 1   |

$\text{Pr}(A\cup B)=0.58$


worked example: if $\text{Pr}(A)=2\cdot\text{Pr}(B)$ and $\text{Pr}(A\cap B)=0.2$ and $\text{Pr}(A\cup B)=0.7$, find $\text{Pr}(A)$
make a table
$\text{Pr}(A\cup B)=0.7$ means that $\text{Pr}(A'\cap B')=0.3$

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 |     |     |
| B'  |     | 0.3 |     |
|     |     |     | 1   |

we have to use some variables here

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | p   | n   |
| B'  | o   | 0.3 |     |
|     | m   |     | 1   |

some equations

$m=2n$
$0.2+o+p=0.7$
$0.2+o=m$
$0.2+p=n$

$0.2+o+0.2+p=0.9$
$0.2+o+0.2+p=3n$
$n=0.3$

phew that was hard

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.2 | 0.1 | 0.3 |
| B'  | 0.4 | 0.3 | 0.7 |
|     | 0.6 | 0.4 | 1   |

$\text{Pr}(A)=0.6$

## Robert is a taxi driver. If he wears a seatbelt, the probability that he will be seriously injured is 0.03, if he does not wear a seatbelt, the probability that he will be seriously injured is 0.13. The probability that he wears a seatbelt on any given trip is 0.96. Find the probability that he is not seriously injured on a given trip.

|     | A         | A'        |       |
| --- | --------- | --------- | ----- |
| B   | 0.03x0.96 | 0.13x0.04 | 0.034 |
| B'  |           |           | 0.966 |
|     | 0.96      | 0.04      | 1     |

0.966

## Let C and D be events for a sample space such that $Pr(C)=\dfrac{1}{2}$, $Pr(D∣C)=\dfrac{1}{3}$​ and $Pr(D∣C')=\dfrac{1}{5}$​. Find $Pr(C'∪D')$.

|     | C     | C'  |     |
| --- | ----- | --- | --- |
| D   | 0.5/3 |     |     |
| D'  |       |     |     |
|     | 0.5   |     | 1   |

$1-0.5/3=\dfrac{5}{6}$

## If event D occurs, there is a 0.68 chance that event N will occur. If event D does not occur, then there is a 0.19 chance that N will also not occur. Overall, the chance of D occurring is 0.43. Find the total probability of N occurring.

|     | D         | D'        |     |
| --- | --------- | --------- | --- |
| N   | 0.43x0.68 |           |     |
| N'  |           | 0.57x0.19 |     |
|     | 0.43      | 0.57      | 1   |

$\text{Pr}(N)=0.43\cdot 0.68+0.57-0.57\cdot 0.19=0.7541$

## In a particular high school, a survey is conducted to collect data about their interests. According to this survey, the probability that a randomly selected student enjoys art is 0.3, that they enjoy sport is 0.4 and that they like both is 0.1. Find the probability that a randomly chosen student enjoys sport but not art.

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.1 |     | 0.4 |
| B'  |     |     | 0.6 |
|     | 0.3 | 0.7 | 1   |

0.4-0.1=0.3

## Kevin knows that if he spends more than 20 hours on an assignment, the probability that he will receive A+ is 0.9. However, if he does not spend more than 20 hours on an assignment, the probability of him receiving A+ is 0.6. Kevin is aware that the probability of him spending over 20 hours on any assignment is 0.5. What is the probability that Kevin had spent more than 20 hours on one of his assignment, given that it is marked A+?

|     | A       | A'      |     |
| --- | ------- | ------- | --- |
| B   | 0.5x0.9 | 0.5x0.6 |     |
| B'  |         |         |     |
|     | 0.5     | 0.5     | 1   |

$\dfrac{0.5\cdot 0.9}{0.5\cdot 0.9+0.5\cdot 0.6}=\dfrac{3}{5}$

## The probability of Jonathan wearing a black T-shirt is 0.45, that he wears white pants is 0.7 and that he wears both a black T-shirt and white pants is 0.3. What is the probability that he either wears only a black T-shirt or only wears white pants?

|     | A    | A'  |     |
| --- | ---- | --- | --- |
| B   | 0.3  | 0.4 | 0.7 |
| B'  | 0.15 |     |     |
|     | 0.45 |     | 1   |

$0.7-0.3+0.45-0.3=0.4+0.15=0.55$

## At a particular university, the probability that an Arts student studies a language is 0.3, literature is 0.6, and both is 0.25. What is the probability that an Arts student studies either a language or literature or both?

|     | A    | A'   |     |
| --- | ---- | ---- | --- |
| B   | 0.25 | 0.35 | 0.6 |
| B'  | 0.05 |      | 0.4 |
|     | 0.3  | 0.7  | 1   |

$0.25+0.35+0.05=0.65$

## In a certain town, the probability that it rains on any Wednesday is 0.54. If it rains on Wednesday, then the probability that it rains on Thursday is 0.2. If it does not rain on Wednesday, then the probability of rain on Thursday is 0.27. For a given week, find the probability that it rains on Thursday.

|     | A        | A'        |     |
| --- | -------- | --------- | --- |
| B   | 0.54x0.2 | 0.46x0.27 |     |
| B'  |          |           |     |
|     | 0.54     | 0.46      | 1   |

$0.54\cdot 0.2+0.46\cdot 0.27=0.2322$

## In a particular workplace, the probability of a randomly chosen worker being a man is 0.7, that the worker is single is 0.5 and that they are both male and single is 0.3. Find the probability that a randomly chosen worker is either single or male.

|     | A   | A'  |     |
| --- | --- | --- | --- |
| B   | 0.3 |     | 0.5 |
| B'  |     |     | 0.5 |
|     | 0.7 | 0.3 | 1   |

0.3+0.4+0.2=0.9


## After school, Sam has a 0.43 chance of playing soccer. If he plays soccer, there is a 0.74 chance that he will forget to do his homework. What is the possibility of him playing soccer and forgetting to do homework after school for any given day?




|     | A         | A'  |     |
| --- | --------- | --- | --- |
| B   | 0.43x0.74 |     |     |
| B'  |           |     |     |
|     | 0.43      |     | 1   |

$0.43\cdot 0.74=0.3182$



## In a group of 1000 students from overseas, 229 students can speak Chinese and 275 students can speak French. Given that 17 students can speak both languages, find the number of students that can speak neither.

|     | A   | A'  |      |
| --- | --- | --- | ---- |
| B   | 17  | 258 | 275  |
| B'  | 212 |     |      |
|     | 229 |     | 1000 |
$1000-17-258-212=513$