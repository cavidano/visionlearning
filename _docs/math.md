---
layout: docs
title: Math
toc: true
---

* TOC
{:toc .doc-toc}
				
This page demonstrates how we use [MathJax](https://www.mathjax.org/#docs) and JavaScript to display math equations and formulas on the website. Equations can be displayed inline or within figures.

<hr class="margin-y-4" />

## Math Figures

To render an equation within a figure, use the `$$ xxxx $$` LaTeX markup. See the example in Figure 1 below.

{% capture fig_1 %}

<div class="figure">

	<figure>
		$$Na_{(s)} \rightarrow Na^{+}_{(s)} + e^{-}$$
	</figure>

</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}

<hr class="margin-y-4" />

## Inline Math
The MathML can also be used to represent mathematical equations or formulas inline with the text. To do so, use `\( xxxx \)`. See Figure 2 below.

{% capture fig_2 %}

<p>
	For example, \( y=5^x \) is an exponential equation since the exponent is the variable x (also said as "5 to the power of x"), while \( y=5^5 \) is not an exponential equation since the exponent is 5 and not a variable. We often write exponential equations as \( y=a b^x \), where <em>a</em> and <em>b</em> are constants (numbers that don't change value) and <em>x</em> and <em>y</em> are variables.
</p>

{% endcapture %}

{% include code-example.html content=fig_2 %}


<hr class="margin-y-4" />

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

<hr class="margin-y-4" />

## MathJax Dependencies

Mathjax requires two scripts to be loaded (before the closing `</body>` tag): the MathJax configuration is set in the `/dist/js/mathjax-config.js` file. The MathJax script is loaded asynchronously from the CDN. 

{% capture fig_4 %}

<!-- MathJax Script -->
<script src="{{ site.url }}/dist/js/mathjax-config.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-svg.js" async></script>

{% endcapture %}

{% include code-example.html content=fig_4 visualExample="false" %}