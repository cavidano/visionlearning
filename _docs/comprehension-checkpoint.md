---
layout: docs
title: Comprehension Checkpoint
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

{% capture fig_1 %}

{% include comprehension-checkpoint.html
    cp_label='Our knowledge about the internal structure of Earth comes mainly from'
    option_A = 'earthquakes.'
    option_B = 'deep mine shafts.'
%}

{% endcapture %}

{% include code-example.html content=fig_1 %}

---

#### The `<blockquote>` Element:

- The block quote should always be wrapped in a `<blockquote>` element.
  
- The `<blockquote>` can optionally include a `cite` attribute that provides a URL reference to the original source.

#### The `<p>` Element:

- Every block quote should contain at least one `<p>` element.
  
- The `<p>` element should encapsulate the actual quotation text.
  
- There should not be any other elements (like headings or lists) directly inside the `<blockquote>` other than the `<p>` and `<footer>`.