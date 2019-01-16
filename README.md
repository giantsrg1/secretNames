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
* _package.json_ : Where the site dependencies live
* _gulpfile.js_ : Task manager for development workflow

## How to Run

1. Clone Github
2. Install Node
3. ```> cd [into folder]```
3. ```> npm```
4. ```> node_modules\.bin\gulp```.
5. ```> npm start``` (this will run the server)
6. go to localhost:8111

### Author

Scott Goldstein

goldstein.scott.nj@gmail.com
