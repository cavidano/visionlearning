---
layout: docs
title: Audio
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima.


<hr class="margin-y-4" />

## Module Audio

Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima.

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

{% include example-with-code.html content=fig_1 %}

## Pronunciation
To style a quote specifically for use within the module introduction, add the blockquote class to the `<blockquote>` element.

### Button Only

I got to return the pronunciation button only is used on the glossary landing page term list view.

{% capture fig_2 %}

<!-- Button Icon Only -->

<button class="button button--icon-only">
    <span class="icon icon-volume"></span>
</button>

{% endcapture %}

{% include example-with-code.html content=fig_2 %}

### Button With Text

I got to return the pronunciation button only is used on the glossary landing page term list view.

{% capture fig_3 %}

<!-- Button with Text -->

<button class="button button--has-icon">
    <span class="icon icon-volume"></span>
    <span class="button__text">Pronunciation</span>
</button>

{% endcapture %}

{% include example-with-code.html content=fig_3 %}