---
aliases: 
tags: 
---

glossary
- [[combination]]

remember that 

$C(n,k)=\dfrac{n!}{(k)!(n-k)!}$

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

remember to use the [[Pascal's triangle]] to calculate combinations quickly


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
