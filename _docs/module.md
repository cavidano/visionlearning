---
layout: docs
title: Module
toc: true
---

* TOC
{:toc .doc-toc}

This section introduces the module container component. It breaks down the module, starting with the container grid and then moving into each individual child area.

<hr class="margin-y-4" />

## Module Grid

The module grid consists of six direct child elements, as shown in the figure below.

{% capture fig_1 %}

<article class="module">

    <header class="module__header">
        ...
    </header>

    <nav class="module__tabs">
        ...
    </nav>

    <div class="module__audio">
        ...
    </div>

    <hr class="module__divider" aria-hidden="true" />

    <div class="module__tools">
        ...
    </div>

    <div class="module__main">
        ...
    </div>

</article>

{% endcapture %}

{%  include code-example.html 
    visualExample='false' 
    content=fig_1
%}

<hr class="margin-y-4" />

### Module Header

The `<header class="module__header">` element serves as the introductory section of the module. It provides key information about the content, including:

{% capture fig_2 %}

<header class="module__header">

    <span class="subcategory">
        <strong>
            <em>Category Name Here</em>
        </strong>
    </span>

    <h1>
        Page Title Here:
        <sub>
            <em>
                Subtitle Here
            </em>
        </sub>
    </h1>

    <p class="byline">
        by Anne E. Egger, Ph.D., 
    </p>

</header>

{% endcapture %}

{% include code-example.html visualExample='true' content=fig_2 %}


**The `.subcategory` Element:**
- Displays a specific category name for context.
- Typically wrapped with emphasis using `<strong>` and `<em>` elements.

**The `<h1>` Element:**

- Represents the main title of the page.
- Subtitles should be placed within a `<sub>` element.

**The `<p class="byline">` Element:**

- Contains the author information.
- Used to attribute the content to one or more authors, separated by commas.

<hr class="margin-y-4" />

### Module Tabs

The `<nav class="module__tabs">` holds the navigation tabs for the module.

{% capture fig_3 %}

<nav class="module__tabs">

    <ul class="tabs-nav tabs-nav--pill tabs-nav--horizontal--md library">
        <li>
            <a href="#1" class="is-active" aria-current="page">
                Reading
            </a>
        </li>
        <li>
            <a href="#1">
                Quiz
            </a>
        </li>
        <li>
            <a href="#1">
                Teach with this
            </a>
        </li>
    </ul>

</nav>

{% endcapture %}

{% include code-example.html visualExample='true' highlightLines="3" content=fig_3 %}

**The `<nav class="module__tabs">` Element:**

- Provides a container for navigation tabs.

**The `<ul>` Element:**

- Represents an unordered list of tabs.
- Uses the `.tabs-nav`, and `.tabs-nav--pill` classes to style the list.
- Contains the list of tabs available for navigation.
- Uses classes such as `tabs-nav--pill` and `tabs-nav--horizontal--md` to determine style and behavior.
- The `library` class provides the library color theme, visually distinguishing the tabs.

**The `<li>` and `<a>` Elements:**

- Each `<li>` element represents an individual tab.
- The `<a>` element within provides the clickable link to navigate to the relevant section.
- The `is-active` class and `aria-current="page"` attribute indicate the currently active tab.

<hr class="margin-y-4" />

### Module Audio

The `<div class="module__audio">` element is intended to provide audio content related to the module.

{% capture fig_4 %}

<div class="module__audio">
    
    <div class="audio-player border border-radius">

        <audio id="audio">
            <source src="https://www.visionlearning.com/img/library/moduleAudio/module_64.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <div class="audio-player__title">
            <p>Listen to this reading</p>

            <span class="audio-player__timestamp" id="timestamp">
                00:00
            </span>
        </div>

        <div
            class="audio-player__controls"
            id="controls"
        >

            <button
                class="button button--icon-only"
                id="play-pause-button"
            >
                <span class="icon icon-play" aria-hidden="true"></span>
            </button>

            <div 
                class="audio-player__progress" 
                id="progress-bar" 
                tabindex="0"  
                aria-valuemin="0" 
                aria-valuemax="100" 
                aria-valuenow="0" 
                aria-label="Use arrow keys to forward or rewind the audio"
                role="slider"
            >
                <div class="audio-player__progress__fill">
                    <span class="audio-player__thumb"></span>
                </div>
            </div>

            <div class="audio-player__volume-container">
                <button id="mute-button">
                
                <span class="icon icon-volume"></span>
                </button>

                <div 
                    class="audio-player__volume"
                    tabindex="0" 
                    aria-valuemin="0" 
                    aria-valuemax="100" 
                    aria-valuenow="100" 
                    aria-label="Use arrow keys to adjust volume"
                    role="slider" 
                >
                    <div class="audio-player__volume__fill">
                        <span class="audio-player__thumb"></span>
                    </div>
                </div>
            
            </div>

        </div>

    </div>

</div>

{% endcapture %}

{% include code-example.html visualExample='true' content=fig_4 %}

<hr class="margin-y-4" />

**The `<div class="module__audio">` Element:**

- Serves as a container for the audio player within the module.
- Enhances the module by providing audio content related to the topic.

**The `<div class="audio-player">` Element:**

- Contains all components of the audio player, including controls, title, and audio element.
- Uses classes like `border` and `border-radius` for styling.

**The `<audio>` Element:**

- Provides the audio content for users to listen to.
- Includes a `<source>` element to specify the audio file and type.
- Displays fallback text if the browser does not support the audio element.

**The `<div class="audio-player__title">` Element:**

- Displays the title or description of the audio content.
- Includes a timestamp (`<span class="audio-player__timestamp">`) to show the current play time.

**The `<div class="audio-player__controls">` Element:**

- Holds all interactive controls for the audio player.

**The `<button id="play-pause-button">` Element:**

- Provides a button to play or pause the audio.
- Uses an icon (`<span class="icon icon-play">`) to visually represent the action.

**The `<div class="audio-player__progress">` Element:**

- Represents the progress bar for the audio.
- Acts as a slider, allowing users to navigate through the audio using keyboard arrow keys.
- Uses ARIA attributes (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`) to ensure accessibility.

**The `<div class="audio-player__volume-container">` Element:**

- Contains controls for adjusting the volume of the audio.

**The `<button id="mute-button">` Element:**

- Provides a button to mute or unmute the audio.
- Uses an icon (`<span class="icon icon-volume">`) to visually indicate the current volume state.

**The `<div class="audio-player__volume">` Element:**

- Represents the volume control slider.
- Allows users to adjust the volume level using keyboard arrow keys.
- Uses ARIA attributes (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`) to ensure accessibility.

<hr class="margin-y-4" />

### Module Divider

The `<hr class="module__divider" aria-hidden="true">` element is used to visually separate different sections of the module.

- Provides a visual divider between different parts of the module.
- The `aria-hidden="true"` attribute is used here to hide the `<hr />` element from screen readers as it is intended for visual separation only and does not provide meaningful context for assistive technology users.

<hr class="margin-y-4" />

### Module Tools

The `<div class="module__tools">` element contains actions that users can interact with. It holds the table of contents, glossary highlighting, and NGSS annotation toggles.


**To see reading annotations, click [here](#reading-annotations).**

<hr class="margin-y-4" />

### Module Main

The `<div class="module__main">` element is the primary content area of the module.

**The `<div>` Element:**

- Holds the core information or functionality of the module.
- Can include text, images, videos, or other types of content.
- Should be populated dynamically based on data or user interactions.