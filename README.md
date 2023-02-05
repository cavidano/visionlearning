# Visionlearning

This is the front end development stack for the 2023 Visionlearning redesign.

## Getting Started

`bundle exec jekyll serve`

## Steps to Make Icons

1.) Save SVG to *original-svg* dir

2.) Run saved icons through svgo:

`svgo -f ./src/icons/original-svg -o ./src/icons/optimized-svg`

3.) Run fantasticon (from ./src/icons)

`fantasticon ./svg -o ../../dist/icons`