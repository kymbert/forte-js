require('./pitch')

class PitchClassSet {
  constructor(params) {
    let pitchSet = [];
    switch (params.from) {
      case "intervalSuccession":
        let pitch = 0;
        pitchSet.push(pitch);
        params.array.forEach(interval => {
          pitch = (pitch + interval).toPitchClass();
          pitchSet.push(pitch);
        });
        break;
      case "pitches":
        params.array.forEach(pitch => {
          pitchSet.push(pitch.toPitchClass());
        });
        break;
      default:
        pitchSet = [];
    }
    this.pcSet = pitchSet;
  }
}

module.exports = {
  PitchClassSet: PitchClassSet
}
