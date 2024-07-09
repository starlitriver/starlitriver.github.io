---
aliases: 
tags: 
---

this page is a introduction thing for calculus that should be very easy

calculus is just another branch of mathematics, daunting but surely understandable.

the two principal symbols used in calculus are
- $d$ when prepended to a variable means "a little bit of" the variable
- $\int$ , the integral symbol, was meant to be a long s, meaning "the sum of"

so $dx$ just means a infinitely small bit of $x$, in other words an element of $x$ or the differential of $x$

the word "integral" simply means "the whole"
if it is the integral from 2 to 3 of $dx$, that is all the little bits of $dx$ in that region together

suppose we have two variables that depend on one another
an alteration in one will cause an alteration in the other
let us call the variables $x$ and $y$

suppose we change $x$, to alter it or imagine it to be altered, by adding a bit we call $dx$
we are causing $x$ to become $x+dx$ 
because $x$ has been altered, $y$ will have altered also, and it will have become $y+dy$

$dx$ and $dy$ are not variables or constants.
their sole purpose is to act as a placeholder for the concept of change, used to compare to each other

in differential calculus we search for the ratio $\dfrac{dy}{dx}$ which is a ratio of how the changes are correlated - this is called differentiating
for no reason, we call the ratio $\dfrac{dy}{dx}$ the differential coefficient of $y$ with respect to $x$

for example, let $x$ and $y$ be respectively the base and height of a right angled triangle of which the slope is 30 degrees

![[brave calculus 2024-07-05 14.32.16.excalidraw.svg|392]]
%%[[brave calculus 2024-07-05 14.32.16.excalidraw|🖋 Edit in Excalidraw]]%%

because the angle is 30 degrees, $y=x\tan(30\degree)$
if we change $x$ to become $x+dx$, then $y$ would then become $y+dy$
$y+dy=(x+dx)\cdot \tan(30\degree)$
when $dy$ is 1, $dx$ must be $1.73$
expressed as a ratio, $\dfrac{dy}{dx}$ is $\dfrac{1}{1.73}$
we just did differentiation! hooray!

a positive $dx$ can correspond to a negative $dy$
for example, suppose we have a ladder against a wall and the angle is unknown

![[brave calculus 2024-07-05 14.38.17.excalidraw.svg|243]]
%%[[brave calculus 2024-07-05 14.38.17.excalidraw|🖋 Edit in Excalidraw]]%%

suppose when x is 19 m, y is 180 m
when $dx$ is 1, what will $dy$ be?
we know that the length of the ladder is constant, $\sqrt{180^2+19^2}=181$  m

because $x+dx=20$, we know that $\sqrt{20^2+(y+dy)^2}=181$
$400+(y+dy)^2=32761$
$y+dy^2=32361$
$y+dy=\pm\sqrt{32361}$
we know that a length has to be positive
$y+dy=\sqrt{32361}$
we know that y is 180
$dy=-0.11$

$\dfrac{dy}{dx}=\dfrac{-0.11}{1}$


what is meaning of implicit function and explicit function?
explicit functions express $x$ in terms of $y$ or express $y$ in terms of $x$ 
for example, $y^2+x^2=1$ is implicit whereas $y=\sqrt{1-x^2}$ is explicit

whenever we use differentials $dx$, $dy$, etc, the existence of a correlation between the variables is shown, expressed with functions

when the exact function between several quantities x, y, z is unknown or is not convenient to state it, it is assumed that there is some sort of function between these variables and one cannot alter any of them without affecting the other ones
this function is expressed implicitly with $F(x,y,z)$ or explicitly with $x=F(y,z)$ or $y=F(x,z)$ or $z=F(x,y)$

suppose we have the equation $y=x^2$
let us change x so that it becomes $x+dx$
this causes a change in y so now y becomes $y+dy$
now begins the differentiation, aka finding $\dfrac{dy}{dx}$
$y+dy=(x+dx)^2$
$y+dy=x^2+2x\cdot dx+(dx)^2$
so what does $(dx)^2$ mean? it is a infinitely tiny amount squared which places it in the second order of smallness, nonexistent compared to the other terms
$y+dy=x^2+2x\cdot dx$
substitute $y=x^2$
$dy=2x\cdot dx$
$\dfrac{dy}{dx}=2x$

suppose we have the equation $y=x^3$
we let $x$ become $x+dx$ and $y$ will become $y+dy$
$y+dy=(x+dx)^3$
$y+dy=x^3+3x^2\cdot dx+3x(dx)^2+(dx)^3$
remove the too small things
$y+dy=x^3+3x^2\cdot dx$
substitute $y=x^3$
$\dfrac{dy}{dx}=3x^2$

have a look at representing [[function|functions]]
keep in mind that when we differentiate a function such as $y=x^2$, we are saying that $f(x)=x^2$ and the $\dfrac{dy}{dx}$ can be simply represented as $\dfrac{d}{dx}[x^2]$ and $f'$ where $f(x)=x^2$

in other words, the following statements represent the exact same thing
- $\dfrac{dy}{dx}$ for $y=x^2$
- $\dfrac{d}{dx}[x^2]$
- $f'(x)$ for $f(x)=x^2$



now you are ready to learn the power rule
if $f(x) = x^n$ and $n\neq0$, then $f'(x)=n\cdot x^{n-1}$

so if $f(x)=x^7$, $f'(x)=7x^6$














## quotient rule example
solve $\sqrt[n]{\dfrac{1}{x^m}}$

solve $\dfrac{d}{dx}\left[\sqrt[n]{\dfrac{1}{x^m}}\right]$
rearrange exponents
$\dfrac{d}{dx}\left[\left(\dfrac{1}{x^m}\right)^{\dfrac{1}{n}}\right]$
$\dfrac{d}{dx}\left[\dfrac{1}{x^\dfrac{m}{n}}\right]$
quotient rule
$-\dfrac{m}{n}x^{-\dfrac{m+n}{n}}$



references
https://calculusmadeeasy.org
