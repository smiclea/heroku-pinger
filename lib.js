export const shouldBeAlive = (aliveInterval, useCustomHour) => {
  const useDate = useCustomHour ? new Date(2022, 0, 1, useCustomHour) : new Date()

  const buildDate = (add, hours) => new Date(
    useDate.getFullYear(),
    useDate.getMonth(),
    useDate.getDate() + add,
    hours
  )

  if (aliveInterval[1] > aliveInterval[0]) {
    return useDate > buildDate(0, aliveInterval[0]) && useDate < buildDate(0, aliveInterval[1])
  }

  const isCurrentAm = useDate.getHours() < 12
  const isIntervalStartAm = aliveInterval[0] < 12

  if (!isIntervalStartAm && isCurrentAm) {
    return useDate > buildDate(-1, aliveInterval[0]) && useDate < buildDate(0, aliveInterval[1])
  }
  return useDate > buildDate(0, aliveInterval[0]) && useDate < buildDate(1, aliveInterval[1])
}