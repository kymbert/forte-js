const assert = require('assert');
const { PitchClassSet } = require ('../../src/models/pitchClassSet');

describe('PitchClassSet', function() {
  it('constructor - from interval succession', function() {
    let pitchClassSet = new PitchClassSet({
      from: "intervalSuccession",
      array: [1, 2, 3, 4]
    });
    assert.deepEqual(pitchClassSet.pcSet, [0, 1, 3, 6, 10]);
  });

  it('constructor - from interval succession, pitches transposed', function () {
    let pitchClassSet = new PitchClassSet({
      from: 'intervalSuccession',
      array: [4, 4, 4, 4]
    });
    assert.deepEqual(pitchClassSet.pcSet, [0, 4, 8, 0, 4]);
  });

  it('constructor - from pitches', function() {
    let pitchClassSet = new PitchClassSet({
      from: "pitches",
      array: [4, 6, 3, 4]
    });
    assert.deepEqual(pitchClassSet.pcSet, [4, 6, 3, 4]);
  });

  it('constructor - from pitches, pitches transposed', function() {
    let pitchClassSet = new PitchClassSet({
      from: 'pitches',
      array: [60, 62, 64, 65]
    });
    assert.deepEqual(pitchClassSet.pcSet, [0, 2, 4, 5]);
  })

});
