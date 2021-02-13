$(document).ready(function() {
    // save button for text inputted
    $(".saveBtn").on("click", function() {
    // grab my values for time and text
    var value = $(this).siblings(".textInput").val();
    var time = $(this).parent().attr("id");

    // saved to local storage 
    localStorage.setItem(time, value)
    console.log(time)
    })

    // current day
    var currentDay = new Date();
    $("#currentDay").text(currentDay)
    console.log(currentDay)

    // write a function to update the hours in the time blocks
    // get current time use moment

    // looping over time blocks hint: (look up .each or .foreach)
   // adding function to show the past, future and current time

    function presentTime() {
       var currentHour = moment().hour();
       console.log(currentHour)
       $(".row").each(function() {
           var hourBlock = $(this).attr("id");
           console.log(hourBlock)

        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (hourBlock === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
      });
    }
    presentTime();
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





});
