---
aliases:
  - relations
tags:
---

in mathematics, a relation is how sets of numbers relate to each other

## types of relations

set $X$ is the input set of the relation and set $Y$ is the output set of the relation

there are four properties that a relation may have:
1. each element of _X_ must be paired with at least one element of _Y_
2. no element of _X_ may be paired with more than one element of _Y_
3. each element of _Y_ must be paired with at least one element of _X_
4. no element of _Y_ may be paired with more than one element of _X_

one to one (also called a bijective relation) - has properties 1 2 3 4
each distinct input corresponds to a distinct output, and vice versa. this makes the relation [invertible](https://en.wikipedia.org/wiki/Inverse_function)
for example, $f(x)=3x+1$

many to one - has properties 1 2 3
an output can correspond to many possible inputs
for example, $f(x)=x^2$

one to many - has properties 1 3 4
an input may correspond to many possible outputs
for example, $x = f(x)^2$

many to many - has properties 1 3
an input can correspond to many outputs and an output can correspond to many inputs.
for example, $f(x,y):x^2+y^2=1$


## functions

okay, well here comes the elephant in the room

a [[function]] is a relation in which each input has exactly one output - a one-to-one relation or a many-to-one relation
