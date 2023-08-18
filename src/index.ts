export function calculateMitigatedDamage(rawDamage: number, magicResist: number) {
  return rawDamage * (100 / (100 + magicResist))
}
