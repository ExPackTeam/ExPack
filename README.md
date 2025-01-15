[![Build Status](https://app.travis-ci.com/ExPackTeam/ExPack.svg?token=xrPDXF4yoHp1uqKHg9XJ&branch=master)](https://app.travis-ci.com/ExPackTeam/ExPack) [![NPM Version](https://badge.fury.io/js/esta.svg?style=flat)](https://npmjs.org/package/esta) 
# ExPack 
ExPack is a library that lets you customize everything, being easy to use and able to adjust based on your needs!

ExPack was programmed in Visual Studio Code.

## Libraries
ExPack wouldn't be possibly without a few libraries that are accessed (these are all as of 17 December 2024).
### NPM
NPM is used for both distributing and building ExPack. 
### jQuery
The jQuery Javascript Library is used for the Javascript side of ExPack.

By using jQuery it makes it easier to do things like accessing classes. If a file uses `$()` at all, that means jQuery is used.

If you want to start contributing to ExPack, you can learn the formatting of jQuery from the [jQuery site](https://api.jquery.com).
### Rollup
ExPack uses a few of the rollup plugins, this is what makes it possible to build ExPack.

By running `npm run build` in the console, because of the way that the [package.json](https://github.com/ExPackTeam/ExPack/blob/master/package.json) file is set up, the command `rollup --config` is ran as well.

## Importing ExPack
For the CSS code, put the code below in your HTML **<head>** tag:
For the JavaScript code, at the bottom of your **<body>** tag put the code below:

It is also recommended to include jQuery as well.

## Languages
### Programmed With
ExPack was made with the following Coding Languages
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
### Externally Used
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

# To-Do
## Code
- [ ]  Have javascript modify margins
- [ ]  Built in Python support
- [ ]  Badges SCSS (may use javascript)
- [ ]  Have JavaScript search for fonts.
## Others
- [x]  Add to a CDN

# Installs
## To Have Installed
### Languages
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
### Software
#### For Programming
- [Atom](https://github.com/Atom) ![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white) **Not recommended, archived IDE**
- [Visual Studio Code](https://code.visualstudio.com/download) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) **Recommended**
- [Visual Studio](https://visualstudio.microsoft.com/downloads/) ![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white)

> [!IMPORTANT]
> Use which ever IDE you'd like, these are just the ones that the original [owner](https://github.com/MicroRay620) used to make ExPack.
> If your IDE doesn't have Git support, run the Git Back terminal and then do the git commands there

### NPM
- ~~Webpack~~
    - ~~Terser Webpack Plugin~~

> [!IMPORTANT]
> Since 16/09/2024, devolpment of Expack v0.0.3, Expack has switched from using Webpack to Rollup


- Rollup
- Sass
- Babel
    - babel-loader
    - @babel/core
    - @babel/preset-env
- jQuery

#### Import String
After you cloned ExPack and entered the file, you can enter the code below to auto import everything
```bash
npm i jquery @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-babel @rollup/plugin-terser rollup-plugin-postcss babel-loader @babel/core @babel/preset-env --save-dev
```

## Recommendations
To properly run this, please make sure you install [SASS](https://sass-lang.com/install/). The starting system for ExPack was using `npm install -g sass`.
## Compiling SASS
As of September 16th, 2024, the original repository is being compiled at the same time as the js; by running `npm run build`.

## Compiling JS
With the addition of webpack (added September 7th, 2024), to bundle and minimize the javascript code you should run: `npm run build`. For more info look at the [rollup config](/rollup.config.js) file.

# For Support
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white): teamexpack@gmail.com

# Security
To test the ExPack library security, [snyk.io](https://app.snyk.io/) is used.

# Other ExPack Projects
- [Ruby Gem](https://github.com/ExPackTeam/expack_gem) 
- 
