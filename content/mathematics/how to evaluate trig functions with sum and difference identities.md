---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:45
permalink:
---

the sum and difference [[list of trigonometric identities|trig identities]] are useful in evaluating more stuff

the proof for these are quite intense, better not to worry

$\sin(a+b) = \sin(a)\cdot\cos(b)+\cos(a)\cdot\sin(b)$

$\sin(a-b) = \sin(a)\cdot\cos(b)-\cos(a)\cdot\sin(b)$

$\cos(a+b) = \cos(a)\cdot\cos(b)-\sin(a)\cdot\sin(b)$

$\cos(a-b) = \cos(a)\cdot\cos(b)+\sin(a)\cdot\sin(b)$

$\tan(a+b)=\dfrac{\tan(a)+\tan(b)}{1-\tan(a)\tan(b)}$
$\tan(a-b)=\dfrac{\tan(a)-\tan(b)}{1+\tan(a)\tan(b)}$



worked example: evaluate $\sin(\dfrac{\pi}{4}+\dfrac{\pi}{3})$
$\sin(a)\cdot\cos(b)+\cos(a)\cdot\sin(b)$
$\sin(\dfrac{\pi}{4})\cdot\cos(\dfrac{\pi}{3})+\cos(\dfrac{\pi}{4})\cdot\sin(\dfrac{\pi}{3})$
$\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}+\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}$
$\dfrac{\sqrt{2}}{4}+\dfrac{\sqrt{6}}{4}$
$\dfrac{\sqrt{2}+\sqrt{6}}{4}$

worked example: evaluate $\cos(\dfrac{5\pi}{12})$
$\cos(\dfrac{\pi}{4}+\dfrac{\pi}{6})$
$\cos(a)\cdot\cos(b)-\sin(a)\cdot\sin(b)$
$\cos(\dfrac{\pi}{4})\cdot\cos(\dfrac{\pi}{6})-\sin(\dfrac{\pi}{4})\cdot\sin(\dfrac{\pi}{6})$
$\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}-\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}$
$\dfrac{\sqrt{6}-\sqrt{2}}{4}$

worked example: evaluate $\sin(-\dfrac{\pi}{12})$
$\sin(\dfrac{\pi}{4}-\dfrac{\pi}{3})$
$\sin(a)\cdot\cos(b)-\cos(a)\cdot\sin(b)$
$\sin(\dfrac{\pi}{4})\cdot\cos(\dfrac{\pi}{3})-\cos(\dfrac{\pi}{4})\cdot\sin(\dfrac{\pi}{3})$
$\dfrac{\sqrt{2}}{2}\cdot\dfrac{1}{2}-\dfrac{\sqrt{2}}{2}\cdot\dfrac{\sqrt{3}}{2}$
$\dfrac{\sqrt{2}-\sqrt{6}}{4}$

worked example: evaluate $\cos(\dfrac{7\pi}{12})$
$\cos(\dfrac{\pi}{3}+\dfrac{\pi}{4})$
$\cos(a)\cdot\cos(b)-\sin(a)\cdot\sin(b)$
$\cos(\dfrac{\pi}{3})\cdot\cos(\dfrac{\pi}{4})-\sin(\dfrac{\pi}{3})\cdot\sin(\dfrac{\pi}{4})$
$\dfrac{1}{2}\cdot\dfrac{\sqrt{2}}{2}-\dfrac{\sqrt{3}}{2}\cdot\dfrac{\sqrt{2}}{2}$
$\dfrac{\sqrt{2}-\sqrt{6}}{4}$

worked example: evaluate $\tan(\dfrac{\pi}{12})$
$\tan(\dfrac{\pi}{3}-\dfrac{\pi}{4})$
$\dfrac{\tan(a)-\tan(b)}{1+\tan(a)\cdot\tan(b)}$
$\dfrac{\sqrt{3}-1}{1+\sqrt{3}}$
rationalize
$\dfrac{\sqrt{3}-1}{1+\sqrt{3}}\cdot\dfrac{1-\sqrt{3}}{1-\sqrt{3}}$
$\dfrac{(\sqrt{3}-1)(1-\sqrt{3})}{1-3}$
$\dfrac{\sqrt{3}-3-1+\sqrt{3}}{1-3}$
$\dfrac{2\sqrt{3}-4}{-2}$
$2-\sqrt{3}$

worked example: evaluate $\tan(-\dfrac{7\pi}{12})$
$\tan(-\dfrac{\pi}{3}+-\dfrac{\pi}{4})$
$\dfrac{\tan(a)+\tan(b)}{1-\tan(a)\cdot\tan(b)}$
$\tan(-\dfrac{\pi}{3})=-\sqrt{3}$
$\tan(-\dfrac{\pi}{4})=-1$
$\dfrac{-\sqrt{3}-1}{1-\sqrt{3}}$
rationalize
$\dfrac{-\sqrt{3}-1}{1-\sqrt{3}}\cdot\dfrac{1+\sqrt{3}}{1+\sqrt{3}}$
$\dfrac{(-\sqrt{3}-1)(1+\sqrt{3})}{1-3}$
$\dfrac{-\sqrt{3}-3-1-\sqrt{3}}{1-3}$
$\dfrac{-2\sqrt{3}-4}{-2}$
$\sqrt{3}+2$

worked example: given angles $a$ and $b$ in quadrant 1, $\sin(a)=0.7$ and $\cos(b)=0.8$, find $\cos(a-b)$
$\cos(a)\cdot\cos(b)+\sin(a)\cdot\sin(b)$
make a triangle to use $\sin(a)=0.7$ to find $\cos(a)$
![[how to evaluate trig functions with sum and difference identities 2024-09-27 09.43.48.excalidraw.svg|211]]
%%[[how to evaluate trig functions with sum and difference identities 2024-09-27 09.43.48.excalidraw.md|🖋 Edit in Excalidraw]]%%
$\cos(a)=\dfrac{\sqrt{51}}{10}$
make a triangle to use $\cos(b)=0.8$ to find $\sin(b)$
![[how to evaluate trig functions with sum and difference identities 2024-09-27 09.47.08.excalidraw.svg|195]]
%%[[how to evaluate trig functions with sum and difference identities 2024-09-27 09.47.08.excalidraw.md|🖋 Edit in Excalidraw]]%%
$\sin(b)=\dfrac{6}{10}$
$\dfrac{\sqrt{51}}{10}\cdot0.8+0.7*\dfrac{6}{10}$
$\dfrac{8\sqrt{51}+42}{100}$
$\dfrac{4\sqrt{51}+21}{50}$

worked example: given angles $a$ and $b$ in quadrant 1, $\sin(a)=0.7$ and $\cos(b)=0.8$, find $\tan(a+b)$
$\dfrac{\tan(a)+\tan(b)}{1-\tan(a)\cdot\tan(b)}$
make a triangle to use $\sin(a)=0.7$ to find $\tan(a)$
make a triangle to use $\cos(b)=0.8$ to find $\tan(b)$

$\tan(a)=\dfrac{7}{\sqrt{51}}$
$\tan(b)=\dfrac{3}{4}$
$\dfrac{\dfrac{7}{\sqrt{51}}+\dfrac{3}{4}}{1-\dfrac{7}{\sqrt{51}}\cdot\dfrac{3}{4}}$
i have no idea how to simplify this further :/
