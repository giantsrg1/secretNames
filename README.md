## Interview Exam Instructions

API URL: ​https://private-f3b4b-interview2.apiary-mock.com/data 

Use: Bootstrap, Jquery, SCSS, HTML 
 
### Tasks: 
 
* Either set up a web server to handle this or do it entirely front end.  Up to you. 
* Create a page that matches the attached screenshots for desktop size and mobile sized devices using responsive css (values in image may differ from data in api response) 
* Match the styling as close as possible.  Default fonts were used. 
* Format the "timestamp" property to match m/d/yyyy 
* The rows should be ordered chronologically, oldest first. 
* When a row is clicked, have the "secret" property be shown in the input at the top of the screen 
* Change the background color to the value of the "secret" 
* When the "clear" button is clicked, reset the input. 


## About Files

* _public_ : main folder where code lives
* _public/dist_ : minimized CSS and JS
* _public/views_ : main Scss and JS files
* _server.js_ : Node/Express Server to host webpage
* _gulpfile.js_ : Task manager for development workflow

## How to Run

1. Clone Github
2. Make sure you have npm and node installed
3. global install Bower (for css classes) and Gulp (if you want to see the gulpfile run)
4. ```> npm install```
5. ```> bower install```
6. if gulp is installed, run ```> gulp```.
7. ```> npm start``` (this will run the server)
8. go to localhost:8080

### Author

Scott Goldstein

goldstein.scott.nj@gmail.com
