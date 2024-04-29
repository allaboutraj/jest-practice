const mathOperations = require("../calculator");

describe("Calculator Tests", () => {
  //Positive Test Case
  test("Adding 1 + 2 should retun 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
    expect(mathOperations.sum(1, 2)).not.toBe(4);

    //toBe ->Expected output
    //expect() -> actual output
  });

  //   //Negative Test Case for sum
  //   test("Adding 1 + 2 should not retun 4", () => {
  //     expect(mathOperations.sum(1, 2)).not.toBe(4);

  //     //toBe ->Expected output
  //     //expect() -> actual output
  //   });

  //Positive Test Case for Diff
  test("Adding 2 - 1 should retun 1", () => {
    expect(mathOperations.diff(2, 1)).toBe(1);
    expect(mathOperations.diff(3, 1)).not.toBe(1);

    //toBe ->Expected output
    //expect() -> actual output
  });

  //Negative Test Case for Diff
  //   test("Adding 3 - 1 should not retun 1", () => {
  //     expect(mathOperations.add(3, 1)).not.toBe(1);

  //     //toBe ->Expected output
  //     //expect() -> actual output
  //   });
});
