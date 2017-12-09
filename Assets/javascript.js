console.log("I'm Working!") //veify that this is connected to the .html index file

// Section below identifies the logic for the Timer functionality
var number = 60;
var intervalId;
var isRunning = false;

  function run() {
      if(isRunning === false)
      {
      intervalId = setInterval(decrement, 1000);
      isRunning = true;
      }   
    }

  function decrement() {
      number--;
      $("#show-number").html("<h3>" + "Time remaining: " + number + "</h3");
      if (number === 0) {
        stop();
        alert("Time is up! Please refresh page and select 'Done' when complete.");
        }
    }

  function stop() {
      isRunning = false;
      clearInterval(intervalId);
    }

    run();

//Logic below when selecting the correct answer to each question

var userScore = 0;

//Question 1 logic below

$("#q1Answer2").click(function() {
    userScore++;
    console.log("New userScore = " + userScore);
});

//Question 2 logic below
$("#q2Answer2").click(function() {
    userScore++;
    console.log("New userScore = " + userScore);
});

//Question 3 logic below
$("#q3Answer4").click(function() {
    userScore++;
    console.log("New userScore = " + userScore);
});

//Question 4 logic below
$("#q4Answer3").click(function() {
    userScore++;
    console.log("New userScore = " + userScore);
});

//Question 5 logic below
$("#q5Answer4").click(function() {
    userScore++;
    console.log("New userScore = " + userScore);
});

//Done button logic below
$("#done").click(function() {
    console.log("Stopped Timer!!");
    stop();
    $(".container").html("<h3>" + " Total Correct: " + userScore + "  Total Incorrect: " + (5 - userScore) + "</h3>")
});


