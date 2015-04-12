# Progress-Bar

This project is to generate progress bars based on the following behaviours using RactiveJS framework.

    Behaviours
        Multiple bars
        One set of controls that can control each bar on the fly
        Can't go under 0
        Can go over 100, but limit the bar itself and change its colour
        Display usage amount, centered

## How to Use

Best way to run this is to download the project as a ZIP file and run the two following files.  One that runs the progress bar demo, and one that runs the progress bar demo and the javascript functions to test in QUINT.

* To run this progress bar demo run the file: index.html
* To run the testing for this demo, run the file: test-progress-action-qunit.html

Also at the bottom of this README is a link to one of my testing site that I have uploaded this project to for a demo.

## Testing

Testing is done via qunit https://qunitjs.com/.  This was used to build the javascript functions based around the above behaviours using TDD.
These tests can be run by running the file test-progress-action-qunit.html

This project includes the following files to testing the javascript functions located within it:

* test.js
* test-progress-action-qunit.html

## Responsive Design and Styling

The Responsive code makes use of media queries to break the column layout at max-width: 767px.  At this point the progress bars, select box, and button text is expanded to enhance viewability of the elements in a mobile view.  The progress bars height is also increased.  Tablets view utilizes the desktop view, this works fine as the columned layout enforces the element to remain in the centre of the screen for Desktops and Tablets.

The Progress Bars are colored using the Optus colors.  \#178093 is used for the bar itself, #ffd100 is used for the fill color, and #ff0000 is used for a full bar color (greater than or equal to 100%).  The bars are also styled with round borders for a more modern look.

The control buttons and select box have been styled with CSS to make them look more modern.  Also all buttons that increase the progress bars are colored #1CB841 and the buttons that decrease the progress bars are colored #CA3C3C.

## Animations

The progress bars are animated with the RactiveJS Frameworks .animate()  The bars will animate between 0% and 100%.  Animations occur on the increase and decrease of the progress bars usage.

## Linting

The CSS files have been run through a linting program to verify the validity of the CSS stylesheets.  The JavaScript files have
also been run through a linting program to verify the validity of the Javascript code.

## Minification

The minified and full version of the Javascript and CSS files are located in this package.  The minified versions of the JS and
CSS files are used in the index.html and test-progress-action-qunit.html files. The following three files have all been
minified:

| Full File  | Minified File |
| ------------- | ------------- |
| progress-style.css  | progress-style.min.css  |
| progress-action.js  | progress-action.min.js  |
| tests.js  | tests.min.js  |

## Demo
There is a demo version of this running on one of my test domains:
* http://www.sigilonline.com/progress-bar/index.html
* http://www.sigilonline.com/progress-bar/test-progress-action-qunit.html
