# ExPack 
ExPack is a library that lets you customize everything, being easy to use and able to adjust based on your needs!

ExPack was programmed in Visual Studio Code.

## Importing ExPack
For the CSS code, put the code below in your HTML <head> tag:
```html
<link href="https://cdn.jsdelivr.net/npm/expack_library@0.0.3/dist/css/expack.min.css" integrity="sha384-U0hBMi0zODQoZGlzdC9jc3MvZXhwYWNrLm1pbi5jc3MpPSBkNTY3NDBhY2IzZTMzYjVjMmRmYzgyMmRhYTVlNzU4MGI0NDE0ODM1ZTBhMjA1ODkzYzU0M2UzMmJmMTgxZjAxNDg5NTU5ODA5NjQxZGNjYzE5OWNlMTE4ZWQ2MGI1ODUNCg==" crossorigin="anonymous"/>
```
For the JavaScript code, at the bottom of your **<body>** tag put the code below:
```html
<script src="https://cdn.jsdelivr.net/npm/expack_library@0.0.3/dist/js/expack.min.js" integrity="sha384-U0hBMi0zODQoZGlzdC9qcy9leHBhY2subWluLmpzKT0gYWU2MWE1NzkyMzA4NDIzNzg4OWY3MWJlYTZkYTMxNmY0ZjA1NjkwNDQyYTI2NGYzNWQ3MDgzODFjODhkOWVlODA3MjY5MjhiNzY4NjFlMmI1Mjk5ZjJhZTJiNjNiYmIyDQo=" crossorigin="anonymous"></script>
```

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
## Others
- [ x ]  Add to a CDN

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

> [!NOTICE]
> Since 16/09/2024, devolpment of Expack v0.0.3, Expack has switched from using Webpack to Rollup


- Rollup
- Sass
- Babel
    - babel-loader
    - @babel/core
    - @babel/preset-env

All *npm* installs are localed in the **node_module** directory.

## Recommendations
To properly run this, please make sure you install [SASS](https://sass-lang.com/install/). The starting system for ExPack was using `npm install -g sass`.
## Compiling SASS
~~Originally (before having sass installed globally), the SASS (`.scss` files) was compiled using [json2csharp.com](https://json2csharp.com/css-tools/sass-to-css); so if you'd like you can use that.

As of September 4th, 2024, the original repository is being compiled by running (in the ExPack directory): `sass src/scss/global.scss dist/css/dist_global.css`.~~
As of September 16th, 2024, the original repository is being compiled at the same time as the js; by running `npm run build`.

## Compiling JS
With the addition of webpack (added September 7th, 2024), to bundle and minimize the javascript code you should run: `npm run build`. For more info look at the [rollup config](/rollup.config.js) file.

# For Support
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white): teamexpack@gmail.com

