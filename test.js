import { shouldBeAlive } from './lib.js'

(() => {
  const TEST_MAP = [
    // Hours cross midnight
    [[21, 8], 22, true],
    [[21, 8], 9, false],
    [[21, 8], 20, false],
    [[21, 8], 5, true],
    [[9, 8], 20, true],
    [[10, 8], 11, true],
    [[10, 8], 9, false],
    [[15, 13], 14, false],
    [[15, 13], 17, true],
    [[15, 13], 7, true],
    // Hours dont't cross midnight
    [[15, 13], 7, true],
    [[8, 20], 13, true],
    [[2, 13], 14, false],
  ]

  TEST_MAP.forEach(([aliveInterval, useCustomHour, expected]) => {
    const result = shouldBeAlive(aliveInterval, useCustomHour)
    console.log(`${result === expected ? 'Pass' : 'Fail'} - Interval [${aliveInterval}] should be ${expected ? 'alive' : 'dead'} at hour ${useCustomHour}.`)
  })
})()