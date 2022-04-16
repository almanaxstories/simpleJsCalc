# simpleJsCalc

Hi. This is my first test project with javascript, html and css. It's a simple html-form application with two html-inputs which accepts 
only two finite numbers and adds them. Result of calculation is putted into .textContent property of dynamicaly generated div with id "result".
 
App includes decimal.js module of arbitrary precision decimal arithmetic by MikeMCL(https://github.com/MikeMcl/decimal.js/) and provides
the operations of checking input values for not being  NaN, Infinity or String type. If input data in each input elements is incorrect
user gets an error div with  "error-message" class below the corresponding input.

App bundle builded with Webpack and includes EsLint  with Airbnb rules and Prettier plugins.

TO start the app you should:

1) initialize npm locally with bash: npm init -y
2) build standart and development npm dependencies with: npm install webpack webpack-cli --save-dev
3) build the app with: npx webpack
4) run the build with: npm run build
5) start app with opening index.html in simpleCalculator/dist/index.html
