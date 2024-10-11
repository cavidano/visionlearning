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

The `<nav class="vl-hat__menu" id="vl-hat-nav">` element provides the main navigation links.

{% capture fig_2 %}

<nav class="vl-hat__menu" id="vl-hat-nav">

    <ul class="nav nav--horizontal--xl">
        <li>
            <a href="#1">
                About
            </a>
        </li>
        <li>
            <a href="#1">
                Contact
            </a>
        </li>
        <li>
            <a href="#1">
                Docs
            </a>
        </li>
    </ul>

</nav>

{% endcapture %}

{%  include code-example.html 
    visualExample='false' 
    content=fig_2  
%}

**The Main Navigation:**
- Uses an unordered list (`<ul>`) to hold the primary links (`About`, `Contact`, `Docs`).
- The `.nav--horizontal--xl` class styles the navigation horizontally on larger screens.

<hr class="margin-y-4" />

## Header Actions

The `<div class="vl-hat__actions">` element contains additional header actions, including search, sign-in, and language switching.

{% capture fig_2 %}
<div class="vl-hat__actions">
    <button
        class="button button--icon-only"
        aria-label="Search"
        data-toggle="collapse"
        data-target-toggle="#global-search"
        data-target-close="#vl-hat-nav">
        <span class="icon icon-search" aria-hidden="true"></span>
    </button>

    <a class="button button--has-icon" href="#1">
        <span class="icon icon-sign-in"></span>
        <span class="button__text">Sign In</span>
    </a>

    <a class="button" href="#1" id="es-translate">
        <span>Español</span>
    </a>
</div>

{% endcapture %}

{%  include code-example.html 
    visualExample='false' 
    content=fig_2
%}

**The Header Actions:**
- **Search Button:** The `.button--icon-only` provides a search button that toggles the visibility of the search field.
- **Sign In Link:** The `.button--has-icon` allows users to sign in, with both an icon and text for improved accessibility.
- **Language Switch Link:** The `Español` button lets users switch to Spanish.

<hr class="margin-y-4" />

### Logo and Branding

The `<div class="vl-header__logo">` contains the logo of the application, providing branding and a link back to the homepage.

```html
<div class="vl-header__logo">
    <a href="#1" data-logo="brand">
        <svg xmlns="http://www.w3.org/2000/svg" width="270" height="60" viewbox="0 0 270 60">
            <!-- SVG logo markup -->
        </svg>
    </a>
</div>
```

**The Logo Element:**
- The `<a>` tag wraps the logo, providing a link to the homepage.
- Uses an SVG element for a scalable vector logo, ensuring crisp visuals on all screen sizes.

<hr class="margin-y-4" />

### Search Panel

The `<div class="collapse padding-y-3 border-bottom" id="global-search">` element provides a collapsible search form for the header.

```html
<div class="collapse padding-y-3 border-bottom" id="global-search" data-focus-first>
    <div class="container narrow">
        <form action="http://localhost:4001/search/site-search.html" aria-label="Search">
            <div class="form-entry">
                <div class="form-entry__field">
                    <span class="form-entry__field__input">
                        <input type="text" name="searchInput" id="search-input" autocomplete="off">
                        <button class="button theme-dark" data-clear-input="">
                            Search
                        </button>
                    </span>
                </div>
            </div>
        </form>
    </div>
</div>
```

**The Search Panel:**
- Provides an input field for users to enter search terms.
- Includes a search button with a `.theme-dark` class to match the dark theme for emphasis.
- The `data-focus-first` attribute ensures that the first focusable element receives focus when the panel is opened, enhancing accessibility.

<hr class="margin-y-4" />

## Primary Navigation

The `<nav class="vl-header__menu">` element provides branded navigation links that lead to different sections, such as `Library`, `Glossary`, and `Classroom`.

```html
<nav class="vl-header__menu">
    <ul>
        <li class="library">
            <a href="#1">
                <span class="title">Library</span>
                <span class="tagline">Learning modules</span>
            </a>
        </li>
        <li class="glossary">
            <a href="#1">
                <span class="title">Glossary</span>
                <span class="tagline">Science terms</span>
            </a>
        </li>
        <li class="classroom">
            <a href="#1">
                <span class="title">Classroom</span>
                <span class="tagline">Custom courses</span>
            </a>
        </li>
    </ul>
</nav>
```

**The Branding Navigation:**
- Uses a list of links with a title and tagline to provide quick access to key branded sections.
- Each link uses the `.title` and `.tagline` elements for concise labeling of content categories.
