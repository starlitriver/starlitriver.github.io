---
aliases: 
tags: 
---

when we solve an equation with exponents for a variable $x$, we see if the exponents of the variable are of the same exponent.
if same, make each side of the equation have the same base
we can also have 
if the exponents are 1 and 2, form a quadratic to find solutions
if the exponents are something else, try to make the exponents be 1 and 2, with the help of introducing new variables as substitution.


worked example: solve $3^{-4x}=9^{6-x}$
$3^{-4x}=3^{2(6-x)}$
$-4x=12-2x$
$2x=-12$
$x=-6$

worked example: solve $2^t=7+8\cdot 2^{-t}$
$2^t=7+2^3\cdot 2^{-t}$
since we have the number 7 being a pain, try to form a quadratic with substitution
$2^t=7+2^3\cdot\dfrac{1}{2^t}$
$2^t=7+\dfrac{8}{2^t}$
let $k=2^t$
$k=7+\dfrac{8}{k}$
$k^2=7k+8$
$(k+1)(k-8)=0$
$k=-1\lor k=8$
$2^t=-1\lor 2^t=8$
$2^t=-1$ is rejected because $2^a>0$
$t=3$

worked example: solve $3^{2x}+3=4\cdot 3^x$
try to form a quadratic with substitution
$(3^{x})^2+3=4\cdot 3^x$
let $k=3^x$
$k^2-4k+3=0$
$(k-3)(k-1)=0$
$3^x=3\lor 3^x=1$
$x=1\lor x=0$

worked example: find solutions to $3^{2x}-4\cdot3^x>-3$
rearrange the equation into a quadratic
let $k=3^x$
$k^2-4k+3>0$
$(k-3)(k-1)>0$
$k-3>0\lor k-1>0$
$k>3\lor k>1$
$3^x>3\lor 3^x>1$
$x>\log_3(3)\lor x>\log_3(1)$
$x>1\lor x>0$
simplify
$x>0$

worked example: for $f(x)=2^{1-x}$, simplify $\dfrac{f(x)}{f(-x)}$ into the form $2^{ax}$
$\dfrac{f(x)}{f(-x)}$
$\dfrac{2^{1-x}}{2^{1+x}}$
$2^{1-x-1-x}$
$2^{-2x}$

worked example: solve $5^{2x+1}>5^x+4$
try to form a quadratic with substitution
$5^1\cdot5^{2x}>5^x+4$
let $k=5^x$
$5k^2>k+4$
$5k^2-k-4>0$
$5k^2-5k+4k-4>0$
$5k(k-1)+-4(k-1)>0$
$5k-4>0\lor k-1>0$
$k>\frac{4}{5}\lor k>1$
$5^x>\frac{4}{5}\lor 5^x>1$
$x>\log_5(\frac{4}{5})\lor x>0$


worked example: solve $\dfrac{21}{2^{2x+3}}\leq 2^{2x+1}+2$
try to form a quadratic with substitution
$\dfrac{21}{8\cdot2^{2x}}\leq 2\cdot2^{2x}+2$
let $k=2^x$
$\dfrac{21}{8k^2}\leq 2k^2+2$
note that we need to keep the exponents of the substitution variable at either 1 or 2 to form a quadratic
let $m=2^{2x}$
$\dfrac{21}{8m}\leq 2m+2$
$21\leq16m^2+16m$
$0\leq16m^2+16m-21$
this is hard to factorize but try anyways *shrug*
$0\leq(4m+7)(4m-3)$
$4m+7\geq 0\lor 4m-3\geq 0$
$m\geq -\frac{7}{4}\lor m\geq \frac{3}{4}$
$2^{2x}\geq -\frac{7}{4}\lor 2^{2x}\geq \frac{3}{4}$
$2^{2x}\geq -\frac{7}{4}$ is rejected because $2^a>0$
$2x\geq \log_2(\frac{3}{4})$
$x\geq \frac{1}{2}\log_2(\frac{3}{4})$

worked example: solve $4\cdot3^{x+1}-72=3^{x+2}+3^{x-1}$
try to form a quadratic with substitution
$4\cdot3\cdot3^x-72=9\cdot3^x+3^{-1}\cdot3^x$
let $k=3^x$
$12k-72=9k+\dfrac{k}{3}$
since the exponents of $k$ are all the same, quadratic does not need to be formed
$3k-72=\dfrac{k}{3}$
$8k=216$
$k=27$
$x=3$

worked example: solve $3\cdot2^{\dfrac{x}{2}}-20=7\cdot2^{\dfrac{x}{4}}$
try to form a quadratic with substitution
$3\cdot{(2^x)^\frac{1}{2}}-20=7\cdot{(2^x)^\frac{1}{4}}$
let $m=2^{\dfrac{1}{2}x}$
$3\cdot{2^{\frac{1}{2}x}}-20=7\cdot{(2^{\frac{1}{2}x})^\frac{1}{2}}$
$3m-20=7\sqrt{m}$
note that we need to keep the exponents of the substitution variable at either 1 or 2 to form a quadratic
let $k=2^{\dfrac{1}{4}x}$
$3\cdot{(2^{\frac{1}{4}x}})^2-20=7\cdot{2^{\frac{1}{4}x}}$
$3k^2-20=7k$
$3k^2-7k-20=0$
$3k^2-12k+5k-20=0$
$3k(k-4)+5(k-4)=0$
$k=-\frac{5}{3}\lor k=4$
$2^{\dfrac{1}{4}x}=-\frac{5}{3}\lor 2^{\dfrac{1}{4}x}=4$
$2^{\dfrac{1}{4}x}=-\frac{5}{3}$ is rejected because $2^a>0$
$2^{\dfrac{1}{4}x}=4$
$\frac{1}{4}x=\log_2(4)$
$\frac{1}{4}x=2$
$x=8$



worked example: solve $3\cdot9^{x+1}+1=25\cdot3^x+3^{x+1}$
exponents are 1 away from each other, could use quadratics
$27\cdot9^{x}+1=25\cdot3^x+3\cdot3^{x}$
$27\cdot(3^{x})^2+1=25\cdot3^x+3\cdot3^{x}$
let $k=3^x$
$27k^2+1=28k$
$27k^2-28k+1=0$
$27k^2-27k-k+1=0$
$27k(k-1)+-1(k-1)=0$
$27k-1=0\lor k-1=0$
$k=\dfrac{1}{27}\lor k=1$
$3^x=\dfrac{1}{27}\lor3^x=1$
$x=-3\lor x=0$
