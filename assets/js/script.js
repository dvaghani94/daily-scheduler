$(document).ready(function() {
    // check for button clicks inside an on click
    $(".saveBtn").on("click", function() {
    // grab my values for time and text
    var value = document.querySelector(".textInput")
    var time = today.getHours();

    // save them to local storage 
    localStorage.setItem(time, value)
    })

    // write a function to update the hours in the time blocks
    // get current time use moment
    var currentTime = new Date();
    $("#currentDay").text(currentTime)
    console.log(currentTime)

    // loop over out time blocks hint: (look up .each or .foreach)

    // check to see if we have moved past the current time

    // if
    // addclass 
    // addclass ("past")

    // check to see if it is the current time 
    // else if
    // remove class (past)
    // add class (future)

    // check to see if time is future
    // else
    // remove class (past)
    // remove class (present)
    // add class (future)

    //load any saved data from local storage 

    // display current day on page (check in html "current day") use moment 







});
