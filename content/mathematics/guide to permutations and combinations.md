---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

glossary
- [[permutation]]
- [[combination]]
- [[guide to factorials]]

if there are $m$ ways of doing thing $A$ and $n$ ways of doing thing $B$
- there are $m\cdot n$ ways of doing both $A$ and $B$
- there are $m+n$ ways of doing either $A$ or $B$

## lesson

remember $P(n,k)=\dfrac{n!}{(n-k)!}$

remember $C(n,k)=\dfrac{n!}{(n-k)!(k!)}$

also use the [[Pascal's triangle]] to calculate combinations quickly

## practice things

worked example: what is $C(4,0)$
$\dfrac{4!}{(0!)(4!)}$
$\dfrac{4!}{(4!)}$
$1$

worked example: what is $C(4,1)$
$\dfrac{4!}{(1!)(3!)}$
$\dfrac{4!}{(3!)}$
$4$

worked example: what is $C(4,2)$
$\dfrac{4!}{(2!)(2!)}$
$\dfrac{4!}{(2)(2)}$
$6$

worked example: what is $C(4,3)$
$\dfrac{4!}{(3!)(1!)}$
$\dfrac{4!}{(3!)}$
$4$

worked example: what is $C(4,4)$
$\dfrac{4!}{(4!)(0!)}$
$\dfrac{4!}{(4!)}$
$1$


worked example: you have 9 books. how many ways can you pick 8 books?
$C(9,8)$
$\dfrac{9!}{(8!)(1!)}$
$9$

worked example: you have 3 thick books and 4 thin books. how many ways can you pick 1 thick book and 2 thin books?
$C(3,1)\cdot C(4,2)$
$3\cdot 6$
$18$

worked example: you have 5 books. if you can donate any number of them, how many choices do you have?
$C(5,0)+C(5,1)+C(5,2)+C(5,3)+C(5,4)+C(5,5)$
$1+5+10+10+5+1$
$32$


worked example: you have 6 thick books and 5 thin books. how many ways can you pick 5 books?
$C(11,5)=\dfrac{11!}{(5!)(6!)}=462$

worked example: you have 6 thick books and 5 thin books. how many ways can you pick 4 thick books and 1 thin book?
$C(6,4)\cdot C(5,1)=75$

worked example: you have 6 thick books and 5 thin books. how many ways can you pick 5 thick books?
$C(6,5)\cdot C(5,0)=6$

worked example: you have 6 thick books and 5 thin books. how many ways can you pick 5 books if you must have at least 4 thick books?
this means that you can pick 4 or 5 thick books
$C(6,4)\cdot C(5,1)+C(6,5)\cdot C(5,0)$
$15\cdot 5+6\cdot1$
$81$




worked example: you have 2 shirts, 3 shorts and 5 bathrobes. you can't wear bathrobes with anything else.
you can wear shirt and shorts or a bathrobe
how many ways can you wear things?
$2\cdot 3+5=11$


worked example: you have 2 shirts, 3 shorts, 4 trousers and 5 bathrobes. you can't wear bathrobes with anything else. you can't wear shorts with trousers.
you can wear shirt and shorts, shirt and trousers, or a bathrobe
how many ways can you wear things?
$2\cdot(3+4)+5=19$


worked example: how many ways are there of arranging 4 different books on a shelf?
the first book has 4 choices, second book 3 choices...
$(4)(3)(2)(1)=24$


worked example: how many different 4 letter sets can you make from the letters in the word "help"?
the first letter has 4 choices, second letter 3 choices...
$(4)(3)(2)(1)=24$


worked example: how many different 4 letter sets can you make from the letters in the word "help" if the first letter has to be a consonant?
the first letter has 3 choices, the second letter has 3 choices, the third letter has 2 choices...
$(3)(3)(2)(1)=18$


worked example: how many different 4 letter sets can you make from the letters in the word "help" if the last letter has to be "e"?
the last letter has 1 choice
$()()()(1)$
the first letter has 3 choices, the second letter has 2...
$(3)(2)(1)(1)=6$


worked example: how many different 4 letter sets can you make from the letters in the word "help" if the last letter has to be "e" or "l"?
the last letter has 2 choices
$()()()(2)$
the first letter has 3 choices, the second letter has 2...
$(3)(2)(1)(2)=12$

worked example: how many different 4 letter sets can you make from the letters in the word "help" if the first letter has to be "h" and the last letter has to be "e" or "l"?
the first letter has 1 choice and the last letter has 2 choices
$(1)()()(2)$
the first letter has 2 choices and the third letter has 1
$(1)(2)(1)(2)=4$





worked example: how many ways are there of choosing 3 books from 5 different books and arranging them on a shelf?
$P(5,3)=\dfrac{5!}{(5-3)!}=\dfrac{5!}{2!}=60$



worked example: how many ways are there of making a 4 digit passcode without restrictions?
$(10)(10)(10)(10)=10000$

worked example: how many ways are there of making a 4 digit passcode if no number can be used more than once?
$(10)(9)(8)(7)=5040$

worked example: how many ways are there of making a 4 digit passcode if there has to be at least one repetition?
$(10)(10)(10)(10)-(10)(9)(8)(7)=4960$



there are same things


worked example: how many ways can the letters in the word "mississippi" be arranged?
there are 11 letters in the word. if the letters were different, we have $11!$ possible permutations.
however, "i" is repeated 3 times, "s" is repeated 4 times and "p" is repeated 2 times. we must adjust by dividing by stuff
$\dfrac{11!}{(3!)(4!)(2!)}=34560$


worked example: a set of 9 letters contains 5 of the letter A and 4 of the letter B. how many arrangements can the set have?
$\dfrac{9!}{(5!)(4!)}=126$ 

worked example: as shown below, there are two points, A and B. you start at A and can only move either down or right. how many ways can you go from A to B?
![[guide to permutations 2024-11-03 11.00.25.excalidraw.svg|132]]
%%[[guide to permutations 2024-11-03 11.00.25.excalidraw.md|🖋 Edit in Excalidraw]]%%
notice that no matter what path you take, you will need to go down 5 times and go right 4 times.
therefore, you need exactly 9 moves, 5 of them down and 4 of them right.
$\dfrac{9!}{(5!)(4!)}=126$


worked example: 5 boys and 3 girls are randomly seated in a row. what is the probability that the first and last positions are occupied by girls?

fill in requirements
$(3)()()()()()()(2)$
fill in others
$(3)(6)(5)(4)(3)(2)(1)(2)=4320$
so there are 4320 possible wanted permutations
without requirements, there is $8!$ accepted permutations
$\dfrac{4320}{8!}=\dfrac{3}{28}$




worked example: three letters are randomly chosen from the word "olympics" and arranged in a row. what is the probability that
- the letter "o" is first
there are $P(8,3)=336$ possible permutations
$(1)(7)(6)=42$ good permutations
answer is $\dfrac{42}{336}=\dfrac{1}{8}$

- the letter "y" is chosen (use permutations)
there are $P(8,3)=336$ possible permuations
list all templates that satisfy

```
y--
-y-
--y
```

$(1)(7)(6)$ and $(7)(1)(6)$ and $(7)(6)(1)$
so there are $3\cdot (1)(7)(6)=126$ good permutations
answer is $\dfrac{126}{336}=\dfrac{3}{8}$


- both vowels are chosen (use permutations)
list all

- the letter "y" is chosen (use combinations)
suppose we have $j$ letters in total and we select $k$ of them for a combination, where $m$ have the quality and we want exactly $n$ that have the quality,
the number of combinations that are good is equal to $C(m)(n)\cdot C(j-m,k-n)\cdot k!$

in this case, we have 8 letters total and we select 3 of them for a combination, where 1 is "y" and we wanted there to be exactly 1 of them,
number of good combinations is $C(1,1)\cdot C(8-1,3-1)\cdot 3!=126$
number of possible combinations is $C(8,3)=56$

- both vowels are chosen (use combinations)
in this case, we have 8 letters total and we select 3 of them for a combination, where 2 are vowels and we wanted there to be exactly 2 of them,
number of good combinations is $C(2,2)\cdot C(8-2,3-2)\cdot 3!=36$
number of possible combinations is $C(8,3)=56$




worked example: consider the string "aaaabbcc". how many ways can all letters be arranged if
- there is no restriction
$\dfrac{8!}{(4!)(2!)(2!)}=420$ possible permutations

- the two "c" are adjacent
we need to treat the two "c" as just one object, so there are 7 items being arranged, and there is just one "c"
$\dfrac{7!}{(4!)(2!)(1!)}=105$ good permutations

- no two "a" are adjacent
list all templates that satisfy

```
a-a-a-a-
a-a-a--a
a-a--a-a
a--a-a-a
-a-a-a-a
```

there are 5 possible templates, each one has $\dfrac{(4)(3)(2)(1)}{(2!)(2!)}$ permutations
therefore, $5\cdot \dfrac{(4)(3)(2)(1)}{(2!)(2!)}=30$ good permutations






PLZ pretend everything below does not exist


worked example: three letters are randomly chosen from the word "coffee" and then arranged in a row. let E be there is at least one "e" and O be there is at least one "o". find
- $\text{Pr}(E)$
so we have the word "coffee" and we take three letters from it.
$\text{Pr}(E')=\dfrac{4}{6}\cdot \dfrac{3}{5}\cdot \dfrac{2}{4}=\dfrac{1}{5}$
so $\text{Pr}(E)=1-\dfrac{1}{5}=\dfrac{4}{5}$

- $\text{Pr}(O)$
$\text{Pr}(O')=\dfrac{5}{6}\cdot \dfrac{4}{5}\cdot \dfrac{3}{4}=\dfrac{1}{2}$
so $\text{Pr}(O)=1-\dfrac{1}{2}=\dfrac{1}{2}$

- $\text{Pr}(E'\cap O')$
$\text{Pr}(E' \cap O')$ is $\dfrac{3}{6}\cdot \dfrac{2}{5}\cdot \dfrac{1}{4}=\dfrac{1}{20}$
so $\text{Pr}(E\cup O)$ is $\dfrac{19}{20}$

- $\text{Pr}(E\cap O)$
$\text{Pr}(E\cup O)=\text{Pr}(E)+\text{Pr}(O)-\text{Pr}(E\cap O)$


- the last letter is "e" and the first letter is "f"
find possible wanted permutations
$(2)()(2)$
$(2)(4)(2)=16$
$\dfrac{16}{6!}=\dfrac{1}{45}$


$\dfrac{19}{20}=\dfrac{1}{5}+\dfrac{1}{2}-\text{Pr}(E\cap O)$


- make a table

|     | E   | E'   |     |
| --- | --- | ---- | --- |
| O   |     | 3/4  | 1/2 |
| O'  |     | 1/20 | 1/2 |
|     | 4/5 | 1/5  | 1   |
