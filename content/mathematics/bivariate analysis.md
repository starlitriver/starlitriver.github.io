---
title: 
description: 
aliases: []
tags: []
created: 2025-02-07T13:40:07
modified: 2025-02-09T15:53:46
permalink:
---

bivariate analysis is part of multivariate analysis, defined as the observation and analysis of more than one outcome variable

reminder, data is classified as either categorical or numerical.

in bivariate data, we analyze the distributions of two data columns instead of just on.

this can be used to find correlations between two variables

we put the explanatory variable in the x axis and the response variable on the y axis
this is an attempt to see the correlation between x and y such that a change in x might cause a change in y

if both the explanatory variable and the response variable are categorical, we need to use tables to represent their relationships

for example: consider the following data:

| basketball size | basketball color |
| --------------- | ---------------- |
| small           | red              |
| big             | red              |
| small           | blue             |
| big             | blue             |
| small           | blue             |
| big             | red              |
| big             | red              |

we need to represent this data in a table that represents the 

|       | big | small |
| ----- | --- | ----- |
| red   | 3/4 | 1/3   |
| blue  | 1/4 | 2/3   |
| total | 1   | 1     |

this way, we find that the size of a basketball can relate to the basketball color, because a 3/4 of big basketballs are red, much larger compared to small basketballs, 1/3


if both the explanatory variable and the response variable are numerical, we need to use a scatterplot to represent their relationships
consider the following data:

| books read | test score |
| ---------- | ---------- |
| 11         | 30         |
| 9          | 90         |
| 6          | 40         |
| 12         | 80         |
| 3          | 60         |
| 5          | 40         |

![[bivariate data 2024-09-17 14.18.46.excalidraw.svg|386]]
%%[[bivariate data 2024-09-17 14.18.46.excalidraw.md|🖋 Edit in Excalidraw]]%%


yeah, scatter plots work

the calculators can calculate the linear regression line, also called the line of best fit
this line is useful to make predictions of one of the variables when you have another

if that wasn't clear, for example, for a person who has read 6 books, you can kinda predict that they will get a test score of about 50
if the calculator solved for the equation of the linear regression line, we just substitute $x=6$ and solve for the prediction y value

predictions are either interpolation, if the prediction input is within the range of your data, and extrapolation, if the prediction input is outside the range of your data
by predicting $x=6$, it is within the range, which is more accurate than predicting $x=20$, which is outside the range


the Pearson's correlation constant, depicted as $r$, shows you how strongly the correlation is, at a scale of 0 to 1, from 0 meaning no association at all, to 1 meaning perfectly straight linear association
heres another table about $r$ and association strength because why not

| \|$r$\|   | association          |
| --------- | -------------------- |
| 0-0.24    | no association       |
| 0.25-0.49 | weak association     |
| 0.5-0.74  | moderate association |
| 0.75-0.99 | strong association   |
| 1         | perfect association  |

for example, in the dataset above, the calculator says that $r=0.26$, meaning that it's a weak association

additionally, if the correlation is negative, meaning that the slope of the regression line is negative, the $r$ value is negative as well
