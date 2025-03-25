---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-18T13:58:11
permalink:
---

to solve an equation that has [[logarithm|logarithms]], we need to always keep in mind that the domain of the log function only allows values greater than zero
because the equation $a=b$ is the same as $c^a=c^b$, we can use this to solve logarithms
we also need to substitute each solution into the equation to check that it is valid

worked example: solve $\log_2(x)+\log_2(x+6)=4$
$\log_2(x^2+6x)=4|x>0,x+6>0$
$2^{\log_2(x^2+6x)}=2^4|x>0,x+6>0$
$x^2+6x-16=0|x>0,x+6>0$
$(x+8)(x-2)=0|x>0,x+6>0$
$x=-8\lor x=2|x>0,x+6>0$
reject $x=-8$
$x=2$

worked example: solve $\log_3(x-1)+\log_3(x+1)=1$
$\log_3(x^2-1)=1|x-1>0,x+1>0$
$3^{\log_3(x^2-1)}=3^1|x-1>0,x+1>0$
$x^2-1=3|x-1>0,x+1>0$
$x=\pm2|x-1>0,x+1>0$
reject $x=-2$
$x=2$

worked example: solve $\log_2(2x+1)=\log_2(x-1)+4$
$\log_2(2x+1)-\log_2(x-1)=4$
$\log_2(\dfrac{2x+1}{x-1})=4|2x=1>0,x-1>0$
$\dfrac{2x+1}{x-1}=2^4|2x=1>0,x-1>0$
$\dfrac{2x+1}{x-1}=16|2x=1>0,x-1>0$
$2x+1=16x-16|2x=1>0,x-1>0$
$14x=17|2x=1>0,x-1>0$
$x=\dfrac{17}{14}$

worked example: solve $\log_{10}(20x)=\log_{10}(x-8)+2$
$\log_{10}(\dfrac{20x}{x-8})=2|20x>0,x-8>0$
$\dfrac{20x}{x-8}=10^2|20x>0,x-8>0$
$20x=100x-800|20x>0,x-8>0$
$x=10$

worked example: solve $1-\log_{10}(2x+1)=\log_{10}(5x+8)-2\log_{10}(x+1)$
$\log_{10}(5x+8)-2\log_{10}(x^2+2x+1)+\log_{10}(2x+1)=1$
$\log_{10}(5x+8)-\log_{10}(x^2+2x+1)+\log_{10}(2x+1)=1$
$\log_{10}(\dfrac{(5x+8)(2x+1)}{x^2+2x+1})=1$
$\dfrac{(5x+8)(2x+1)}{x^2+2x+1}=10$



worked example: solve $\log_2(x+3)+\log_2(x-1)=4$
$(x+3)(x-1)=16|x+3>0,x-1>0$
$x^2+2x-3=16|x+3>0,x-1>0$
$x^2+2x-19=0|x+3>0,x-1>0$
quadratic formula
$x=-1\pm2\sqrt{5}|x+3>0,x-1>0$
$x=-1+2\sqrt{5}$


worked example: solve $2\log_3(x+1)=3+\log_\frac{1}{3}(1+x)$
$\log_3(x^2+2x+1)=3+\log_\frac{1}{3}(x+1)|x+1>0$
$\log_3(x^2+2x+1)=3+\dfrac{\log_3(x+1)}{\log_3(\dfrac{1}{3})}|x+1>0$
$\log_3(x^2+2x+1)=3+\dfrac{\log_3(x+1)}{-1}|x+1>0$
$\log_3(x^2+2x+1)=3-\log_3(x+1)|x+1>0$

$\log_3((x^2+2x+1)(x+1))=3|x+1>0$
$(x^2+2x+1)(x+1)=27|x+1>0$
$(x+1)^3=27|x+1>0$
$x+1=3|x+1>0$
$x=2$

worked example: consider the function $f(x)=2^{1-x}$
simplify $\dfrac{f(x)}{f(-x)}$ into the form $2^{kx}$
$\dfrac{2^{1-x}}{2^{1+x}}$
$2^{1-x-1-x}$
$2^{-2x}$

show that $f(a)\cdot f(b)=f(a+b-1)$
$2^{1-a}\cdot2^{1-b}=2^{1-a-b+1}$
$2^{1-a-b+1}=2^{1-a-b+1}$

solve $f(x)=3$ for $x$, give answer in the form $x=\log_2(\dfrac{m}{n})+c$
$2^{1-x}=3$
$1-x=\log_2(3)$
$-x=\log_2(3)-1$
$x=-\log_2(3)+1$
$x=\log_2(3^{-1})+1$
$x=\log_2(\dfrac{1}{3})+1$
