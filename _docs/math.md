---
layout: docs
title: Math
---
				
This page demonstrates how we use MathJax and JavaScript to display math equations and formulas on the website. Equations can be displayed inline or as figures.

<hr class="margin-y-4" />

## Math Figures

To render an equation within a figure, use the ***double dollar sign*** LaTeX markup. See the example in Figure 1 below.

{% capture fig_1 %}

<div class="figure">

	<figure>
		$$C_6H_{12}O_6 + 6O_2 + 6H_2O + \text{energy}$$
	</figure>

</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}

## Inline Math
The MathML can also be used to represent mathematical equations or formulas inline with the text. See Figure 2 below.

{% capture fig_2 %}

<p>
	For example, \( y=5^x \) is an exponential equation since the exponent is the variable x (also said as "5 to the power of x"), while \( y=5^5 \) is not an exponential equation since the exponent is 5 and not a variable. We often write exponential equations as \( y=a b^x \), where <em>a</em> and <em>b</em> are constants (numbers that don't change value) and <em>x</em> and <em>y</em> are variables.
</p>

{% endcapture %}

{% include code-example.html content=fig_2 %}

## Adding Color to MathML

To use the `\textcolor` command, follow the syntax: `\textcolor{color}{text}`. Here, color is the name of the color you want to apply (e.g., blue, red, etc.), and text is the part of the equation you want to color.

{% capture fig_3 %}

<div class="figure">

	<figure>
		$$C_6H_{12}O_6 + \textcolor{blue}{6}O_2 \rightarrow \textcolor{blue}{6}CO_2 + \textcolor{blue}{6}H_2O + \textit{energy}$$
	</figure>

</div>

{% endcapture %}

{% include code-example.html content=fig_3 %}
