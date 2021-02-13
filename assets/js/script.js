$(document).ready(function() {
    // check for button clicks inside an on click
    $(".saveBtn").on("click", function() {
    // grab my values for time and text
    var value = $(this).siblings(".textInput").val();
    var time = $(this).attr("id");

    // save them to local storage 
    localStorage.setItem(time, value)
    })

    // write a function to update the hours in the time blocks
    // get current time use moment


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

    $("#hour-9.textInput").val(localStorage.getItem("hour-9"));
    $("#hour-10.textInput").val(localStorage.getItem("hour-10")); 
    $("#hour-11.textInput").val(localStorage.getItem("hour-11"));
    $("#hour-12.textInput").val(localStorage.getItem("hour-12"));
    $("#hour-13.textInput").val(localStorage.getItem("hour-13"));
    $("#hour-14.textInput").val(localStorage.getItem("hour-14"));
    $("#hour-15.textInput").val(localStorage.getItem("hour-15"));
    $("#hour-16.textInput").val(localStorage.getItem("hour-16"));
    $("#hour-17.textInput").val(localStorage.getItem("hour-17"));
    $("#hour-18.textInput").val(localStorage.getItem("hour-18"));
    $("#hour-19.textInput").val(localStorage.getItem("hour-19"));
    $("#hour-20.textInput").val(localStorage.getItem("hour-20"));


    // display current day on page (check in html "current day") use moment 

    var currentTime = moment();
    $("#currentDay").text(currentTime)
    console.log(currentTime)





});
