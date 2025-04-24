import {expect, test} from "vitest";
import enJson from "../en/common.json";
import jaJson from "../ja/common.json";

test("en/index.json and ja/index.json have same keys", () => {
  expect(Object.keys(enJson).every((key) => key in jaJson)).toBe(true);
  expect(Object.keys(jaJson).every((key) => key in enJson)).toBe(true);
});
