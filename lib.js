import fetch from 'node-fetch'
import { logMessage } from './log.js'

export const shouldBeAlive = (
  interval,
  useHours = new Date().getHours()
) => interval[1] > interval[0] ?
    useHours > interval[0] && useHours < interval[1] :
    useHours > interval[0] || useHours < interval[1]

export const handleHost = async host => {
  if (shouldBeAlive(host.keepAliveBetween)) {
    const start = Date.now()
    await fetch(host.name)
    const message = `Pinged ${host.name} in ${(Date.now() - start) / 1000} seconds`
    logMessage(message)
  } else {
    console.log(`${host.name} is outside of keepAliveBetween interval.`)
  }
}
