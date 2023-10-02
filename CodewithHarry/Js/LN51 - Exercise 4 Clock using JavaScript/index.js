let id = document.getElementById("clk");

function digitalClock() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let ms = a.getMilliseconds();

  let timeString = `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
//   let timeString = `${padZero(h)}:${padZero(m)}:${padZero(s)}:${padZeroForMs(ms)}`;

  id.innerHTML = timeString;
}

function padZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// function padZeroForMs(num){
//     if(num < 100)
//     {
//         return "0" + num;
//     }
//     else{
//         return num;
//     }
// }

setInterval(digitalClock, 1000);
