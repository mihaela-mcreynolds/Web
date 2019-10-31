// JavaScript code for the survey at survey.html
/*  <meta name="author" content="Mihaela McReynolds">
    <meta name="description" content="Lab 5. Add a check to make sure all questions
    have been answered and all required text fields filled in. Your JS should display
    a warning message to the user if input is incorrect and should *not* process
    the form until the error is corrected. The warning/error messages should be
    clear, accurate, and specific. Half-credit will be given for general/vague/
    "catch-all" messages. Use JavaScript to create a Summary/report page once
    all input has been entered correctly and the user clicks the "Submit" button.
    This page should look nice and be consistent with the rest of your site (use
    bootstrap, css, etc. -- so not just a blank page with some text). The summary/report
    should contain a "Thank you" message utilizing the name the user entered on
    the survey page. The summary page should be a new page (not an "overwriting"
    of the survey page). How you implement this is up to you. It could be a modal,
    a new tab or window, etc. -- as long as a new page is being created. The
    summary/report should summarize the user's survey responses in some way that
    makes sense (this will vary depending on your page -- they're all different).
    Please note that you might need to make some changes to how you set up the
    survey page in order to make it work with JS processing.">
*/

// Variables

var name;
var value;
var totalValues;
var overall;
var employees;
var cars;

function isChecked() {
  var x = document.getElementById("myCheck").checked;
  document.getElementById("demo").innerHTML = x;
}

function getName() {
  name = document.getElementById("userName");
  console.log("Hello, ", name);
}
