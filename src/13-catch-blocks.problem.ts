import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (_e) {
    // let e = _e as Error;
    // return e.message;
    return (_e as Error).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
