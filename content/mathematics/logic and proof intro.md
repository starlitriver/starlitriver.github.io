---
title: 
description: 
aliases: []
tags: []
created: 2025-03-04T16:51:53
modified: 2025-03-06T08:49:15
permalink:
---




For two binary events A and B, there are just 4 possible cases.

| A   | B   |
| --- | --- |
| 1   | 1   |
| 1   | 0   |
| 0   | 1   |
| 0   | 0   |

## Chapter 1 - Negation.

There exists in the world the concept of negation, that is, the opposite. Not A is shown as $\neg$A.

| A   | B   | $\neg$A | $\neg$B |
| --- | --- | ------- | ------- |
| 1   | 1   | 0       | 0       |
| 1   | 0   | 0       | 1       |
| 0   | 1   | 1       | 0       |
| 0   | 0   | 1       | 1       |

## Chapter 2 - Conjunctions.

|            | and                            | or                                     |
| ---------- | ------------------------------ | -------------------------------------- |
| Symbol     | $\land$                        | $\lor$                                 |
| Expression | A $\land$ B                    | A $\lor$ B                             |
| Logic      | True if both true, else false. | True if at least one trur, else false. |

Below is the truth table.

| A   | B   | A $\land$ B | A $\lor$ B |
| --- | --- | ----------- | ---------- |
| 1   | 1   | 1           | 1          |
| 1   | 0   | 0           | 1          |
| 0   | 1   | 0           | 1          |
| 0   | 0   | 0           | 0          |

## Chapter 3 - Statements.

|               | implication statement        | equivalent statement                                         |
| ------------- | ---------------------------- | ------------------------------------------------------------ |
| AKA           | condition                    | bicondition                                                  |
| Symbol        | $\rightarrow$                | $\leftrightarrow$                                            |
| Expression    | A $\rightarrow$ B            | A $\leftrightarrow$ B                                        |
| Logic         | If A then B.                 | If A then B. If not A then not B.                            |
| Pronunciation | If A then B.<br>A implies B. | A is equivalent to B.<br>A is true if and only if B is true. |

Below is truth table.

| A   | B   | A $\rightarrow$ B | A $\leftrightarrow$ B |
| --- | --- | ----------------- | --------------------- |
| 1   | 1   | 1                 | 1                     |
| 1   | 0   | 0                 | 0                     |
| 0   | 1   | 1                 | 0                     |
| 0   | 0   | 1                 | 1                     |

## Chapter 4 - Conjunctions and statements.

When the statements are combined with conjunctions, um. Good luck.

|               | implication statement | inverse statement             | converse statement | negation conjunction | contrapositive statement      |
| ------------- | --------------------- | ----------------------------- | ------------------ | -------------------- | ----------------------------- |
| Logic         | If A then B.          | If not A then not B.          | If B then A        | A and not B          | If not B then not A           |
| Symbol        | A $\rightarrow$ B     | $\neg$A $\rightarrow$ $\neg$B | B $\rightarrow$ A  | A $\land$ $\neg$B    | $\neg$B $\rightarrow$ $\neg$A |
