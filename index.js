import fs from 'fs'
import { handleHost } from './lib.js'
import { logError, truncateLog } from './log.js'

const TIME_BETWEEN_PINGS = 20 * 60 * 1000
const MAX_LOG_LINES = 2000

const ping = async () => {
  try {
    const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
    await Promise.all(config.hosts.map(async host => await handleHost(host)))
  } catch (err) {
    logError(err)
  }

  truncateLog(MAX_LOG_LINES)

  setTimeout(ping, TIME_BETWEEN_PINGS)
}

ping()
