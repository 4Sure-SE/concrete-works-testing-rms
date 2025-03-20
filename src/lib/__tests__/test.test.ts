import { expect, test } from "vitest";
import { add } from "../utils";

// sample test
test("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
});
