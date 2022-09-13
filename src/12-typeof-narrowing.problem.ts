import { expect, it } from "vitest";

const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }
  amount.amount;
};

it("Should return the amount when passed an object", () => {
  console.log(coerceAmount({ amount: 20 }));
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  console.log("coerceAmount(20): ", coerceAmount(20));
  expect(coerceAmount(20)).toEqual(20);
});
