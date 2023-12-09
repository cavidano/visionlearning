---
layout: docs
title: Reading Annotations
---
				
Module readings can include annotations that highlight key terms and NGSS standards. These annotations are hidden by default and can be activated by clicking on the reading toggle switch. Once activated, the annotations are highlighted and can be clicked on to view their definitions and standards.

<hr class="margin-y-4" />

## Reading Toggle Component

The reading toggle component is used to activate and deactivate the highlighting of glossary terms and NGSS standards within the module reading. The reading toggle component is placed within the `.tabs__panel` for glossary terms and NGSS standards.

{% capture fig_1 %}

<div class="reading-toggle">

    <div class="reading-toggle__switch">
        
        <div class="form-entry__option__switch">

            <label>
                <input type="checkbox" name="termsToggleSwitch" id="terms-toggle-switch">
                <span class="switch__slider"></span>
                <span class="option__label text-decoration-none font-size-md">
                    Highlight Glossary Terms
                </span>
            </label>

        </div>
    
    </div>

    <div class="reading-toggle__help">								
        <p>
            <em>
                Activate glossary term highlighting to easily identify key terms within the module. Once highlighted, you can click on these terms to view their definitions.
            </em>
        </p>
    </div>

</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}

### Reading Toggle Requirements

The reading toggle component is comprised of the following elements: 

- The `.reading-toggle` parent element is required.
  
- The `.reading-toggle__switch` selector is required. This is the parent element of the toggle switch. 

- The `.reading-toggle__help` selector is required. This holds the help text, which is hidden with JavaScript when the toggle switch is activated.

<hr class="margin-y-4" />

## Reading Annotations

The reading annotations are hidden by default and can be activated by clicking on the reading toggle switch. Once activated, the annotations are highlighted and can be clicked on to view their definitions and standards. 

### Glossary Term Annotation

The following example shows a reading annotation for a glossary term.

<figure class="margin-y-4">

<article
    class="reading-annotation glossary-term"
    aria-polite="live"
    data-term-definition>
    <div class="reading-annotation__head">
        <h2 class="h6">heat</h2>
        <button class="button button--icon-only">
            <span class="icon icon-close" aria-hidden="true"></span>
        </button>
    </div>
    <div class="reading-annotation__body">
        <p>
            [noun] A measure of the total internal energy of a substance that can be increased or decreased when objects with different temperatures are placed into contact. Heat is a process, not a property of a material.
        </p>
        <p>
            <a href="${termUrl}">View in Glossary</a>
        </p>
    </div>
</article>

</figure>

Glossary term annotations are triggered by clicking on a glossary term within the reading. The following example shows a glossary term annotation for the term "heat". 


{% capture fig_2 %}

<mark
    class="term"
    data-term-def="[definition]"
>
    heat
</mark>
{% endcapture %}

{% include code-example.html content=fig_2 visualExample="false" %}

The `term` class is used for styling the glossary term within the reading. Styling occurs only when the reading toggle switch is activated.

The `data-term-def` attribute is used to identify the term definition that will be displayed in the annotation. The title of the annotation is the term itself, contained within the `<mark>` tag.

### NGSS Term Annotation

This example shows a reading annotation for an NGSS term.

<figure class="margin-y-4">

<article
    class="reading-annotation"
    aria-polite="live"
    data-ngss-cat-abbr="Practice"
>
    <div class="reading-annotation__head">
        Science and Engineering Practices
        <button class="button button--icon-only">
            <span class="icon icon-close" aria-hidden="true"></span>
        </button>
    </div>
    <div class="reading-annotation__body">
        <p>Analyzing and interpreting data; constructing explanations: Newton's mathematical prediction did not match reality, which required him to develop a new explanation based on the data.</p>
        <span class="standard">LS.2.C: Ecosystem Dynamics, Functioning, and Resilience</span>
    </div>
</article>

</figure>

NGSS term annotations are triggered by clicking on an NGSS term within the reading. The following example shows an NGSS term annotation for the term "Science and Engineering Practices". 

{% capture fig_3 %}

<mark
    class="ngss"
    data-ngss-cat-abbr="Practice"
    data-ngss-cat-full="Science and Engineering Practices"
    data-ngss-desc="[description...]"
    data-ngss-standard="[standard...]"
>
        Based on his studies of the force of gravity, Newton calculated the average density of Earth and found it to be more than twice the density of the rocks near the surface.
</mark>

{% endcapture %}

{% include code-example.html content=fig_3 visualExample="false" %}

The `ngss` class is used for styling the NGSS term within the reading.

The `data-ngss-cat-abbr` attribute is used to identify the NGSS category abbreviation that will be displayed in the annotation.

The `data-ngss-cat-full` attribute is used to identify the NGSS category full name that will be displayed in the annotation. 

The `data-ngss-desc` attribute is used to identify the NGSS description that will be displayed in the annotation. 

The `data-ngss-standard` attribute identifies the NGSS standard that will be displayed in the annotation (e.g. LS.2.C: Ecosystem Dynamics, Functioning, and Resilience).

