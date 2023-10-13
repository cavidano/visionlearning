---
layout: docs
title: Interactive Animations
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## In-module CTA

Within modules, interactive animation call to action buttons are wrapped an an `<a>` tag. They include a thumbnail and title with a *new window* icon.

{% capture fig_1 %}

<a class="interactive-animation" href="https://www.visionlearning.com/library/animations/Cell_Biology/Cell_Animal.html" target="_blank">
                            
	<img
		class="interactive-animation__image"
		src="https://visionlearning.com/images/anim-snaps/ia-animal-cell.png"
		alt="The Structure of Animal Cells"
	/>
					
	<p class="interactive-animation__title">
		<em>Interactive Animation:</em>
		<strong>The Structure of Animal Cells</strong>
	</p>

</a>

{% endcapture %}

{% include code-example.html content=fig_1 %}