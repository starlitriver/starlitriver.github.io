---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

supplementary identities change the inside of the trig function to go to different quadrants

figure: for an angle theta in the first quadrant, it can be reflected across axes to different quadrants, and the absolute value is the same
![[guide to trigonometry 2024-09-06 12.06.00.excalidraw.svg|500]]
%%[[guide to trigonometry 2024-09-06 12.06.00.excalidraw.md|🖋 Edit in Excalidraw]]%%



you can see that when an angle is transferred to different quadrants, the absolute value of the trig function results are the same. this is why we always calculate the value first, and then worry about the sign later, depending on the quadrant the original angle is in

for example, to reflect an angle in the first quadrant to be in the second quadrant, we need to change the angle $\theta$ into $\pi-\theta$
referencing the figure above, we see that for any angle $\theta$ in the first quadrant,  $\cos(\theta)=-\cos(\pi-\theta)$ and $\sin(\theta)=\sin(\pi-\theta)$

that's supplementary identities, basically. (could've chosen a better name, in my opinion)
for other quadrants, we have $\pi+\theta$ and $2\pi-\theta$ for the third and fourth quadrants, respectively.


$|\cos(\pi-\theta)|=\cos(\theta)$
$|\sin(\pi-\theta)|=\sin(\theta)$

for angle $\theta$ in the second quadrant, $|\sin(\theta)|$ is equal to $\sin(\pi-\theta)$

$|\cos(\pi+\theta)|=\cos(\theta)$
$|\sin(\pi+\theta)|=\sin(\theta)$

for angle $\theta$ in the third quadrant, $|\sin(\theta)|$ is equal to $\sin(\theta-\pi)$

$|\cos(2\pi-\theta)|=\cos(\theta)$
$|\sin(2\pi-\theta)|=\sin(\theta)$

for angle $\theta$ in the second quadrant, $|\sin(\theta)|$ is equal to {$\sin(2\pi-\theta)$}

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
