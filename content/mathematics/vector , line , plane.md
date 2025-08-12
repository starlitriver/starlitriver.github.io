---
title: 
description: 
aliases: [scalar]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-08-10T18:23:11
permalink:
---

## intro

A vector is a geometric object with two attributes: a direction and a magnitude.

A vector can be represented as a directed line segment between two points.

For a vector $\overrightarrow{AB}$:
- $\overrightarrow{AB}=\vec{p}=\underset{\sim}{p}=\mathbf{p}$ are ways of writing the same vector, choose any lowercase letter.
- $|\overrightarrow{AB}|$ is the magnitude of the vector.
- $\widehat{(\overrightarrow{AB})}=\hat{\vec{p}}=\dfrac{\overrightarrow{AB}}{|\overrightarrow{AB}|}$ is the unit vector. It is the vector divided by its magnitude. This is a vector of magnitude 1, while having the same direction.

$\langle 3,2 \rangle$ and $\begin{bmatrix}3\\2\end{bmatrix}$ can both represent a vector $\overrightarrow{AB}$ where $A$ is at $(0,0)$ and $B$ is at $(3,2)$

The magnitude of this, $|\overrightarrow{AB}|=\sqrt{3^2+2^2}=\sqrt{13}$

## position vectors

A point $A$ can be represented relative to an origin point $O$ using a position vector, a column vector. If point A is at $(1,2,3)$, the vector from origin $O$ to $A$ is $OA=\langle 1,2,3 \rangle$

$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$

Given origin $O$ and the coordinates $A=(1,2)$ and $B=(3,4)$, we can calculate $\overrightarrow{AB}=\overrightarrow{AO}+\overrightarrow{OB}=\begin{bmatrix}-1\\-2\end{bmatrix}+\begin{bmatrix}3\\4\end{bmatrix}=\begin{bmatrix}2\\2\end{bmatrix}$

To summarize, for points A and B of (1,2,3) and (4,5,6) respectively, we can calculate the vector $\vec{AB}=\vec{B}-\vec{A}=\langle 4-1,5-2,6-3 \rangle=\langle 3,3,3 \rangle$

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

```anki
id: 1754904493835
---
To calculate the angle between two vectors, use ==$\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos(\theta)$==
```

## scalar resolutes

Given two vectors a and b, we can break vector a into two components where one is parallel to b and another is perpendicular to b. The magnitude of the one parallel to b is called the scalar resolute.

![[vector 2025-08-10 11.27.36.excalidraw.svg]]
%%[[vector 2025-08-10 11.27.36.excalidraw.md|🖋 Edit in Excalidraw]]%%

In the diagram above, the scalar resolute is $|\vec{AC}|$

From Pythagorean theorem we know $\cos(\theta)=\dfrac{|\vec{AC}|}{|\vec{a}|}$
Therefore, the part of vector a parallel to b is $|\vec{AC}|=|\cos(\theta)| |\vec{a}|$

Another way to find it involves $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}||\cos(\theta)|$
We know $|\vec{AC}|=\cos(\theta)\cdot |\vec{a}|$

$\vec{a}\cdot\vec{b}=|\vec{b}||\vec{AC}|$
$|\vec{AC}|=\dfrac{|\vec{a}\cdot \vec{b}|}{|\vec{b}|}$


To summarize, the scalar resolute of a in direction of b is $\dfrac{|\vec{a}\cdot \vec{b}|}{|\vec{b}|}$

```anki
id: 1754904493882
---
The scalar resolute of a in direction of b is ==$\dfrac{|\vec{a}\cdot \vec{b}|}{|\vec{b}|}$==
```

## vector resolutes

Given two vectors a and b, we can break vector a into two components where one is parallel to b and another is perpendicular to b. 

The part of vector a parallel to b is the vector resolute, shown as $\vec{AC}=\vec{a}_\parallel$

We know the scalar resolute, $|\vec{AC}|=\dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})$

Therefore to calculate $\vec{AC}=\vec{a}_\parallel$ we have $\vec{AC}=\vec{a}_\parallel=\dfrac{\vec{b}}{|\vec{b}|}\cdot \dfrac{1}{|\vec{b}|}(\vec{a}\cdot \vec{b})=\dfrac{\vec{a}\cdot \vec{b}}{|\vec{b}|^2}\vec{b}=(\dfrac{\vec{a}\cdot \vec{b}}{\vec{b}\cdot \vec{b}})\vec{b}$

To summarize, the vector resolute of a in the direction of b is $\vec{a}_\parallel=(\dfrac{\vec{a}\cdot \vec{b}}{\vec{b}\cdot \vec{b}})\vec{b}$

```anki
id: 1754904493932
---
The vector resolute of a in the direction of b is ==$\vec{a}_\parallel=(\dfrac{\vec{a}\cdot\vec{b} }{\vec{b}\cdot\vec{b} }) \vec{b}$==.
```

We can find the part of a perpendicular to b with $\vec{a}_\parallel+\vec{a}_\perp=\vec{a}$

## cross product, vector product

The cross product takes two vectors and produces a vector perpendicular to both the original vectors, called a normal vector.

The cross product is not commutative, as $\vec{a}\times\vec{b}=-(\vec{b}\times\vec{a})$

As shown below, the cross product is equal to the determinant of a matrix where ijk are the top row and stuff.

$\langle 1,2,3 \rangle\times\langle 4,5,6 \rangle=\begin{vmatrix}i&j&k \\ 1&2&3 \\ 4&5&6\end{vmatrix}=12-15+-(6-12)+5-8$

## forms of a line

In vector form, line can be defined as $\vec{r}(t)=\langle 1+4t, 2+5t, 3+6t\rangle$ where $(1,2,3)$ is a point on the line and $\langle 4,5,6 \rangle$ is a vector parallel to the line.

In parametric form, we can make separate equations for every dimension in terms of t to make a set of parametric equations.

$x=1+4t$, $y=2+5t$ , $z=3+6t$ for $t\in\mathbb{R}$

In Cartesian form we rearrange and cancel out the t.

$t=\dfrac{x-1}{4}$, $t=\dfrac{y-2}{5}$, $t=\dfrac{z-3}{6}$

$\dfrac{x-1}{4}=\dfrac{y-2}{5}=\dfrac{z-3}{6}$

## find plane with normal vector and one point on the plane

To derive the vector equation of a plane in the form $\underset{\sim}{r}\cdot\underset{\sim}{n}=\underset{\sim}{r_0}\cdot\underset{\sim}{n}$, where $\underset{\sim}{n}$ is a normal vector to the plane, $\underset{\sim}{r_0}$ is a position vector of a points that lies on the plane, and $\underset{\sim}{r}$ represents that of any point on the plane.

We can derive the equation $\underset{\sim}{r}\cdot\underset{\sim}{n}=\underset{\sim}{r_0}\cdot\underset{\sim}{n}$ by doing something.


$ax+by+cz=d$


To find a plane, we just need $\underset{\sim}{n}$ and $\underset{\sim}{r_0}$. For example, given $\langle -1,5,-3 \rangle$ is normal to a plane, and the point (-3,4,6) is on the plane, we use the equation $\underset{\sim}{r}\cdot\underset{\sim}{n}=\underset{\sim}{r_0}\cdot\underset{\sim}{n}$.

$\vec{r}\cdot \langle -1,5,-3 \rangle=3+20-18$
We find the vector equation of the plane is $\vec{r}\cdot \langle -1,5,-3 \rangle=5$

let $\vec{r}=\langle x,y,z \rangle$
We find the Cartesian equation of the plane is $-x+5y-3z=5$

```anki
id: 1754904493982
---
To find a plane, we just need $\underset{\sim}{n}$ and $\underset{\sim}{r_0}$. For example, given $\langle -1,5,-3 \rangle$ is normal to a plane, and the point (-3,4,6) is on the plane, we use the equation ==$\underset{\sim}{r}\cdot\underset{\sim}{n}=\underset{\sim}{r_0}\cdot\underset{\sim}{n}$.==
```

## shortest distance between a point and a plane

Assume we know a point $A=(4,1,3)$ and a plane $2x+3y+z=5$

First find a point on the plane. Let $B=(0,0,5)$

We know the normal vector to the plane, $\vec{n}=\langle 2,3,1 \rangle$

The shortest distance is therefore the scalar resolute of $\vec{AB}$ in the direction of $\vec{n}$, which is $\dfrac{|\vec{AB}\cdot \vec{n}|}{|\vec{n}|}$
