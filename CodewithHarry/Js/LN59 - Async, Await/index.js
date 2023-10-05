// if we add async keyword then pakka ho jata h ki ye promise return kr rha h

async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degree");
    }, 2000);
  });

  let aligarhWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("245 degree");
    }, 7000);
  });

  //   delhiWeather.then(alert);
  //   aligarhWeather.then(alert);

  // wait until promise fullfilled

  console.log("Fetching delhi weather Please wait...");
  let delhiW = await delhiWeather;
  console.log("Fetched delhi weather: " + delhiW);

  console.log("Fetching aligarh weather Please wait...");
  let aligarhW = await aligarhWeather;
  console.log("Fetched aligarh weather: " + aligarhW);

  return [delhiW, aligarhW];
}

const cherry = async () => {
  console.log("Hey i am cherry and i am not waiting babua");
};

// console.log("Welcome to weather control room");

// let a = harry();
// let b = cherry();

// a.then((value) => {
//   console.log(value);
// });

const main1 = async () => {
  console.log("Welcome to weather control room");
  let a = await harry();
  let b = await cherry();
};
main1();
