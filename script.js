// Setting variables using moment.js & arrays
var today = moment();
const workHours = [
    "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
];

const currentHour = moment().hour();

// Updating header to reflect current day
$("#currentDay").text(today.format("MMM Do, YYYY"));


$(".save-Btn").on("click", function () {
    // Get description values
    var text = $(this).siblings(".type-block").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})

function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    // loop over time blocks
    $(".type-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        // Check time and add/remove classes for background colour
        if (blockTime < timeNow) {
            $(this).removeClass("Future");
            $(this).removeClass("Present");
            $(this).addClass("Past");
        }
        else if (blockTime == timeNow) {
            $(this).removeClass("Past");
            $(this).removeClass("Future");
            $(this).addClass("Present");
        }
        else {
            $(this).removeClass("Present");
            $(this).removeClass("Past");
            $(this).addClass("Future");
                   } console.log(blockTime);
    })
}

$(".save-Btn").on("click", function () {
    let buttonId = $(this).attr("data-id");
    let event = $('#type-block' + buttonId).val();
    let taskObj = JSON.parse(localStorage.getItem("task")) || [];
    taskObj.push({
      time: buttonId,
      description: event,
    });
    // add to local storage
    localStorage.setItem("task", JSON.stringify(taskObj));
  });
  
  // Load any data from local storage
  $(document).ready(function () {
    let savedTasks = JSON.parse(localStorage.getItem("task"));
    for (let i = 0; i < savedTasks.length; i++) {
      
      let updatedHour = savedTasks[i].time;
      let updatedText = savedTasks[i].description;
      $("#" + updatedHour).text(updatedText);
    }
  });

  $("#type-block1 .description").val(localStorage.getItem("type-block1"));
  $("#type-block2 .description").val(localStorage.getItem("type-block2"));
  $("#type-block3 .description").val(localStorage.getItem("type-block3"));
  $("#type-block4 .description").val(localStorage.getItem("type-block4"));
  $("#type-block5 .description").val(localStorage.getItem("type-block5"));
  $("#type-block6 .description").val(localStorage.getItem("type-block6"));
  $("#type-block7 .description").val(localStorage.getItem("type-block7"));
  $("#type-block8 .description").val(localStorage.getItem("type-block8"));
  $("#type-block9 .description").val(localStorage.getItem("type-block9"));
  
  timeTracker();

  
 