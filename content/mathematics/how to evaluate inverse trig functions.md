---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

before you start, remember the domain and range of the inverse trig functions, shown below, and in the [[trigonometric functions|trig functions]] page.

$\sin(x)$
domain: $\mathbb{R}$
range: $[-1,1]$

$\sin^{-1}(x)$
domain: $[-1,1]$
range: $[-\dfrac{\pi}{2},\dfrac{\pi}{2}]$

$\cos(x)$
domain: $\mathbb{R}$
range: $[-1,1]$

$\cos^{-1}(x)$
domain: $[-1,1]$
range: $[0,\pi]$

$\tan(x)$
domain: $\mathbb{R}$
range: $\mathbb{R}$

$\tan^{-1}(x)$
domain: $\mathbb{R}$
range: $[-\dfrac{\pi}{2},\dfrac{\pi}{2}]$


we evaluate inverse trig functions by looking at the common angles table

| $\theta$       | $0$ | $\dfrac{\pi}{6}$      | $\dfrac{\pi}{4}$      | $\dfrac{\pi}{3}$      | $\dfrac{\pi}{2}$ |
| -------------- | --- | --------------------- | --------------------- | --------------------- | ---------------- |
| $\sin(\theta)$ | 0   | $\dfrac{1}{2}$        | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | 1                |
| $\cos(\theta)$ | 1   | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$        | 0                |
| $\tan(\theta)$ | 0   | $\dfrac{1}{\sqrt{3}}$ | 1                     | $\sqrt{3}$            | undefined        |

worked example: evaluate $\sin^{-1}(\dfrac{1}{2})$
answer will be in the range: $[-\dfrac{\pi}{2},\dfrac{\pi}{2}]$
$\sin(\theta)=\dfrac{1}{2}$
$\theta=\dfrac{\pi}{6}$

worked example: evaluate $\cos^{-1}(-\dfrac{\sqrt{3}}{2})$
answer will be in the range: $[0,\pi]$
$\cos(\theta)=-\dfrac{\sqrt{3}}{2}$
firstly we need an angle that gets cosine of $\dfrac{\sqrt{3}}{2}$
we know that $\cos(\dfrac{\pi}{6})=\dfrac{\sqrt{3}}{2}$
now we need to reflect that angle across the y axis, because we want $-\dfrac{\sqrt{3}}{2}$
$\dfrac{\pi}{6}$ reflected across the y axis results in an angle in the second quadrant, found with $\pi-\dfrac{\pi}{6}=\dfrac{5\pi}{6}$
$\cos(\dfrac{5\pi}{6})=-\dfrac{\sqrt{3}}{2}$


worked example: evaluate $\cos^{-1}(-\dfrac{\sqrt{3}}{2})$
we're going to do this worked example again, this time with a quicker way
$\cos(\theta)=-\dfrac{\sqrt{3}}{2}$
firstly we need an angle that gets cosine of $\dfrac{\sqrt{3}}{2}$
we know that $\cos(\dfrac{\pi}{6})=\dfrac{\sqrt{3}}{2}$
the output of inverse cosine is always non-negative
so $\theta\geq0$
$\theta=\dfrac{\pi}{6}$


worked example: evaluate $\tan^{-1}(-\dfrac{1}{\sqrt{3}})$
answer will be in the range: $[-\dfrac{\pi}{2},\dfrac{\pi}{2}]$
$\tan(\theta)=-\dfrac{1}{\sqrt{3}}$

$\tan(\dfrac{\pi}{6})=\dfrac{1}{\sqrt{3}}$
the output of inverse tan always has the same sign as the input
$\theta=-\dfrac{\pi}{6}$
