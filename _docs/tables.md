---
layout: docs
title: Tables
---
				
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorem minima cum, modi error ab hic iste expedita. Quam quasi fugit facere ad atque quidem minima, itaque dolor facilis?

<hr class="margin-y-4" />

## Tables in Modules

To render a table within a module, use the following code:

{% capture fig_1 %}

<div class="figure">
  <table class="table" aria-describedby="configDescription">

    <caption id="configDescription">
        <strong>Figure 1:</strong> Element Configuration Shorthand
    </caption>

    <thead>
      <tr>
        <th scope="col">Element</th>
        <th scope="col">Symbol</th>
        <th scope="col">Configuration Shorthand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">Hydrogen</td>
        <td>H</td>
        <td>1e-</td>
      </tr>
      <tr>
        <td scope="row">Lithium</td>
        <td>Li</td>
        <td>2e-</td>
      </tr>
      <tr>
        <td scope="row">Fluorine</td>
        <td>F</td>
        <td>2e- 7e-</td>
      </tr>
      <tr>
        <td scope="row">Sodium</td>
        <td>Na</td>
        <td>2e- 8e- 1e-</td>
      </tr>
    </tbody>
  </table>
</div>

{% endcapture %}

{% include code-example.html content=fig_1 %}
