class RailwayForm {
  fill(givenName, trainNum) {
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

let harry = new RailwayForm();
let rohan = new RailwayForm();

harry.fill("Harry", 432789);
rohan.fill("Rohan", 554455);
harry.submit();
rohan.submit();
rohan.cancel();
