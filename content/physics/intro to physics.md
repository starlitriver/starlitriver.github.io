---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:10
modified: 2025-03-16T15:58:49
permalink:
---

## Newton's laws of motion

Newton's three laws
- First Law (Inertia): An object at rest stays at rest, and an object in motion stays in motion with the same velocity, unless acted upon by a net external force. This means objects resist changes in their motion.
- Second Law (F = ma): The net force acting on an object is equal to the mass of the object multiplied by its acceleration (F = ma). This is the _key_ equation for solving most force problems. The direction of the acceleration is the same as the direction of the net force.
- Third Law: For every action, there is an equal and opposite reaction. When one object exerts a force on a second object, the second object exerts an equal and opposite force on the first. _Crucially_, these forces act on different objects.

## kinematics

Distance - the distance between two points (scalar).
Speed - distance over time (scalar).

Displacement - change in position (vector).
Velocity - change in position over time (vector).
Acceleration - change in velocity over time (vector).


Relating this to mathematics:
- Velocity is the rate of change of an object's position over time.
$v(t)=d'(t)$
- Acceleration is the rate of change of an object's velocity over time.
$a(t)=v'(t)=d''(t)$
- Jerk is the rate of change of an object's acceleration over time.
$j(t)=a'(t)=v''(t)=d'''(t)$



We have SUVAT equations for kinematics.
$s$ is displacement, $u$ is initial velocity, $v$ is final velocity, $a$ is acceleration, $t$ is time

Figure: Equations for SUVAT, to solve for one given three.

| S                  | $s=vt-\dfrac{1}{2}at^2$         | $s=ut+\dfrac{1}{2}at^2$         | $s=\dfrac{t}{2}(u+v)$ | $s=\dfrac{u^2+v^2}{2a}$ |
| ------------------ | ------------------------------- | ------------------------------- | --------------------- | ----------------------- |
| $u=v-at$           | U                               | $u=\dfrac{s-at^2}{2t}$          | $u=\dfrac{2s}{t}+v$   | $u=\sqrt{2as-v^2}$      |
| $v=u+at$           | $v=\dfrac{s+at^2}{2t}$          | V                               | $v=\dfrac{2s}{t}+v$   | $v=\sqrt{u^2+2as}$      |
| $a=\dfrac{v-u}{t}$ | $a=\dfrac{2(vt-s)}{t^2}$        | $a=\dfrac{2(s-ut)}{t^2}$        | A                     | $a=\dfrac{v^2-u^2}{2s}$ |
| $t=\dfrac{v-u}{a}$ | $t=\dfrac{v-\sqrt{v^2-2as}}{a}$ | $t=\dfrac{\sqrt{2as+u^2}-u}{a}$ | $t=\dfrac{2s}{u+v}$   | T                       |
|                    |                                 |                                 |                       |                         |

> Note. 1 m/s = 3.6 km/h






[[acceleration]] in meters per second squared is equal to [[force]] in newtons divided by [[mass]] in kilograms

$a\cdot \dfrac{m}{s^2}=\dfrac{F\cdot N}{m \cdot kg}$
$a=\dfrac{F}{m}$

$\dfrac{F}{m} \cdot \dfrac{m}{s^2}=\dfrac{F\cdot N}{m \cdot kg}$
$F \cdot s^{-2}=F \cdot N \cdot m^{-1} \cdot kg^{-1}$
$1=N \cdot m^{-1} \cdot kg^{-1} \cdot s^2$


[[momentum]] in kilograms times meters per second is equal to [[mass]] in kilograms times [[position , velocity , acceleration , jerk]] in meters per second
$p\cdot kg \cdot \dfrac{m}{s}=m\cdot kg \cdot v \cdot \dfrac{m}{s}$
$p=mv$
