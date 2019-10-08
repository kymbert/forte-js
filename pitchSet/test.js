const Intervals = require('./intervals')
const generatePitchSet = require("./pitchSetGenerator");

let myScale = generatePitchSet.withIntervalSetRepeated(
  20,
  Intervals.pentatonic.major,
  4
);
console.log(myScale);

let myToneRow = [ 5, 7, 6, 4, 3, 6, 5 ];
let myMotive = () => {
  let motive = [];
  myToneRow.forEach(scaleDegree => {
    motive.push(myScale[scaleDegree]);
  })
  return motive;
}
console.log(myMotive());
