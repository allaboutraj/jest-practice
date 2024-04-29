test("Truthy operators", () => {
  let name = "Codeflick";
  var n = null;
  expect(name).not.toBeNull();
  expect(n).toBeNull();

  expect(name).toBeTruthy();
  expect(n).toBeFalsy();

  let num1 = 100;
  expect(num1).toBeGreaterThan(10);
});
