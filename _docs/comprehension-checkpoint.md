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

## Hanging punctuation
To style a quote specifically for use within the module introduction, add the blockquote class to the `<blockquote>` element.

{% capture fig_2 %}

<blockquote class="blockquote-hanging">

	<p>
		Correcting for this bias may seem simple, just adding ~0.5° C to early canvas bucket measurements, but it becomes more complicated than that because, the authors continue, the majority of SST data do not include a description of what kind of bucket or system was used.”
	</p>

	<cite>
		<strong>Victoria Tauli-Corpuz,</strong> the UN’s Special Rapporteur for Indigenous Peoples, 2019
	</cite>

</blockquote>

{% endcapture %}

{% include code-example.html content=fig_2 %}

<hr class="margin-y-4" />

### Blockquote requirements 

For the more traditional block quote, the citations will need to follow APA format. There are two ways to add a citation for block quotes according to APA. You can find an explanation of both [here](https://research.wou.edu/apa/apa-block-quote).

#### The `<blockquote>` Element:

- The block quote should always be wrapped in a `<blockquote>` element.
  
- The `<blockquote>` can optionally include a `cite` attribute that provides a URL reference to the original source.

#### The `<p>` Element:

- Every block quote should contain at least one `<p>` element.
  
- The `<p>` element should encapsulate the actual quotation text.
  
- There should not be any other elements (like headings or lists) directly inside the `<blockquote>` other than the `<p>` and `<footer>`.

#### The `<footer>` Element:

- The `<footer>` is optional but recommended if citation details are available.
  
- It typically appears after the `<p>` element containing the quotation.
  
- The footer provides additional information about the quotation, typically the author's name and the title of the work.

#### The `<cite>` Element:

- The `<cite>` element is nested within the `<footer>` and is optional.
  
- It provides a human-readable reference to the source of the quote.
  
- This element can be styled or structured in various ways, but it should provide clarity about the original source or author.

#### The `<strong>` Element:

- Used within the `<cite>` element to emphasize the author's name.
  
- This is optional but serves to highlight the author's name for better visibility.