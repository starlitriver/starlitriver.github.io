---
aliases: 
tags: 
---


in a right angled triangle with an angle, all three sides has a relation to the angle: hypotenuse, opposite and adjacent

a point on the [[unit circle]] that corresponds to an angle $\theta$ must have the coordinates $(\cos(\theta),\sin(\theta))$

an angle can be measured in degrees or radians
since an angle without the degree symbol shown is radians by default, it is always important to add the degrees symbol when you use degrees

a full revolution of a circle is 360 degrees ($360\degree$) , and is equal to $2\pi$ radians ($2\pi^c$)
a half revolution of a circle is 180 degrees ($180\degree$) , and is equal to $\pi$ radians ($\pi^c$)

by this definition, you should be able to convert between radians and degrees!

in a unit circle, a radian is the angle you get if you follow the circumference for 1 unit

## trig functions

[[trigonometric functions|trig functions]] are functions that are essential to trig
it's recommended to know the basics and notation of trig functions from the above link


it is important to be able to evaluate most trig function values without a calculator

### common values table

some of the most common trig function values are actually easy to memorize
you need to know this table
don't worry because you can get remember this table easily

| $\theta$       | $0$ | $\dfrac{\pi}{6}$      | $\dfrac{\pi}{4}$      | $\dfrac{\pi}{3}$      | $\dfrac{\pi}{2}$ |
| -------------- | --- | --------------------- | --------------------- | --------------------- | ---------------- |
| $\sin(\theta)$ | 0   | $\dfrac{1}{2}$        | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | 1                |
| $\cos(\theta)$ | 1   | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$        | 0                |
| $\tan(\theta)$ | 0   | $\dfrac{1}{\sqrt{3}}$ | 1                     | $\sqrt{3}$            | undefined        |



here is a step by step guide to help you be able to easily create this table anytime you wish
firstly, we recognize the angle values that make the outputs of sine and cosine zero

| $\theta$       | $0$ | $\dfrac{\pi}{6}$      | $\dfrac{\pi}{4}$      | $\dfrac{\pi}{3}$      | $\dfrac{\pi}{2}$ |
| -------------- | ---------- | ----------- | ----------- | ----------- | ----------- |
| $\sin(\theta)$ | 0          | 1           | 2           | 3           | 4           |
| $\cos(\theta)$ | 4          | 3           | 2           | 1           | 0           |
| $\tan(\theta)$ |            |             |             |             |             |


| $\theta$       | $0$ | $\dfrac{\pi}{6}$      | $\dfrac{\pi}{4}$      | $\dfrac{\pi}{3}$      | $\dfrac{\pi}{2}$ |
| -------------- | --- | --------------------- | --------------------- | --------------------- | ---------------- |
| $\sin(\theta)$ | 0   | $\dfrac{1}{2}$        | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | 1                |
| $\cos(\theta)$ | 1   | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$        | 0                |
| $\tan(\theta)$ | 0   | $\dfrac{1}{\sqrt{3}}$ | 1                     | $\sqrt{3}$            | undefined        |



hopefully you can memorize this table because you'll always need it

### supplementary relationships, symmetry and sign

this is a table showing the signs of the outputs of trig functions for the quadrants

| quadrant | sin      | cos      | tan      |
| -------- | -------- | -------- | -------- |
| 1        | positive | positive | positive |
| 2        | positive | negative | negative |
| 3        | negative | negative | positive |
| 4        | negative | positive | negative |

we can make a shorter table that we can memorize and use all the time

| quadrant | what is positive |
| -------- | ---------------- |
| 1        | all              |
| 2        | sin              |
| 3        | tan              |
| 4        | cos              |

here is a visual representation of how the quadrants correlate to the sign of the trig function results
![[guide to trigonometry 2024-09-06 12.06.00.excalidraw.svg|500]]
%%[[guide to trigonometry 2024-09-06 12.06.00.excalidraw.md|🖋 Edit in Excalidraw]]%%


these equations that change the inside of the trig function to go to different quadrants is called supplementary relationships

you can see that when an angle is transferred to different quadrants, the absolute value of the trig function results are the same

in the first quadrant we have already memorized the table for common values, but in the other quadrants we find the absolute value by changing the angle

the following equations apply to both sine and cosine, though cosine is used as a representative

$|\cos(\pi-\theta)|=\cos(\theta)$
this means that for angle in second quadrant, $|\cos(m)|=\cos(n),m+n=\pi,n=\pi-m$ 

$|\cos(\pi+\theta)|=\cos(\theta)$
this means that for angle in third quadrant, $|\cos(m)|=\cos(n),m+n=\pi+2n,n=m-\pi$ 

$|\cos(2\pi-\theta)|=\cos(\theta)$
this means that for angle in fourth quadrant, $|\cos(m)|=\cos(n),m+n=2\pi,n=2\pi-m$ 


### practice identifying supplementary relationships

worked example: if $\sin(a)=0.7$, evaluate $\sin(\pi+a)$
the angle has increased by half a circle, making both sine and cosine change signs
$\sin(\pi+a)=-0.7$

worked example: if $\cos(b)=0.6$, evaluate $\cos(\pi-b)$
the angle is flipped horizontally due to $\pi-b$. this makes cosine change sign but sine stays the same
$\cos(\pi-b)=-0.6$

worked example: if $\sin(a)=0.7$, evaluate $\sin(-a)$
the angle changes direction, arriving at the original point but reflected horizontally. this makes sine change sign but cosine stays the same
$\sin(-a)=-0.7$

worked example: if $\sin(a)=0.7$, evaluate $-\sin(\pi-a)$
the angle is flipped horizontally due to $\pi-a$ and also flipped vertically due to $-\sin$. this makes both sine and cosine change signs
$-\sin(\pi-a)=-0.7$

worked example: if $\cos(b)=0.6$, evaluate $\cos(2\pi+b)$
the angle has been increased by a full circle so angle does not change
$\cos(2\pi+b)=0.6$


### practice evaluating supplementary relationships

worked example: evaluate $\sin(\dfrac{2\pi}{3})$
$\pi$ is half of a full circle, and $\dfrac{2}{3}\pi$ is an angle in the second quadrant
applying equations
$|\sin(\dfrac{2\pi}{3})|=\sin(\dfrac{\pi}{3})=\dfrac{\sqrt{3}}{2}$
applying signs
in second quadrant, only sine is positive
$\sin(\dfrac{2\pi}{3})=\dfrac{\sqrt{3}}{2}$

worked example: evaluate $\cos(\dfrac{5\pi}{4})$
$\dfrac{5}{4}\pi$ is a bit more than half a circle, in the third quadrant
applying equations
$|\cos(\dfrac{5\pi}{4})|=\cos(\dfrac{\pi}{4})=\dfrac{\sqrt{2}}{2}$
applying signs
in the third quadrant, only tangent is positive
$\cos(\dfrac{5\pi}{4})=-\dfrac{\sqrt{2}}{2}$


worked example: evaluate $\tan(\dfrac{4\pi}{3})$
$\tan(\dfrac{4\pi}{3})=\dfrac{\sin({\dfrac{4\pi}{3}})}{\cos({\dfrac{4\pi}{3}})}$
$\dfrac{4}{3}\pi$ is a bit more than half a circle, in the third quadrant
applying equations
$|\sin(\dfrac{4\pi}{3})|=\sin(\dfrac{\pi}{3})=\dfrac{\sqrt{3}}{2}$
$|\cos(\dfrac{4\pi}{3})|=\cos(\dfrac{\pi}{3})=\dfrac{1}{2}$
applying signs
in the third quadrant, only tangent is positive
$\tan(\dfrac{4\pi}{3})=\sqrt{3}$


worked example: evaluate $\sin(\dfrac{11\pi}{6})$
$\dfrac{11}{6}\pi$ is almost a full circle, in the fourth quadrant
applying equations
$|\sin(\dfrac{11\pi}{6})|=\sin(\dfrac{\pi}{6})=\dfrac{1}{2}$
applying signs
in the fourth quadrant, only cosine is positive
$\sin(\dfrac{11\pi}{6})=-\dfrac{1}{2}$

### complementary relationships

when we flip an angle over the line $y=x$, we have equations called complementary relationships

![[guide to trigonometry 2024-09-06 14.20.05.excalidraw.svg|448]]
%%[[guide to trigonometry 2024-09-06 14.20.05.excalidraw.md|🖋 Edit in Excalidraw]]%%

from the above, we can see that
$\cos(a)=\sin(\dfrac{\pi}{2}-a)$
$\sin(a)=\cos(\dfrac{\pi}{2}-a)$

as a general rule, if we have the angles $m$ and $n$ in radians, and $c$ is a positive integer, and $m=c\cdot\dfrac{\pi}{2}\pm n$, the complementary relationships equations say that $|\cos(m)|=\sin(n)$ and $|\sin(m)|=\cos(n)$


## practice complementary relationships

worked example: if $\cos(a)=0.7$ and $\sin(b)=0.4$ and they are both in the first quadrant, evaluate $\sin(\dfrac{\pi}{2}-a)$
$|\sin(\dfrac{\pi}{2}-a)|=\cos(a)=0.7$
applying signs
since angle $a$ is in the first quadrant, $\dfrac{\pi}{2}-a$ is also in the first quadrant, where sine and cosine are both positive
$\sin(\dfrac{\pi}{2}-a)=0.7$

worked example: if $\cos(a)=0.7$ and $\sin(b)=0.4$ and they are both in the second quadrant, evaluate $\cos(\dfrac{\pi}{2}+b)$
$|\cos(\dfrac{\pi}{2}+b)|=\sin(b)=0.4$
applying signs
since angle $b$ is in the second quadrant, $\dfrac{\pi}{2}+b$ is in the third quadrant, where sine and cosine are both negative
$\cos(\dfrac{\pi}{2}+b)=-0.4$

\worked example: if $\cos(a)=0.7$ and $\sin(b)=0.4$ and they are both in the third quadrant, evaluate $\sin(\dfrac{3\pi}{2}+a)$
$|\sin(\dfrac{3\pi}{2}+a)|=\cos(a)=0.7$
applying signs
since angle $a$ is in the third quadrant, $\dfrac{3\pi}{2}+a$ is in the second quadrant, where sine is positive and cosine is negative
$\sin(\dfrac{3\pi}{2}-a)=0.7$

worked example: if $\cos(a)=\dfrac{\sqrt{3}}{2}$ and $\sin(a)=\dfrac{1}{2}$ and angle $a$ is in the first quadrant, evaluate $\tan(\dfrac{3\pi}{2}-a)$
$\tan(\dfrac{3\pi}{2}-a)=\dfrac{\sin(\dfrac{3\pi}{2}-a)}{\cos(\dfrac{3\pi}{2}-a)}$
$|\sin(\dfrac{3\pi}{2}-a)|=\cos(a)=\dfrac{\sqrt{3}}{2}$
$|\cos(\dfrac{3\pi}{2}-a)|=\sin(a)=\dfrac{1}{2}$
applying signs 
since angle $a$ is in the first quadrant, $\dfrac{3\pi}{2}-a$ is in the third quadrant, where sine and cosine are both negative, and tangent is positive
$\tan(\dfrac{3\pi}{2}-a)=\dfrac{1}{\sqrt{3}}$


### graphing trig functions

trig function follows the form $y=A\cdot\sin(n(x-b))+c$
$A$ is the amplitude of the graph
$c$ is the vertical translation of the graph and the midline is $y=c$
the period of the graph is $\dfrac{2\pi}{n}$
the dilation factor from the x-axis is $\dfrac{1}{n}$
$b$ is the amount of horizontal translation to the right

when graphing, always remember to label the coordinates of all local maxima, minima and all intercepts

to find the coordinates of the y-intercept, set $x=0$
to find the coordinates of the x-intercepts, if any, set $y=0$


worked example: graph $y=2\sin(\dfrac{x}{2})$

the amplitude is 2, and the period is $\dfrac{2\pi}{0.5}=4\pi$

![[guide to trigonometry 2024-09-06 17.12.13.excalidraw.svg|408]]
%%[[guide to trigonometry 2024-09-06 17.12.13.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example: graph $y=3\sin(2x)$
the amplitude is 3, and the period is $\dfrac{2\pi}{2}=\pi$
![[guide to trigonometry 2024-09-06 17.51.15.excalidraw.svg|508]]
%%[[guide to trigonometry 2024-09-06 17.51.15.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example: graph $y=\sin(2(x-\dfrac{\pi}{4}))$
amplitude is is 1, period is $\dfrac{2\pi}{2}=\pi$, translated $\dfrac{\pi}{4}$ to the right

![[guide to trigonometry 2024-09-06 18.01.14.excalidraw.svg|424]]
%%[[guide to trigonometry 2024-09-06 18.01.14.excalidraw.md|🖋 Edit in Excalidraw]]%%

worked example graph $y=2\sin(3(x+\dfrac{\pi}{4}))$
amplitude is 2, period is $\dfrac{2\pi}{3}$ and translated $\dfrac{\pi}{4}$ to the left

calculate y-intercept: $y=2\sin(\dfrac{3\pi}{4})=2\sin(\dfrac{\pi}{4})=\sqrt{2}$


find maximum points
$\sin(3(x+\dfrac{\pi}{4}))=1$
$\sin(\dfrac{\pi}{2})=1$
$3(x+\dfrac{\pi}{4})=\dfrac{\pi}{2}$
$x+\dfrac{\pi}{4}=\dfrac{\pi}{6}$
$x=\dfrac{-\pi}{12}$

find minimum points
$\sin(3(x+\dfrac{\pi}{4}))=-1$
$\sin(\dfrac{3\pi}{2})=-1$
$3(x+\dfrac{\pi}{4})=\dfrac{3\pi}{2}$
$x+\dfrac{\pi}{4}=\dfrac{\pi}{2}$
$x=\dfrac{\pi}{4}$

find x-intercepts
$2\sin(3(x+\dfrac{\pi}{4}))=0$
$\sin(3(x+\dfrac{\pi}{4}))=0$
$\sin(0)=0$
$3(x+\dfrac{\pi}{4})=0$
$x=\dfrac{\pi}{4}$

![[guide to trigonometry 2024-09-06 18.07.20.excalidraw.svg|492]]
%%[[guide to trigonometry 2024-09-06 18.07.20.excalidraw.md|🖋 Edit in Excalidraw]]%%



worked example: graph $y=\sqrt{2}\sin(2x\dfrac{\pi}{6})+1$



worked example: graph $y=-2\sin(2x+\pi)+1$
to graph this we need to put it in the format we recognize by factoring
$y=-2\sin(2(x+\dfrac{\pi}{2}))+1$
we need to flip this vertically at the end because negative at the front
amplitude is 2
period is $\dfrac{2\pi}{2}=\pi$
translation is $\dfrac{\pi}{2}$ to the left
midline is $y=1$



## trig identities

trig identities are just equations that can help you evaluate trig expressions

essentially, trig identities provide us the ability to convert between sine and cosine and to express a trig expression in different ways

[[list of trigonometric identities]]

by forming a right angle triangle on a unit circle and using Pythagorean theorem, we get the Pythagorean identity: $\sin^2(a)+\cos^2(a)=1$


the Pythagorean identity can be rearranged to be very useful
$\sin^2(a)=1-\cos^2(a)=(1-\cos(a))(1+\cos(a))$
$\cos^2(a)=1-\sin^2(a)=(1-\sin(a))(1+\sin(a))$

example problem: in the first quadrant, if $\sin(x)=\dfrac{4}{5}$, find $\cos(x)$ and $\tan(x)$
note that $x$ in this problem is an angle and we don't need to know what it is at all
apply the Pythagorean identity
$\dfrac{16}{25}+\cos^2(x)=1$
$\cos^2(x)=1-\dfrac{16}{25}$
$\cos^2(x)=\dfrac{9}{25}$
$\cos(x)=\dfrac{3}{5}$

$\tan(x)=\dfrac{4}{3}$


example problem: in the fourth quadrant, if $\cos(x)=\dfrac{5}{13}$, find $\sin(x)$ and $\tan(x)$

we apply the Pythagorean identity, but because this is not the first quadrant we need to consider sign
remember the sign convention table? in the fourth quadrant, the cosine is positive and the sine and tangent are negative

$\dfrac{25}{169}+\sin^2(x)=1$
$\sin^2(x)=\dfrac{144}{169}$
$\sin(x)=\dfrac{12}{13}$

in the fourth quadrant, sine is negative

$\sin(x)=-\dfrac{12}{13}$

$\tan(x)=-\dfrac{12}{5}$
