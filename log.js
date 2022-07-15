import fs from 'fs'

const LOG_FILE = 'log.txt'

export const logMessage = (message) => {
  const datedMessage = `${new Date().toISOString()} - ${message}`
  console.log(datedMessage)
  fs.appendFileSync(LOG_FILE, `${datedMessage}\n`)
}

export const logError = error => {
  console.error(error)
  fs.appendFileSync(LOG_FILE, `${new Date().toISOString()} - ${error.message}\n`)
}

export const truncateLog = maxLogLines => {
  if (!fs.existsSync(LOG_FILE)) {
    return
  }
  const log = fs.readFileSync(LOG_FILE).toString().split('\n')
  if (log.length > maxLogLines) {
    fs.writeFileSync(LOG_FILE, log.slice(Math.round(maxLogLines / 2)).join('\n'))
  }
}
