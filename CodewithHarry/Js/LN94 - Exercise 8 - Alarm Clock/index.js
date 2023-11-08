let clk = document.getElementById("clk");
let hourInput = document.getElementById("hourInput");
let minuteInput = document.getElementById("minuteInput");
let addAlarmButton = document.getElementById("addAlarmButton");
let alarmBox = document.getElementById("alarmBox");

function padZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
// Digital Clock
function digitalClock() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  let timeString = `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
  clk.innerHTML = timeString;
}
setInterval(digitalClock, 1000);

// Alarm array
let alarmArray = [];

// AddAlarm function
function addAlarm() {
  let hrs = hourInput.value;
  let mint = minuteInput.value;

  // empty the input box
  hourInput.value = "";
  minuteInput.value = "";

  if ((0 <= hrs && hrs <= 23) && (0 <= mint && mint <= 60)) {
    let hrsFormatted = padZero(hrs);
    let mintFormatted = padZero(mint);

    // padZero again if initial input value is empty
    if (hrsFormatted == "0") hrsFormatted = "00";
    if (mintFormatted == "0") mintFormatted = "00";

    let newAlarm = {
      hr: hrsFormatted,
      min: mintFormatted,
      checked: true
    };

    // push alarm into alarm array
    // alarmArray.push(`${newAlarm.hr}:${newAlarm.min}`);
    alarmArray.push(newAlarm);

    // remove "No Alarm" when adding a alarm
    if (alarmArray.length === 1) {
      const firstChild = alarmBox.querySelector("li");
      if (firstChild) {
        alarmBox.removeChild(firstChild);
      }
    }

    const listItem = document.createElement("li");
    listItem.className = "alarm";
    listItem.innerHTML = `
        <span>${newAlarm.hr}:${newAlarm.min}</span>
        <span class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        </span>
        <button type="button" class="btn btn-danger delete-alarm">Delete</button>
    `;

    // Set the data-checked attribute based on the checked status
    // listItem.setAttribute('data-checked', newAlarm.checked);

    listItem.setAttribute('data-checked', true);

// Add an event listener to the checkbox to update the data attribute
const checkbox = listItem.querySelector(".form-check-input");
checkbox.addEventListener("change", () => {
  listItem.setAttribute('data-checked', checkbox.checked);
});

    // Add an event listener to delete button
    const deleteButton = listItem.querySelector(".delete-alarm");
    deleteButton.addEventListener("click", () => {
      deleteAlarm(listItem, `${newAlarm.hr}:${newAlarm.min}`);
    });
    alarmBox.appendChild(listItem);
  }
}

// Function to delete an alarm
function deleteAlarm(listItem, alarmTime) {
  // Remove the alarm from the array
  const alarmIndex = alarmArray.indexOf(alarmTime);
  if (alarmIndex !== -1) {
    alarmArray.splice(alarmIndex, 1);
  }

  // Remove the list item from DOM
  listItem.remove();

  if (alarmArray.length === 0) {
    const listItem = document.createElement("li");
    listItem.className = "alarm";
    listItem.innerHTML = "No Alarm";
    alarmBox.appendChild(listItem);

  }

  // print resultant array on console
  console.log(alarmArray);
}

// AddAlarm button event
addAlarmButton.addEventListener("click", function (event) {
  event.preventDefault();
  addAlarm();
  console.log(alarmArray);
});

hourInput.addEventListener("keydown", function(event){
  if(event.key === "Enter")
  {
    addAlarm();
    console.log(alarmArray);
  }
})

minuteInput.addEventListener("keydown", function(event){
  if(event.key === "Enter")
  {
    addAlarm();
    console.log(alarmArray);
  }
})

// Create a fn to check and trigger alarms
function checkAlarms() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  alarmArray.forEach((alarm) => {
    const { hr: alarmHour, min: alarmMinute } = alarm;
    const checked = alarmBox.querySelector('[data-checked="true"]');

    // We use parseInt to convert these values to integers for accurate comparison.
    if (parseInt(alarmHour) == currentHour && parseInt(alarmMinute) == currentMinute && checked) {
      // Trigger the alarm sound
      play();
    }
  });
}

// call checkAlarms at each seconds
setInterval(() => {
  digitalClock();
  checkAlarms();
}, 1000);

function play() {
  let audio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  audio.play();
}
