---
title: 
description: 
aliases: []
tags: []
created: 2025-05-25T13:08:34
modified: 2025-05-25T16:19:40
permalink:
---

# A company employs 30 salespersons, 12 of whom are men and 18 are women. Five salespersons are to be selected at random to attend an important conference. What is the probability of selecting two men and three women?

Pr(2 men, 3 women) = $\dfrac{C(12,2)\cdot C(18,3)}{C(30,5)}$ = 0.378

# An electrical component is packaged in boxes of 20. A technician randomly selects three from each box for testing. If there are no faulty components, the whole box is passed. If there are any faulty components, the box is sent back for further inspection. If a box is known to contain four faulty components, what is the probability it will pass?

The box has 20 total, 4 faulty, 16 not faulty. We select 3 for testing.

Pr(all not faulty) = $\dfrac{C(16,3)\cdot C(4,0)}{C(20,3)}$ = 0.491

# A pond contains seven gold and eight black fish. If three fish are caught at random in a net, find the probability that at least one of them is black.

15 total, 7 gold, 8 black. Select 3.

Pr(at least 1 back) = 1 - Pr(no blacks) = $1-\dfrac{C(8,0)\cdot C(7,3)}{C(15,3)}=1-\dfrac{1}{13}=\dfrac{12}{13}$

# A researcher has caught, tagged and released 10 birds of a particular species into the forest. If there are known to be 25 of this species of bird in the area, what is the probability that another sample of five birds will contain three tagged ones?

25 total, 10 tagged, 15 untagged. Select 5.

Pr(3 tagged)=$\dfrac{C(10,3)\cdot C(15,2)}{C(25,5)}=0.237$

# A tennis instructor has 10 new and 10 used tennis balls. If he selects six balls at random to use in a class, what is the probability that there will be at least two new balls?

20 total, 10 new, 10 used. Select 6.

Pr(at least 2 new) = 1 - Pr(0 new) - Pr (1 new) = $1-\dfrac{C(10,0)\cdot C(10,6)}{C(20,6)}\dfrac{C(10,1)\cdot C(10,5)}{C(20,6)}=0.930$

# A jury of six persons was selected from a group of 18 potential jurors, of whom eight were female and 10 male. The jury was supposedly selected at random, but it contained only one female. Do you have any reason to doubt the randomness of the selection? Explain your reasons.

18 total, 8 female, 10 male. Select 6.

Pr(one female) = $\dfrac{C(8,1)\cdot C(10,5)}{C(18,6)}=0.109$

It is likely enough.

# A box contains 14 batteries, some of which are flat. Three batteries are selected from the box at random. If the probability that exactly two of the selected batteries are flat is $\dfrac{30}{91}$ , how many flat batteries are in the box?

14 total, x flat, 14-x not flat. Select 3.

Pr(2 flat) = $\dfrac{30}{91}=\dfrac{C(x,2)\cdot C(14-x,1)}{C(14,3)}$

Solve equation for x.

$x=-3.26\dots,6,12.26\dots$ so $x=6$ to be integer.

# A researcher is studying the wombats in a state park. During the first tagging session, she is able to catch, tag and release 12 wombats. If the probability that the next sample of three wombats will contain no tagged ones is $\dfrac{7}{45}$ , how many wombats are in the park?

x total, 12 tagged, x-12 untagged. Select 3.

Pr(no tagged ones) = $\dfrac{7}{45}=\dfrac{C(12,0)\cdot C(x-12,3)}{C(x,3)}$

Solve equation for x.

$x=27$
