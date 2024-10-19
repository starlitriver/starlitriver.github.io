---
aliases: 
tags: 
---

a [[logarithmic function]] in the form $f(x)=a\cdot\log_c(b(x-h))+k$ can be graphed

compared to exponential functions logarithmic functions have a way more restricted domain because the [[logarithm]] function has restraints
for $\log_a(b)$, the base $a$ is restricted to be $0<a<1\lor a>1$ 
the input to the log function, $b$, is restricted to be $b>0$
if the restrictions are not met, a math error happens


since the definition of the log function requires its input to be greater than 0, $b(x-h)>0$. through this, we know that as soon as $b(c-h)=0$, the function breaks


one thing about all logarithmic functions, they all have a vertical asymptote at the line $b(x-h)=0$

asymptote is $x=m$ where $b(m-h)=0$

assume that $a$ and $b$ are positive and $c>1$, remember how a general logarithmic function looks like
yes, since a log is the [[inverse function|inverse]] of an exponent, it's a flip across the line $y=x$

figure: the general logarithmic function goes from the bottom to the upper right
**![[how to graph logarithmic functions 2024-10-01 19.12.02.excalidraw.svg|243]]**
%%[[how to graph logarithmic functions 2024-10-01 19.12.02.excalidraw.md|🖋 Edit in Excalidraw]]%%


now, we think about other values for $a$, $b$ and $c$

if a is negative, there will be a vertical reflection
if $b$ is negative, there will be a horizontal reflection across the asymptote
if $c$ is in the range $0<c<1$, there will be a vertical reflection


worked example: graph $y=-\log_4(2x-1)$
simplify to the form $f(x)=a\cdot\log_c(b(x-h))+k$
$y=-1\cdot \log_4(2(x-\dfrac{1}{2}))$

asymptote is $x=m$ where $b(m-h)=0$
$2(m-\dfrac{1}{2})=0$
$m=\dfrac{1}{2}$
asymptote is $x=\dfrac{1}{2}$

x-intercepts

$0=-\log_4(2x-1)$
$0=\log_4(2x-1)$
$4^0=2x-1$
$x=1$

y-intercepts

$y=-\log_4(-1)$

the input to the log function is not positive
y-intercept is undefined




worked example: graph $y=\dfrac{1}{2}\log_4(x+1)-1$
simplify to the form $f(x)=a\cdot\log_c(b(x-h))+k$
$y=\dfrac{1}{2}\cdot \log_4(x+1)-1$
