// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  var Target = document.getElementById('currentDay');
  function clock () {
    var time = new date ();

    var month = time.month();
    var date = time.date();
    var day = time.day();
    var week = time.week['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = time.year['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var hours = time.hours();
    var minutes = time.minutes();
    
    Target.innerText = 
    `${year[month]}. ${date}. ${week[day]}. ` +
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  }
  clock();
  setInterval(clock, 1000);
  $(".saveBtn").on("click", function () {
    console.log(this);
    var scheduledEvent = $(this).siblings(".description").val();
    var scheduledTime = $(this).parent().attr("id");

    localStorage.setItem(scheduledTime, scheduledEvent);

  })
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  const dayjs = require("dayjs");
  
  function color() {
    var currentTime = dayjs().get('h');
  
    var hour9 = 9;
    var hour10 = 10;
    var hour11 = 11;
    var hour12 = 12;
    var hour13 = 13;
    var hour14 = 14;
    var hour15 = 15;
    var hour16 = 16;
    var hour17 = 17;

   

  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
