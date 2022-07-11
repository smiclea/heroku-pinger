import fetch from 'node-fetch'
import fs from 'fs'
import { shouldBeAlive } from './lib.js'

const ping = () => {
  try {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
    config.hosts.forEach(host => {
      if (shouldBeAlive(host.keepAliveBetween)) {
        fetch(host.name)
        console.log(`Pinging ${host.name} ...`)
      } else {
        console.log(`${host.name} is outside of keepAliveBetween interval.`)
      }
    })
  } catch (err) {
    console.log(err)
    fs.appendFileSync('log.txt', `${new Date().toISOString()} - ${err.message}\n`)
  }
}
ping()
setInterval(() => {
  ping()
}, 20 * 60 * 1000)
