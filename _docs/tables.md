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


---


<div class="figure">
    <table class="table">
        <caption>Presence of subshells and maximum electron capacity for electron shells</caption>
        <thead>
            <tr>
                <th scope="col">Electron shell</th>
                <th scope="col">Presence of an s-subshell?</th>
                <th scope="col">Presence of a p-subshell?</th>
                <th scope="col">Presence of a d-subshell?</th>
                <th scope="col">Maximum electron capacity for shell</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1<sup>st</sup> electron shell</td>
                <td style="background-color: var(--light-green)">Yes (up to 2 electrons)</td>
                <td style="background-color: var(--light-red)">No (0 electrons)</td>
                <td style="background-color: var(--light-red)">No (0 electrons)</td>
                <td>2 electrons total (2+0)</td>
            </tr>
            <tr>
                <td>2<sup>nd</sup> electron shell</td>
                <td style="background-color: var(--light-green)">Yes (up to 2 electrons)</td>
                <td style="background-color: var(--light-green)">Yes (up to 6 electrons)</td>
                <td style="background-color: var(--light-red)">No (0 electrons)</td>
                <td>8 electrons total (2+6)</td>
            </tr>
            <tr>
                <td>3<sup>rd</sup> electron shell</td>
                <td style="background-color: var(--light-green)">Yes (up to 2 electrons)</td>
                <td style="background-color: var(--light-green)">Yes (up to 6 electrons)</td>
                <td style="background-color: var(--light-green)">Yes (up to 10 electrons)</td>
                <td>18 electrons total (2+6+10)</td>
            </tr>
        </tbody>
    </table>
</div>
