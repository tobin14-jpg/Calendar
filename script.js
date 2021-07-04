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
const militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; 
const currentHour = moment().hour();

// Updating header to reflect current day
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Creating rows for each array element
for (i = 0; i < workHours.length; i++) {
    let row = $('.row');
    let timeHour = $('.hour col-1').text(workHours[i]);
    let timeBlock = $('.type-block col-10').attr("id", i);

// if else statement for setting past, present & future
    if (currentHour === militaryHours[i]) {
        timeBlock.addClass("Present");
    } else if (currentHour > militaryHours[i]) {
        timeBlock.addClass("Future");
    } else (currentHour < militaryHours[i]) 
        timeBlock.addClass("Past");
    

    let saveIcon = $('.save-Btn col-1');
    let saveBtn = $('.fa-solid fa-floppy-disk').attr(".data-id", i).append(saveIcon);

    row.append(row, timeHour, timeBlock, saveBtn);
    
    // Append elements of the rows to the page
    $(".container").append(row);

}


$(".save-Btn").on("click", function () {
    let buttonId = $(this).attr("data-id");
    let event = $("type-block" + buttonId).val();
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
      //console.log(savedTasks[i].time);
      let updatedHour = savedTasks[i].time;
      let updatedText = savedTasks[i].description;
      $("#" + updatedHour).text(updatedText);
    }
  });
