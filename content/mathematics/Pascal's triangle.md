---
aliases: 
tags: 
---

in mathematics, Pascal's triangle is an infinite triangular array of the binomial coefficients

it can be useful in calculating [[combination|combinations]]

for each row, the row number is $n$ and the column number is $k$
the second number of each row is equal to its row number
the second number of each row has a column number of 1

this equation calculates a value $v$ in Pascal's triangle with row number $n$ and column number $k$
$v=C(n,k)$
where $C$ is the [[combination]] function

figure: rows 0 to 7 of Pascal's triangle

$\begin{matrix}1\\1\quad1\\1\quad2\quad1\\1\quad3\quad3\quad1\\1\quad4\quad6\quad4\quad1\\1\quad5\quad10\quad10\quad5\quad1\\1\quad6\quad15\quad20\quad15\quad6\quad1\\1\quad7\quad21\quad35\quad35\quad21\quad7\quad1\end{matrix}$

note that symmetry in the middle means $C(n,k)=C(n,n-k)$

figure: rows 0 to 7 of Pascal's triangle, represented in combinations

$\begin{matrix}C(0,0)\\C(1,0)\quad C(1,1)\\C(2,0)\quad C(2,1)\quad C(2,2)\\C(3,0)\quad C(3,1)\quad C(3,2)\quad C(3,3)\\C(4,0)\quad C(4,1)\quad C(4,2)\quad C(4,3)\quad C(4,4)\\C(5,0)\quad C(5,1)\quad C(5,2)\quad C(5,3)\quad C(5,4)\quad C(5,5)\\C(6,0)\quad C(6,1)\quad C(6,2)\quad C(6,3)\quad C(6,4)\quad C(6,5)\quad C(6,6)\\C(7,0)\quad C(7,1)\quad C(7,2)\quad C(7,3)\quad C(7,4)\quad C(7,5)\quad C(7,6)\quad C(7,7)\end{matrix}$

compare the values in Pascal's triangle to the coefficients in binomial expansions

$(a+b)^0=1$
$(a+b)^1=a+b$
$(a+b)^2=a^2+2ab+b^2$
$(a+b)^3=a^3+3a^2b+3ab^2+b^3$
$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$
$(a+b)^5=a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$
$(a+b)^6=a^6+6a^5b+15a^4b^2+20a^3b^3+15a^2b^4+6ab^5+b^6$





there is an equation called [[Pascal's rule]]

## references

https://en.wikipedia.org/wiki/Pascal%27s_rule
