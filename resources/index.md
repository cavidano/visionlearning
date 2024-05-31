---
layout: docs
title: Resources
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Module Figures

<ul class="grid gap-2 margin-y-4">

{% for doc in site.module-figures %}

<li>
    <a
        href="{{ site.url }}/module-figures/{{doc.slug}}"
        {% if page.url contains doc.slug %}
        aria-current="page"
        {% else %}
        class="text-color-link"
        {% endif %}
    >
        {{ doc.title }}
    </a>
</li>

{% endfor %}

</ul>