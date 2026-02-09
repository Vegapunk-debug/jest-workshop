const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("no coupon case", () => {
  expect(calculateFinalAmount(100, null)).toBe(100)
})

test("SAVE10 coupon case", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90)
})

test("FLAT50 boundary case", () => {
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50)
})

test("case-insensitive coupon", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90)
})





