

/**
 * withIntervalSet - description
 *
 * @param   {int}   root        First pitch of the set to be generated.
 * @param   {array} intervalSet Intervals describing the pitch-class set.
 * @returns {array}             Pitch set fufilling the interval set for
 *                              exactly one iteration.
 */
function withIntervalSet(root, intervalSet) {
  let pitchSet = [root];
  let pitch = root;
  intervalSet.forEach(interval => {
    pitch += interval;
    pitchSet.push(pitch);
  });
  return pitchSet;
};

/**
 * withIntervalSetRepeated - description
 *
 * Special note: this method will start each iteration at an octave interval
 * of the root.
 *
 * @param   {int}   root        First pitch of the set to be generated.
 * @param   {array} intervalSet Intervals describing the pitch-class set.
 * @param   {int}   repetitions Number of iterations through the interval set
 *                              to repeat.
 * @returns {array}             Pitch set fufilling the interval set for
 *                              the specified number of iterations.
 */
function withIntervalSetRepeated(root, intervalSet, repetitions) {
  let pitchSet = withIntervalSet(root, intervalSet);
  for (let i = 1; i < repetitions; i++) {
    let newRoot = root + (12 * i);
    let newPitchSet = withIntervalSet(newRoot, intervalSet);
    newPitchSet.forEach(pitch => {
      pitchSet.push(pitch);
    });
  }
  return pitchSet;
}

// function withIntervalsRepeated(root, pattern) {
//   let pitchSet = [root];
//   let pitch = root;
//   while ((pitch - root) % 12 != 0) {
//
//   }
// }

module.exports = {
  withIntervalSet: withIntervalSet,
  withIntervalSetRepeated: withIntervalSetRepeated
};
