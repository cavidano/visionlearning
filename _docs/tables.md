---
layout: docs
title: Tables
toc: true
---

* TOC
{:toc .doc-toc}

This section introduces the use of tables in Vision Learning. It provides details on how to create accessible, structured tables for presenting data. The examples below demonstrate proper use of table elements such as captions, headers, and accessible attributes.

<hr class="margin-y-4" />

## Basic Table

Below is a basic example table demonstrating how to structure and display tabular data in Visionlearning.

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

<hr class="margin-y-4" />

### Table Elements

In-module tables consist of several key elements:

**The `<table class="table">` Element:**

- The `aria-describedby` attribute associates the table with it's caption, ensuring accessibility for screen readers.

**The `<caption>` Element:**

All tables should include a caption element to provide context for the data presented.

- Describes the table for users and screen readers.
- In this example, the caption is:  
  `<strong>Figure 1:</strong> Element Configuration Shorthand`.

**The `<thead>` and `<tbody>` Elements:**

- `<thead>`: Contains the table headers, defining the columns with `<th>` elements.
- `<tbody>`: Contains the main content of the table, using `<tr>` for rows and `<td>` for individual data cells.

**The `<th scope="col">` Element:**

- Used for column headers, providing scope with `scope="col"`. This ensures screen readers can understand that these headers apply to entire columns.

**The `<td scope="row">` Element:**

- Sets the scope of individual data cells to their respective rows, using `scope="row"`, enhancing accessibility for screen readers.

<hr class="margin-y-4" />

## Enhanced Table Example

In the next example, we demonstrate how to use more advanced table features, such as cell background colors, to represent complex data visually.

{% capture fig_2 %}

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

{% endcapture %}

{% include code-example.html content=fig_2 %}

<hr class="margin-y-4" />

### Code Breakdown

This table includes additional design features such as background color to represent data more visually.

**The `<td style="background-color: ...">` Attribute:**

- This attribute applies background color to specific table cells, providing visual cues to users. 
- For instance, cells containing "Yes" for subshell presence use the green background to signal positive presence, while "No" is marked with a red background.

**The `<caption>` Element:**

- Provides context for the data in the table, ensuring clarity for users and accessibility compliance.
  
<hr class="margin-y-4" />

## Conclusion

Tables in Vision Learning allow for clear data presentation with built-in accessibility features. Proper use of captions, headers, and ARIA attributes ensures tables are easy to navigate and understand for all users.

