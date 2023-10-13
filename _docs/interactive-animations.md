---
layout: docs
title: Interactive Animations
---
				
Interactive animations help convey core scientific concepts. Each animation is associated with a learning module that provides detailed background on the subject in question.

<hr class="margin-y-4" />

## In-module CTA

Interactive animation call-to-action (CTA) buttons within modules are enclosed within an `<a>` tag. These buttons feature a thumbnail and title, accompanied by an icon indicating that the content will open in a new window.

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