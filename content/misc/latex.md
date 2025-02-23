---
title: 
description: 
aliases: []
tags: []
created: 2024-11-19T21:16:11
modified: 2025-02-23T19:29:37
permalink:
---

Syntax is the set of rules governing the composition of expressions.

Ultimately, computer syntax explores the question: how do we express things through using the keys on the keyboard?

How do you show stuff like math symbols, chemical equations and things? Well, I'm just grateful that humanity can agree on some typesettings.

## latex

One format to rule them all, so yeah, latex.

### math

Basics of latex:
- a pair of single dollar signs, `$$`, enclose inline latex
- a pair of double dollar signs, `$$$$`, enclose block display latex
- letters are italic by default unless enclosed within `\text{}` or `\mathrm{}`

### chemistry

Writing chemical equations so hard! My first instinct would be, "let's try using latex to format chemical formulas!"

So, yeah, latex is the universally accepted method for writing everything I guess.

[this reddit post](https://www.reddit.com/r/LaTeX/comments/\frac{1cjloid}{\frac{chemistry_latex_tutorial_without_a_plugin}{)  published recently says that to format chemistry
- enclose chemical formula within `\mathrm{}` to make letters not italic
- use `\textit{}` to depict italic letters within `\mathrm{}`
- use `\rightarrow` and `\rightleftharpoons` to depict arrows
- superscripts or subscripts that precede the text can use a pair of empty brackets like `{}^2H`
- if superscripts and subscripts have to stack do superscripts first
- if superscript comes after subscript use empty brackets as separator between them


$\mathrm{12H_O+6CO_{2}\rightarrow C_6H_{12}O_6+6H_2O+6O_2}$

$\mathrm{PO_4{}^{3-}}$

$\mathrm{N_2+3H_2\rightleftharpoons\ 2NH_3\qquad \Delta \textit{H}_{\textit{rxn}}\text{=-92.2 kJ/mol}}$

$\mathrm{Ca_3(PO_4)_2(s)\rightleftharpoons\ 3Ca^{2+}(aq)+2PO_4{}^{3-}(aq)}$
