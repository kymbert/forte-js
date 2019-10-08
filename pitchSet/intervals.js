// intervals.js

let intervals = {};

intervals.church = {
  ionian: [2, 2, 1, 2, 2, 2],
  dorian: [2, 1, 2, 2, 2, 1],
  phrygian: [1, 2, 2, 2, 1, 2],
  lydian: [2, 2, 2, 1, 2, 1],
  mixolydian: [2, 2, 1, 2, 2, 1],
  aeolean: [2, 1, 2, 2, 1, 2],
  locrean: [1, 2, 2, 1, 2, 2]
};

intervals.messiaen = {
  mode1: [2, 2, 2, 2, 2],
  mode2: [1, 2, 1, 2, 1, 2, 1],
  mode3: [2, 1, 1, 2, 1, 1, 2, 1],
  mode4: [1, 1, 3, 1, 1, 1, 3],
  mode5: [1, 4, 1, 1, 4],
  mode6: [2, 2, 1, 1, 2, 2, 1],
  mode7: [1, 1, 1, 2, 1, 1, 1, 1, 2]
};

intervals.pentatonic = {
  major: [2, 2, 3, 2],
  minor: [3, 2, 2, 3]
};

intervals.diatonic = intervals.church.ionian;
intervals.major = intervals.church.ionian;
intervals.minor = intervals.church.aeolean;
intervals.octotonic = intervals.messiaen.mode2;
intervals.wholeTone = intervals.messiaen.mode1;

module.exports = intervals;
