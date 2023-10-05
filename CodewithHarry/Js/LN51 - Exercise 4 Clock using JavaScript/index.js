let id = document.getElementById("clk");

function digitalClock() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();

  let timeString = `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
  id.innerHTML = timeString;
}

function padZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

setInterval(digitalClock, 1000);
