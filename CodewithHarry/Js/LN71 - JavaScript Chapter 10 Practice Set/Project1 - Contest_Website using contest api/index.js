let id = document.getElementById("cardContainer");

function formatDateTime(inputDateTime) {
  const dateTime = new Date(inputDateTime);
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1; // Months are zero-indexed, so add 1
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours from 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12; // Handle midnight (0) as 12 AM

  // Ensure that single-digit day, month, and minutes have leading zeros
  const formattedDay = (day < 10) ? `0${day}` : day;
  const formattedMonth = (month < 10) ? `0${month}` : month;
  const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;

  return `${formattedDay}-${formattedMonth}-${year}, ${formattedHours}:${formattedMinutes} ${ampm}`;
}

const semiBoldText = ()=>{
  
}

let url = "https://kontests.net/api/v1/all";
let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    ihtml = ""
    for(item in contests)
    {
        console.log(contests[item]);
        ihtml += `
        <div class="col">
        <div class="card text-bg-warning mb-3">
          <div class="card-header" >
        <h3><span class="badge text-bg-danger">${contests[item].site}</span></h3>
          </div>
          <div class="card-body">
            <h4 class="card-title">${contests[item].name}</h4>
            <p class="card-text">
            </p>
            <p class="card-text">Start on:<span class="fw-semibold"> ${formatDateTime(contests[item].start_time)}</span>  </p>
            <p class="card-text">End on: <span class="fw-semibold"> ${formatDateTime(contests[item].end_time)}</span>  </p>

            <a href="${contests[item].url}" target="_blank" class="btn btn-primary">Register Now</a>
          </div>
        </div>
      </div>
        `
    }
    id.innerHTML = ihtml;
});
