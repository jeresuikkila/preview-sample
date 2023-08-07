import { c, calculateMitigatedDamage } from ".";

test("C is a", () => {
  expect(c(1, 2)).toBe(1);
});

describe("Magic damage", () => {
  test('1000 dmg, 25 magic resistance', () => {
    const mitigatedDamage = calculateMitigatedDamage(1000, 25);

    expect(mitigatedDamage).toBeCloseTo(800)
  })
})