---
layout: docs
title: Global Header
toc: true
---

* TOC
{:toc .doc-toc}

This section covers the global header component, which is included on every page of the Visionlearning website. The global header consists of several key elements:

- Skip Links
- Secondary Navigation
- Header Actions (e.g., Search, Sign In, Español)
- Logo and Branding
- Primary Navigation (e.g., Library, Glossary, Classroom)

<hr class="margin-y-4" />

## Skip Links

The `<div class="skip-links">` selector contains skip links to allow keyboard users to jump to the main content or the website footer.

{% capture fig_1 %}

<div class="skip-links">

    <a href="#main">
        Jump to main content
    </a>

    <a href="#global-footer">
        Jump to website footer
    </a>

</div>

{% endcapture %}

{%  include code-example.html 
    visualExample='false' 
    content=fig_1
%}

**The Skip Links:**
- Provide quick navigation options for screen reader users.
- The `.focusable-only` class makes these links visible only when they are focused.

{%
    include external-resource.html
    url="https://gonatura11y.com/docs/link#skip-links"
    text="Skip Links are available in the Natura11y framework"
    link_text="Natura11y's Skip Links Docs"
%}

<hr class="margin-y-4" />

## Main Navigation

Content to be added