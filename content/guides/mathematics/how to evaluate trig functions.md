---
aliases: 
tags: 
---

[[trigonometric functions|trig functions]] are functions that have to do with triangles and the mythical geometries of the world
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

| $\theta$       | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
| -------------- | --- | ---------------- | ---------------- | ---------------- | ---------------- |
| $\sin(\theta)$ | 0   | 1                | 2                | 3                | 4                |
| $\cos(\theta)$ | 4   | 3                | 2                | 1                | 0                |
| $\tan(\theta)$ |     |                  |                  |                  |                  |


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


### practice identifying supplementary identities

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


### practice evaluating supplementary identities

worked example: evaluate $\sin(\dfrac{2\pi}{3})$
$\pi$ is half of a full circle, and $\dfrac{2}{3}\pi$ is an angle in the second quadrant
applying identities
$|\sin(\dfrac{2\pi}{3})|=\sin(\dfrac{\pi}{3})=\dfrac{\sqrt{3}}{2}$
applying signs
in second quadrant, only sine is positive
$\sin(\dfrac{2\pi}{3})=\dfrac{\sqrt{3}}{2}$

worked example: evaluate $\cos(\dfrac{5\pi}{4})$
$\dfrac{5}{4}\pi$ is a bit more than half a circle, in the third quadrant
applying identities
$|\cos(\dfrac{5\pi}{4})|=\cos(\dfrac{\pi}{4})=\dfrac{\sqrt{2}}{2}$
applying signs
in the third quadrant, only tangent is positive
$\cos(\dfrac{5\pi}{4})=-\dfrac{\sqrt{2}}{2}$


worked example: evaluate $\tan(\dfrac{4\pi}{3})$
$\tan(\dfrac{4\pi}{3})=\dfrac{\sin({\dfrac{4\pi}{3}})}{\cos({\dfrac{4\pi}{3}})}$
$\dfrac{4}{3}\pi$ is a bit more than half a circle, in the third quadrant
applying identities
$|\sin(\dfrac{4\pi}{3})|=\sin(\dfrac{\pi}{3})=\dfrac{\sqrt{3}}{2}$
$|\cos(\dfrac{4\pi}{3})|=\cos(\dfrac{\pi}{3})=\dfrac{1}{2}$
applying signs
in the third quadrant, only tangent is positive
$\tan(\dfrac{4\pi}{3})=\sqrt{3}$


worked example: evaluate $\sin(\dfrac{11\pi}{6})$
$\dfrac{11}{6}\pi$ is almost a full circle, in the fourth quadrant
applying identities
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


### practice complementary relationships

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
