# Visionlearning

This is the front end development stack for the 2023 Visionlearning redesign.

## Getting Started

`bundle exec jekyll serve`

http://127.0.0.1:4001

## Steps to Make Icons

1.) Save SVG to *original-svg* dir

2.) Run saved icons through svgo:

`svgo -f ./src/icons/original-svg -o ./src/icons/optimized-svg`

3.) Run fantasticon (from ./src/icons)

`fantasticon ./optimized-svg -o ../../dist/icons`
