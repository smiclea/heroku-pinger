import fetch from 'node-fetch'
import { shouldBeAlive } from './lib.js'

const HOST = 'https://airports-random-router.herokuapp.com/'
// Interval must be less than 18 hours
const ALIVE_TIME = [20, 8]

const ping = () => {
  if (shouldBeAlive(ALIVE_TIME)) {
    fetch(HOST)
    console.log('Alive')
  } else {
    console.log('Dead')
  }
}
ping()
setInterval(() => {
  ping()
}, 20 * 60 * 1000)
