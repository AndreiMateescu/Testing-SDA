import { sum, minus } from "./utils/operations";

// const mathOperations = require("./utils/operations");

// describe("Calculator tests", () => {
//   test("adding 1 + 2 should return 3", () => {
//     expect(mathOperations.sum(1, 2)).toBe(3);
//   });

//   test("subtracting 2 - 1 should return 1", () => {
//     expect(mathOperations.diff(2, 1)).toBe(1);
//   });
// });

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("subtracting 2 - 1 should return 1", () => {
    expect(minus(2, 1)).toBe(1);
  });
});
