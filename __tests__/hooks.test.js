//hooks

const mathOperators = require("../calculator");
//1. befor all and after all
//2. befor each and after each

describe("Calculator Tests", () => {
  let num1 = 0;
  let num2 = 0;

  beforeAll(() => {
    console.log("beforeAll called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });

  beforeEach(() => {
    console.log("beforeEach called");
    num1 = 1;
    num2 = 1;
  });

  afterEach(() => {
    console.log("afterEach called");
  });

  test("add", () => {
    let res = mathOperators.sum(num1, num2);
    expect(res).toBe(2);
  });

  test("diff", () => {
    let res = mathOperators.diff(num1, num2);
    expect(res).toBe(0);
  });
});
