let id = document.getElementById("cardContainer");

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
            <h3 class="card-title">${contests[item].name}</h3>
            <p class="card-text">
            Participate in upcoming contests for valuable benefits and a chance to showcase your skills.
            </p>
            <p class="card-text fw-semibold"> START ON: ${contests[item].start_time} </p>
            <p class="card-text fw-semibold"> END ON: ${contests[item].end_time} </p>

            <a href="${contests[item].url}" target="_blank" class="btn btn-primary">Register Now</a>
          </div>
        </div>
      </div>
        `
    }
    id.innerHTML = ihtml;
});
