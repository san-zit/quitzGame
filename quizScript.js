// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const data = urlParams.get("name");

// //alert(data);

// // Fill the received data into the textbox
// if (data) {
//   //   document.getElementById("receivedName").value = data;
//   document.getElementById("receivedName").innerHTML = data.toString;
// }
// const printMe = () => console.log("you have time");
// //const printMe="hello";
// const id = setInterval(printMe, 1000);

// const stopInterval = () => {
//   console.log("time is up");
//   clearInterval(id);
// };

// setTimeout(stopInterval, 30000);

// let countdown;
// const timerDisplay = document.getElementById("timer");
// const startButton = document.getElementById("startTime");

// function startCountdown() {
//   let seconds = 30;

//   countdown = setInterval(function () {
//     if (seconds <= 0) {
//       clearInterval(countdown);
//       timerDisplay.textContent = "Times up!";
//       startButton.disabled = false;
//     } else {
//       timerDisplay.textContent = seconds;
//       seconds--;
//     }
//   }, 1000);
//   startButton.disabled = true;
// }
// startButton.addEventListener("click", startCountdown);
