---
layout: docs
title: Math
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Math Figure

To represent mathematical equations or formulas in a visually appealing manner on your website, the MathML (Mathematical Markup Language) is used. This allows for the display of complex math structures directly within the browser.

{% capture fig_1 %}

<div class="figure">

	<figure>
		$$C_6H_{12}O_6 + 6O_2 + 6H_2O + \text{energy}$$
	</figure>

</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}

## Inline Math
The MathML can also be used to represent mathematical equations or formulas inline with the text. This is particularly useful when you want to include a mathematical expression within a sentence or paragraph.

{% capture fig_2 %}

<p>
    An exponential equation is an equation in which a variable occurs in the exponent. For example, $$y=5^x$$ is an exponential equation since the exponent is the variable x (also said as "5 to the power of x"), while $$y=5^5$$ is not an exponential equation since the exponent is 5 and not a variable. We often write exponential equations as $$y=a b^x$$, where <em>a</em> and <em>b</em> are constants (numbers that don't change value) and <em>x</em> and <em>y</em> are variables.
</p>



{% endcapture %}

{% include code-example.html content=fig_2 %}