---
title: 
description: 
aliases: [algebraic structure]
tags: []
created: 2024-11-19T21:16:10
modified: 2025-02-09T15:53:46
permalink:
---

in mathematics, an algebraic structure consists of a non-empty set $A$, called the domain or underlying set, and a collection of [[operation|operations]] on $A$

most algebraic structures that we work with are [[expression|expressions]], a subset of algebraic structures that include rings and fields

## axioms

the symbol $*$ and $+$ used as placeholders that represent any unique operation

### commutativity

an operation $*$ is commutative if
$x*y=y*x$
for every $x$ and $y$ in the algebraic structure

### associativity

an operation $*$ is associative if
$(x*y)*z=x*(y*z)$
for every $x$ , $y$ and $z$ in the algebraic structure

### left distributivity

an operation $*$ is left distributive with respect to another operation $+$ if
$x*(y+z)=(x*y)(x*z)$
for every $x$ , $y$ and $z$ in the algebraic structure

### right distributivity

an operation $*$ is right distributive with respect to another operation $+$ if
$(y+z)*x=(y*x)(z*x)$
for every $x$ , $y$ and $z$ in the algebraic structure

### distributivity

an operation $*$ is distributive with respect to another operation $+$ if it is both left distributive and right distributive

## common algebraic structures

here we define the most common algebraic structures
there's a lot of definitions here 

### groups

a set of elements with a single binary operation (e.g., addition, multiplication) that satisfies certain properties, such as closure, associativity, and the existence of an identity element and inverse elements.

examples: integers under addition, rotations in 3d space, permutations of a set.

### rings

a set of elements with two binary operations (e.g., addition, multiplication) that satisfy certain properties, such as closure, associativity, and distributivity.

examples: integers under addition and multiplication, polynomials with integer coefficients, matrices with integer entries.

### fields

a set of elements with two binary operations (e.g., addition, multiplication) that satisfy certain properties, such as closure, associativity, and distributivity, as well as the existence of additive and multiplicative identities and inverses.

examples: real numbers under addition and multiplication, complex numbers under addition and multiplication, rational numbers under addition and multiplication.

### vector spaces

a set of vectors with a binary operation (e.g., vector addition) and a scalar multiplication operation that satisfy certain properties, such as closure, associativity, and distributivity.

examples: 3d space under vector addition and scalar multiplication, matrices under matrix addition and scalar multiplication, functions under pointwise addition and scalar multiplication.

### modules

a set of elements with a binary operation (e.g., addition) and a scalar multiplication operation that satisfy certain properties, such as closure, associativity, and distributivity.

examples: integers under addition and scalar multiplication, polynomials with integer coefficients under addition and scalar multiplication, matrices with integer entries under addition and scalar multiplication.

### lattices

a set of elements with two binary operations (e.g., meet, join) that satisfy certain properties, such as commutativity, associativity, and distributivity.

examples: sets of subsets under set intersection and union, sets of integers under greatest common divisor and least common multiple.

### semigroups

a set of elements with a single binary operation (e.g., addition, multiplication) that satisfies certain properties, such as closure and associativity.

examples: sets of integers under addition, sets of matrices under matrix multiplication.

### monoids

a set of elements with a single binary operation (e.g., addition, multiplication) that satisfies certain properties, such as closure, associativity, and the existence of an identity element.

examples: sets of integers under addition, sets of strings under concatenation.

### quasigroups

a set of elements with a single binary operation (e.g., addition, multiplication) that satisfies certain properties, such as closure, associativity, and the existence of an identity element, but may not have inverse elements.

examples: sets of integers under addition, sets of strings under concatenation.

### algebras

a set of elements with multiple binary operations (e.g., addition, multiplication, composition) that satisfy certain properties, such as closure, associativity, and distributivity.

examples: sets of functions under pointwise addition and composition, sets of matrices under matrix addition and multiplication.
