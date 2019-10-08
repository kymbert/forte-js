Number.prototype.toFreq = function(a4 = 440) {
  return a4 * Math.pow(2, (this - 69)/12);
}

Number.prototype.toPitchClass = function() {
  return this % 12;
}
