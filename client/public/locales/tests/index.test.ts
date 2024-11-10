import { expect, test } from "vitest";
import enJson from "../en/index.json";
import jaJson from "../ja/index.json";

test("en/common.json and ja/common.json have same keys", () => {
  expect(Object.keys(enJson).every((key) => key in jaJson)).toBe(true);
  expect(Object.keys(jaJson).every((key) => key in enJson)).toBe(true);
});
