---
aliases: 
tags:
---

in information technology, syntax refers to the rules governing the composition of expressions

everything are expressions, so syntax is very important to many things in life

some examples of syntax include languages, grammar, and conventions

ultimately, syntax explores the question: how do we express things through using the keys on the keyboard?

how do you show stuff like math symbols, chemical equations and tons of other stuff in our heads?

well, i'm just grateful that humanity can agree on some typesetting methods

## latex

i guess there needs to be one way to format all the symbols that people like to use, so yeah. latex.

basics of latex
- a pair of single dollar signs, `$$`, enclose inline latex
- a pair of double dollar signs, `$$$$`, enclose not inline latex
- letters are italic by default unless enclosed within `\text{}` or `\mathrm{}`
- use all the symbols you want by searching up things

### chemistry

writing chemical equations so hard!
my first instinct would be, "let's try using latex to format chemical formulas!"
so, yeah, latex is the universally accepted method for writing everything i guess

[this reddit post](https://www.reddit.com/r/LaTeX/comments/\frac{1cjloid}{\frac{chemistry_latex_tutorial_without_a_plugin}{)  published recently says that to format chemistry
- enclose chemical formula within `\mathrm{}` to make letters not italic
- use `\textit{}` to depict italic letters within `\mathrm{}`
- use `\rightarrow` and `\rightleftharpoons` to depict arrows
- superscripts or subscripts that precede the text can use a pair of empty brackets like `{}^2H`
- if superscripts and subscripts have to stack do superscripts first
- if superscript comes after subscript use empty brackets as separator between them


example, photosynthesis
$\mathrm{12H_O+6CO_{2}\rightarrow C_6H_{12}O_6+6H_2O+6O_2}$

example
$\mathrm{PO_4{}^{3-}}$

example, enthalpy of reactions
$\mathrm{N_2+3H_2\rightleftharpoons\ 2NH_3\qquad \Delta \textit{H}_{\textit{rxn}}\text{=-92.2 kJ/mol}}$

example, ion dissociation equation
$\mathrm{Ca_3(PO_4)_2(s)\rightleftharpoons\ 3Ca^{2+}(aq)+2PO_4{}^{3-}(aq)}$
