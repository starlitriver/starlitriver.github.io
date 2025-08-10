---
title: 
description: 
aliases: [scalar]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-08-10T12:13:59
permalink:
---

## intro

A vector is a geometric object with two attributes: a direction and a magnitude.

A vector can be represented as a directed line segment between two points.

For a vector $\overrightarrow{AB}$:
- $\overrightarrow{AB}=\vec{p}=\underset{\sim}{p}=\mathbf{p}$ are ways of writing the same vector, choose any lowercase letter.
- $|\overrightarrow{AB}|$ is the magnitude of the vector.
- $\widehat{(\overrightarrow{AB})}=\hat{\vec{p}}=\dfrac{\overrightarrow{AB}}{|\overrightarrow{AB}|}$ is the unit vector. It is the vector divided by its magnitude. This is a vector of magnitude 1, while having the same direction.

Euclidean vectors can be added and scaled to form a vector space

## row and column vectors

[[matrix|matrices]] with a single row are called row vectors, and those with a single column are called column vectors

for example, the column vector $\begin{bmatrix}3\\2\end{bmatrix}$ represents a vector $\overrightarrow{AB}$ where $A$ is at $(0,0)$ and $B$ is at $(3,2)$. the magnitude of this vector can be calculated using trig: $|\overrightarrow{AB}|=\sqrt{3^2+2^2}$

## position vector

A point $A$ can be represented relative to an origin point $O$ using a position vector, a column vector. If point A is at $(1,2,3)$, the vector from origin $O$ to $A$ is $OA=\begin{bmatrix}1\\2\\3\end{bmatrix}$

## addition

$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$

Given origin $O$ and the coordinates $A=(1,2)$ and $B=(3,4)$, we can calculate $\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}=\begin{bmatrix}-1\\-2\end{bmatrix}+\begin{bmatrix}3\\4\end{bmatrix}=\begin{bmatrix}2\\2\end{bmatrix}$

## dot product

The dot product between two vectors is also known as the scalar product.

The dot product is just a real number such that the sign of the dot product (zero, positive or negative) determines the angle between the vectors (perpendicular, acute, obtuse respectively).

Note that the dot product is commutative since it is related to the angle between two vectors.
For example, for vectors $A=\begin{bmatrix}1\\2\\3\end{bmatrix}$ and $B=\begin{bmatrix}4\\5\\6\end{bmatrix}$, the dot product would be $A\cdot B=1\cdot 4+2\cdot 5+3\cdot 6=32$

### identities

$\vec{a}\cdot \vec{a}=|\vec{a}|^2$

$\vec{a}\cdot (\vec{b}+\vec{c})=\vec{a}\cdot \vec{b}+\vec{a}\cdot \vec{c}$

$(2\vec{a}+\vec{b})\cdot (2\vec{a}+\vec{b})=|2\vec{a}+\vec{b}|^2$

## angle calculation

Somehow, we have these to remember.

$\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\theta)$

$\cos(\theta)=\dfrac{\vec{a}\cdot \vec{b}}{|\vec{a}||\vec{b}|}$

## scalar resolutes

Given two vectors a and b, we can break vector a into two components where one is parallel to b and another is perpendicular to b. The magnitude of the one parallel to b is called the scalar resolute.

![[vector 2025-08-10 11.27.36.excalidraw.svg]]
%%[[vector 2025-08-10 11.27.36.excalidraw.md|🖋 Edit in Excalidraw]]%%

In the diagram above, the scalar resolute is $|\vec{AC}|$

From Pythagorean theorem we know $\cos(\theta)=\dfrac{|\vec{AC}|}{|\vec{a}|}$
Therefore, the part of vector a parallel to b is $|\vec{AC}|=\cos(\theta)\cdot |\vec{a}|$

Another way to find it involves $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\theta)$
We know $|\vec{AC}|=\cos(\theta)\cdot |\vec{a}|$

$\vec{a}\cdot\vec{b}=|\vec{b}||\vec{AC}|$
$|\vec{AC}|=\dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})$


To summarize, the scalar resolute of a in direction of b is $\dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})$

## vector resolutes

Given two vectors a and b, we can break vector a into two components where one is parallel to b and another is perpendicular to b. 

The part of vector a parallel to b is the vector resolute, shown as $\vec{AC}=\vec{a}_\parallel$

We know the scalar resolute, $|\vec{AC}|=\dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})$

Therefore to calculate $\vec{AC}=\vec{a}_\parallel$ we have $\vec{AC}=\vec{a}_\parallel=\dfrac{\vec{b}}{|\vec{b}|}\cdot \dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})=\dfrac{\vec{a}\cdot \vec{b}}{|\vec{b}|^2}\vec{b}=(\dfrac{\vec{a}\cdot \vec{b}}{\vec{b}\cdot \vec{b}})\vec{b}$

To summarize, the vector resolute of a in the direction of b is $\vec{a}_\parallel=(\dfrac{\vec{a}\cdot \vec{b}}{\vec{b}\cdot \vec{b}})\vec{b}$

We can find the part of a perpendicular to b with $\vec{a}_\parallel+\vec{a}_\perp=\vec{a}$
