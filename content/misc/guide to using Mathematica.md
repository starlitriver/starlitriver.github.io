---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-09T15:53:43
permalink:
---

Mathematica, the common usage things.

Here's a nice little [pdf](https://dornsife.usc.edu/mathcenter/wp-content/uploads/sites/159/2023/06/crib_sheet.pdf) someone made, a nice summary of the most important things.

## how it works

Mathematica is the name of the app. First you input some stuff into the app, and the app will take that and express it in computer code stuff, which involves a lot of math stuff like axioms or whats...
anyway, once your input has been understood, there's the backend that does a lot of thinking
and then you'll have your answer shown to you

## basic usage

a Mathematica notebook is just a list of cells. there are text cells, input cells and whatnots

the horizontal line at the end of the document looks a bit cryptic, but that's just how it looks like.
you can find a plus button somewhere on the line and it says you can choose Wolfram input, FreeForm input, or some other stuff.
basically, Wolfram input is what Mathematica understands and can calculate things with, so we use Wolfram input a lot
if you choose to create a FreeForm input, your input can be just normal English and Mathematica will try to understand it and make it into Wolfram input, and you'll still get the output you want

anyway, first, use your Wolfram input. if your cursor is just a blinking horizontal line, you can start typing and it will create a new cell
while typing in a cell, you can make a new line inside the cell by pressing enter, run the cell using shift enter, and get out of the cell by pressing down arrow

basic operations are kinda like how other calculators work, except that all the special math functions stuff is all infected with square brackets and uses CamelCase as well :(
like, to type $x=\sin(\pi)$ we type `x=Sin[Pi]`
oh well

## stuff to keep in mind

in Mathematica, the curly brackets are lists. i guess math calls them sets and you can call them whatever. just don't call them dictionaries or json objects.

## variables 

yes, Mathematica can store variables
as with all calculators that store variables, managing variables is a pain.
"x = value" assigns the value to x
"x := value" makes the definition of x be the value. whenever x is used, no matter if it has been assigned a value before, the app uses the definition and assigns that to x
"x == y" means an assumption that x is equal to y. a single equal sign is used to assigning things only, which is why we can't just use one

if a variable is defined or assigned a value,

## commands

the commands are technically functions and we can call them either commands or functions
they have square brackets and you put something inside and you get stuff you want. magic!

a command, for example, "Solve", can be explained if you don't know what it does
if you input "??Solve" the output is "Solve[expr,vars] attempts to solve the system", and it's just documentation of what the command does

there are more than a thousand of these commands, but you won't use all of them, i think the average person just needs about a dozen commands

i keep a list of commands that are commonly used

- Solve [expr,vars] tries to solve for the variables given the expression containing the variables
- Simplify [expr] does transformations  
- FullSimplify [expr] does a lot more transformations
- Plot [function,{x,xmin,xmax}] plots the function over the specified domain
- Expand [expr] multiplies out some the products and powers
- ExpandAll [expr] multiplies out all products and powers
- Factor [polynomial] factors the polynomial
- Together [expr] makes all terms in the expression have a common denominator
- Collect [expr,x] group together powers of x
- Roots [polynomial,x] find all roots of the polynomial, only exact solutions
- FindRoot [function,{x,a}] find some roots of the function, starting from x=a
- Reduce [expr,x] try to reduce the expression so the variable can be seen
