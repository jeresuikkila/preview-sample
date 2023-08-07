export function c(a: number, b: number): number {
  return a;
}

export function calculateMitigatedDamage(rawDamage: number, magicResist: number) {
  return rawDamage * (100 / (100 + magicResist))
}