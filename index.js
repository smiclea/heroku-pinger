import fetch from 'node-fetch'
import fs from 'fs'
import { shouldBeAlive } from './lib.js'

const ping = () => {
  const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
  config.hosts.forEach(host => {
    if (shouldBeAlive(host.keepAliveBetween)) {
      fetch(host.name)
      console.log(`Pinging ${host.name} ...`)
    } else {
      console.log(`${host.name} is outside of keepAliveBetween interval.`)
    }
  })
}
ping()
setInterval(() => {
  ping()
}, 20 * 60 * 1000)
