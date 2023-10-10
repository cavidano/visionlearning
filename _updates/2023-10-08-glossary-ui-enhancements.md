---
layout: docs
type: update
title: "Glossary UI Enhancements"
date: 2023-10-08
links:
  - url: "/glossary/term.html"
    title: "Example glossary term page"
  - url: "/docs/audio/#pronunciation"
    title: "Details on pronunciations"
---

We've implemented several enhancements to the glossary user experience.

## Glossary Term Page

On the glossary term page, we've made the following changes:

- Removed the large green bar that contained the back button, which now places greater visual emphasis on the glossary term itself.
- Introduced a thick green border across the top of glossary term's container.
- Relocated the pronunciation button to below the header (h1) tag. This button now comes with an associated icon and label.

{% capture fig_1 %}

<section class="container padding-y-4 border-top border-top-color-glossary border-width-thick">
    <header class="margin-bottom-4">
        <h1>
            Absolute Zero 
        </h1>
        <!-- Optional Pronunciation button -->
        <button class="button button--has-icon text-color-link margin-top-2 font-size-md">
            <span class="icon icon-volume"></span>
            <span class="button__text">Pronunciation</span>
        </button>
    </header>

    <div class="narrow">
        <p>
            <em>
                [noun]
            </em>
        </p>
        <p>
            The theoretical lowest temperature at which all molecular motion ceases, absolute zero (0 K or -273.15°C) has never been attained.
        </p>
    </div>
</section>

<hr />

<section class="container margin-y-4">
    <div class="title-list">   
        <h2 class="h6 title-list__title">
            Appears in Modules:
        </h2>   
        <ul class="title-list__list">
            <li>
                <a href="#1">Energy</a>
            </li>
            <li>
                <a href="#1">States of Matter</a>
            </li>
            <li>
                <a href="#1">Temperature</a>
            </li>
        </ul>
    </div>
</section>

{% endcapture %}

{% include code-example.html content=fig_1 visualExample='false' %}

Note: This update requires the latest CSS build.