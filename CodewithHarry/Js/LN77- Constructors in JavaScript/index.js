class RailwayForm {
  constructor(givenName, trainNum) {
    console.log("CONSTRUCTOR CALLED BABY");
    this.name = givenName;
    this.trainNo = trainNum;
  }
  submit() {
    console.log(this.name + " form submitted, TrainNo :", this.trainNo);
  }
  cancel() {
    console.log(this.name + " form is cancelled, TrainNo :", this.trainNo);
  }
}

let harry = new RailwayForm("Harry", 432789);
let rohan = new RailwayForm("Rohan", 554455);

harry.submit();
rohan.submit();
rohan.cancel();
