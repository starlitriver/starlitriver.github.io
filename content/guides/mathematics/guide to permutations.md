---
aliases: 
tags: 
---

glossary
- [[permutation]]
- [[guide to factorials]]

if there are $m$ ways of doing thing $A$ and $n$ ways of doing thing $B$
- there are $m\cdot n$ ways of doing both $A$ and $B$
- there are $m+n$ ways of doing either $A$ or $B$



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




not including everything


you remember $P(n,k)=\dfrac{n!}{(n-k)!}$


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





















pretend everything below does not exist


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
