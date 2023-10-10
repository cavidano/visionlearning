---
layout: docs
title: Audio
---
				
The audio feature is an essential part of our platform, providing users with an auditory experience of our module readings and glossary term pronunciations.

<hr class="margin-y-4" />

## Module Audio

Whether you're on the go, visually impaired, or simply prefer an auditory experience, the audio player within our modules allows users to listen to the module readings.

{% capture fig_1 %}

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

{% endcapture %}

{% include code-example.html content=fig_1 %}

## Pronunciation

Visionlearning users can hear and familiarize themselves with the correct pronunciation of specific terms, adding depth to their learning experience.

### Button Only

The glossary term listing page includes an icon-only pronunciation button. Users can listen to the audio pronunciation of a term without navigating to its dedicated term page.

{% capture fig_2 %}

<!-- Button Icon Only -->

<button class="button button--icon-only">
    <span class="icon icon-volume"></span>
</button>

{% endcapture %}

{% include code-example.html content=fig_2 %}

### Button With Text

On specific glossary term pages, the pronunciation button not only provides an icon but also includes a clear label, making it intuitive for users to access the audio guide for the term's pronunciation.

{% capture fig_3 %}

<!-- Button with Text -->

<button class="button button--has-icon">
    <span class="icon icon-volume"></span>
    <span class="button__text">Pronunciation</span>
</button>

{% endcapture %}

{% include code-example.html content=fig_3 %}