---
layout: docs
title: Figure
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Enlarge Image

To enlarge an image, add the following code to your markdown file:

{% capture fig_1 %}

<div class="figure">
    <figure>
        <button 
            class="lightbox-button lightbox-button--icon"
			data-lightbox="image"
            data-lightbox-src="https://www.visionlearning.com/img/library/large_images/image_9574.jpg">
            <img
				src="https://www.visionlearning.com/img/library/large_images/image_9574.jpg" 
                alt="Figure 1: Glow discharge in a low-pressure tube caused by electric current. Like what Faraday saw, the tube shows a dark space between the glows around the cathode (left, negatively charged) and anode (right, positively charged)."
			/>
        </button>
        <figcaption>
            <p>
                <strong>Figure 1</strong>: Glow discharge in a low-pressure tube caused by electric current. Like what Faraday saw, the tube shows a dark space between the glows around the cathode (left, negatively charged) and anode (right, positively charged).
            </p>
            <span class="credit">image ©Andrejdam/Wikimedia</span>
        </figcaption>
    </figure>
</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}
