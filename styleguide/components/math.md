---
layout: styleguide
title: Math
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Math Figure

To represent mathematical equations or formulas in a visually appealing manner on your website, the MathML (Mathematical Markup Language) is used. This allows for the display of complex math structures directly within the browser.

{% capture fig_1 %}

<div class="figure figure--math">

	<figure>

		<math xmlns="http://www.w3.org/1998/Math/MathML">
			<msub>
				<mi>C</mi>
				<mn>6</mn>
			</msub>
			<msub>
				<mi>H</mi>
				<mn>12</mn>
			</msub>
			<msub>
				<mi>O</mi>
				<mn>6</mn>
			</msub>
			<mo>+</mo>
			<mn>6</mn>
			<msub>
				<mi>O</mi>
				<mn>2</mn>
			</msub>
			<mo>+</mo>
			<mn>6</mn>
			<msub>
				<mi>H</mi>
				<mn>2</mn>
			</msub>
			<mi>O</mi>
			<mo>+</mo>
			<mi>e</mi>
			<mi>n</mi>
			<mi>e</mi>
			<mi>r</mi>
			<mi>g</mi>
			<mi>y</mi>
		</math>

	</figure>

</div>

{% endcapture %}

{% include example-with-code.html content=fig_1 %}

## Inline Math
To style a quote specifically for use within the module introduction, add the blockquote class to the `<blockquote>` element.

{% capture fig_2 %}

<p>
	An exponential equation is an equation in which a variable occurs in the exponent. For example, <math><mi>y</mi><mo>=</mo><msup><mn>5</mn><mi>x</mi></msup></math> is an exponential equation since the exponent is the variable x (also said as "5 to the power of x"), while <math><mi>y</mi><mo>=</mo><msup><mn>5</mn><mi>x</mi></msup></math> is not an exponential equation since the exponent is 5 and not a variable. We often write exponential equations as <math><mi>y</mi><mo>=</mo><mi>a</mi><msup><mi>b</mi><mi>x</mi></msup></math>, where <em>a</em> and <em>a</em> are constants (numbers that don't change value) and <em>x</em> and <em>y</em> are variables.
</p>

{% endcapture %}

{% include example-with-code.html content=fig_2 %}