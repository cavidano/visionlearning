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