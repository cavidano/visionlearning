---
layout: docs
title: Interactive Animations
---
				
Interactive animations help convey core scientific concepts. Each animation is associated with a learning module that provides detailed background on the subject in question.

<hr class="margin-y-4" />

## In-module CTA

Interactive animation call-to-action (CTA) buttons within modules are enclosed within an `<a>` tag. These buttons feature a thumbnail and title, accompanied by an icon indicating that the content will open in a new window.

{% capture fig_1 %}

<a
	class="interactive-animation" 
	href="https://www.visionlearning.com/library/animations/Cell_Biology/Cell_Animal.html"
	target="_blank">
                            
	<img
		class="interactive-animation__image"
		src="https://visionlearning.com/images/anim-snaps/ia-animal-cell.png"
		alt="The Structure of Animal Cells"
	/>
					
	<p class="interactive-animation__title">
		<em>Interactive Animation:</em>

		<strong class="link-new-window">
			<span class="link__text">
				The Structure of Animal Cells
			</span>
		</strong>

	</p>

</a>

{% endcapture %}

{% include code-example.html content=fig_1 %}

<hr class="margin-y-4" />

### In-module CTA Requirements 

#### The parent `<a>` Tag
- Encloses the entire component, making it a clickable entity that redirects to the specified href URL.
- The `.interactive-animation` selector styles the entire link.
- The `href`: Should contain the URL of the interactive animation.
- The `target="_blank"` attribute ensures that the linked content opens in a new browser tab or window.

#### The `<img>` Tag
- Displays a thumbnail representing the interactive animation content.
- The `.interactive-animation__image` selector styles the image.
- The `src` should contain the URL of the thumbnail image.
- The `alt`: Should contain descriptive text explaining the image content for accessibility.

#### The `<p>` Paragraph Tag (Title Container)
- Holds and styles the title of the interactive animation.
- The `.interactive-animation__title` selector applies styles to the title container.
- The paragraph should include text content structured with `<em>` for emphasized text ("Interactive Animation:") and `<strong>` for the main title.

#### The `<strong>` Tag
- The `.link-new-window` selector applies the *new window* icon after the text.

#### The `<span>` Tag (Title Container)
- Encloses the main title text of the interactive animation, allowing for specific styling.
- The `.link__text` selector applies specific styles to the title text.
- Contains the actual text title of the interactive animation.