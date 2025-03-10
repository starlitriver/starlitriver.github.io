---
title: 
description: 
aliases: []
tags: []
created: 2025-02-07T13:54:41
modified: 2025-03-10T09:53:40
permalink:
---

## refractive index

The refractive index is a ratio to measure the speed of light through a medium. Also, different frequencies of light have different refractive indexes for the same medium.

```anki
id: 1741560291848
---
The refractive index is ==a ratio to measure the speed of light through a medium. Also, different frequencies of light have different refractive indexes for the same medium.==
```

## intro

Please watch this [video](https://www.youtube.com/watch?v=8LebJXjbkfo) because it's really good.

The normal line passes through the point of incidence and is perpendicular to the surface.

$n_1$ and $n_2$ are the refractive indexes of the mediums.



![[refraction 2024-12-25 13.47.40.excalidraw.svg|570]]
%%[[refraction 2024-12-25 13.47.40.excalidraw.md|🖋 Edit in Excalidraw]]%%




$\theta_1$ is the angle of incidence, measured from the normal.
$\theta_2$ is the angle of refraction, measured from the normal.


![[refraction 2024-12-25 13.59.47.excalidraw.svg|440]]
%%[[refraction 2024-12-25 13.59.47.excalidraw.md|🖋 Edit in Excalidraw]]%%

## Snell's law

Now, the relationships between the refractive index things and the angles $\theta_1$ and $\theta_2$ is described by Snell's law.

Snell's law is $n_1\sin(\theta_1)=n_2\sin(\theta_2)$

```anki
id: 1741560291922
---
Snell's law is ==$n_1\sin(\theta_1)=n_2\sin(\theta_2)$==
```

![[refraction 2024-12-27 10.35.56.excalidraw.svg|410]]
%%[[refraction 2024-12-27 10.35.56.excalidraw.md|🖋 Edit in Excalidraw]]%%



If $n_2$ is larger, angle of refraction is smaller. If smaller, angle of refraction is larger.

![[refraction 2024-12-25 13.57.25.excalidraw.svg|530]]
%%[[refraction 2024-12-25 13.57.25.excalidraw.md|🖋 Edit in Excalidraw]]%%

## critical angle and internal reflection

When the angle of refraction $\theta_2=90\degree$, the ray will travel perpendicular to the normal line.

Snell's law says that $n_1\sin(\theta_1)=n_2\sin(\theta_2)$.

Directly coming from Snell's law, $\theta_1=\sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(\theta_2))$.

Directly coming from Snell's law, $\theta_{\text{crit}}=\sin^{-1}(\dfrac{n_2}{n_1})$, because $\theta_2=90\degree$

If $\theta_1=\theta_{\text{crit}}$ then $\sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(\theta_2))=\sin^{-1}(\dfrac{n_2}{n_1})$ then $\theta_2=90\degree$

![[refraction 2024-12-27 10.20.46.excalidraw.svg|384]]
%%[[refraction 2024-12-27 10.20.46.excalidraw.md|🖋 Edit in Excalidraw]]%%


Internal reflection is when the angle of incidence $\theta_1$ is greater than the critical angle, and it means $\theta_2$ must be undefined.

If $\theta_1>\theta_{\text{crit}}$ then $\sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(\theta_2))>\sin^{-1}(\dfrac{n_2}{n_1})$  which simplifies to $\sin(\theta_2)>1$. This is impossible, making $\theta_2$ undefined.

So, there is no refraction, but reflection instead.

![[refraction 2024-12-27 10.51.30.excalidraw.svg|280]]
%%[[refraction 2024-12-27 10.51.30.excalidraw.md|🖋 Edit in Excalidraw]]%%


For internal reflection to be possible, $n_2>n_1$.

```anki
id: 1741560841207
---
For internal reflection to be possible, ==$n_2>n_1$.==
```

Proof here.

$\theta_1=\sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(\theta_2))$.
$\theta_2 = 90\degree$

Substitute $\theta_2 = 90\degree$ into $\sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(\theta_2))$

$\therefore \sin^{-1}(\dfrac{n_2}{n_1}\cdot \sin(90\degree))$ 

$\theta_1=\sin^{-1}(\dfrac{n_2}{n_1}\cdot1)$

$\theta_1=\sin^{-1}(\dfrac{n_2}{n_1})$

$\theta_1>\theta_2$

So $\sin^{-1}(\dfrac{n_2}{n_1})>90\degree$

$\dfrac{n_2}{n_1}>\sin(90\degree)$

$\dfrac{n_2}{n_1}>1$

$n_2>n_1$

## dispersion

Different frequencies of light have different refractive indexes for the same medium.

Because of this, different frequencies of light would disperse.

Red light has smaller frequency. Red light has larger wavelength. Red light has a larger angle of refraction. Red light is less bent towards normal.

```anki
id: 1741560841283
---
In dispersion. Red light has ==smaller frequency. Red light has larger wavelength. Red light has a larger angle of refraction. Red light is less bent towards normal.==
```

![[refraction , dispersion 2025-02-14 17.39.58.excalidraw.svg|410]]
%%[[refraction , dispersion 2025-02-14 17.39.58.excalidraw.md|🖋 Edit in Excalidraw]]%%
