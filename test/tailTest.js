const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it ("should return 3 for length of original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it ("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  })

  it("should return empty array for [1]", () => {
    assert.deepEqual(tail([1]), []);
  })

  it ("should return empty array for []", () => {
    assert.deepEqual(tail([]), []);
  })
});
