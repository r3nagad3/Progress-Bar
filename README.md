# Progress-Bar

This project is to generate progress bars based on the following behaviours using RactiveJS framework.

    Behaviours
        Multiple bars
        One set of controls that can control each bar on the fly
        Can't go under 0
        Can go over 100, but limit the bar itself and change its colour
        Display usage amount, centered

## Testing

Testing is done via qunit https://qunitjs.com/.  This was used to build the javascript functions based around the above behaviours using TDD.
These tests can be run by running the file test-progress-action-qunit.html

This project includes the following files to testing the javascript functions located within it:

* test.js
* test-progress-action-qunit.html

## Responsive Design and Styling

The Progress Bars are colored using the Optus colors

## Linting

The CSS files have been run through a linting program to verify the validity of the CSS stylesheets.  The JavaScript files have
also been run through a linting program to verify the validity of the Javascript code.

## Minfication

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
