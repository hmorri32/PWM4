import { expect } from "chai";
import { bubbleSort } from "../lib/bubble-sort";

describe("that yung bubble sort", () => {
  it("should bubble sort numbers", () => {
    let bubbler = bubbleSort([1, 4, 9, 3, 2, 7]);

    expect(bubbler).to.deep.equal([1, 2, 3, 4, 7, 9]);
  });
});
