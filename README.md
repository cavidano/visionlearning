# Natura11y Inclusive Framework

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus malesuada tortor, sed euismod mi malesuada a. Proin eros libero, efficitur eget tempor id, dapibus et ligula.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

`fantasticon ./svg -o ../../dist/icons`
`bundle exec jekyll serve`

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Steps to Make Icons

1.) Save SVG to *original-svg* dir

2.) Run saved icons through svgo:

`svgo -f ./src/icons/original-svg -o ./src/icons/optimized-svg`

3.) Run fantasticon

`fantasticon ./src/icons/optimized-svg -o ./dist/icons`