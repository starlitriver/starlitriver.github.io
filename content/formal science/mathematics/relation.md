---
aliases:
  - functions
  - relations
tags: 
---

relations in mathematics is a broad concept; it is about how sets of numbers relate to each other, so often you will deal with equationsa and funcitons.

## functions

a function is a relation in which each input has exactly one output - therefore, functions are either one-to-one relations or many-to-one relations.

"A [function](https://en.wikipedia.org/wiki/Function_(mathematics)?useskin=vector) f from a [set](https://en.wikipedia.org/wiki/Set_(mathematics) "Set (mathematics)") X to a set Y is an assignment of an element of Y to each element of X. The set X is called the [domain](https://en.wikipedia.org/wiki/Domain_of_a_function "Domain of a function") of the function and the set Y is called the [codomain](https://en.wikipedia.org/wiki/Codomain "Codomain") of the function."

functions can have their [[inverse function]]

### function notation and mapping

a function is represented with a letter, and there is a definition part with the input variable surrounded by brackets.
an example is $f: \mathbb{R} \to \mathbb{R} \text{, }f(a)=a^2$
in this function, it shows that the function name is f, it inputs a real number and outputs a real number, $a$ is the input to the function and $f(a)$ is the output of the function.

### domain and range
domain: the set of all input values used by the function

range: the set of all output values used by the function



### composite functions

the domain of this function is $\{2.5.7\}$

$$
f(a) = 
     \begin{cases}
       1 &\quad\text{if } a = 2\\
       2 &\quad\text{if } a = 5\\
       3 &\quad\text{if } a = 7\\
     \end{cases}
$$

this function takes two inputs and returns two outputs

$$f(a,b):a^2+b^2=1$$

### types of functions
some examples of functions are [[power function|power functions]] and [[polynomial|polynomials]]


### composite functions

composite functions use an operation $\circ$ that takes two functions f and g, and produces a function $h=g \circ f$ such that $h(x)=g(f(x))$
in this operation, the function g is applied to the function f

## types of relations

there are four properties that relations may have:
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
