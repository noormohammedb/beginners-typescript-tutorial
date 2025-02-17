import { expect, it } from "vitest";
import { number } from "zod";

type addNumObj1 = {
  first: number;
  second: number;
};

interface addNumObj2 {
  first: number;
  second: number;
}

// export const addTwoNumbers = (params: { first: number; second: number }) => {
export const addTwoNumbers = (params: addNumObj1) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
