import { c } from ".";

test("C is a", () => {
  expect(c(1, 2)).toBe(1);
});

test("C adds up", () => {
  expect(c(2, 1)).toBe(2)
})

export { c };
