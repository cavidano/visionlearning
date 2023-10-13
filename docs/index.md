---
layout: docs
title: Documentation
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Updates

<div class="grid gap-4 margin-y-4">

    {% for update in site.updates %}

    <a class="no-hover-focus" href="{{ site.url }}{{ update.url }}">
        <article>

            <p class="font-size-md margin-bottom-0">
                {{ update.date | date: "%B %d, %Y" }}
            </p>

            <h2 class="h4 text-color-link">
                {{ update.title }}
            </h2>

        </article>
    </a>
    
    {% endfor %}

</div>