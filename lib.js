export const shouldBeAlive = (
  interval,
  useHours = new Date().getHours()
) => interval[1] > interval[0] ?
    useHours > interval[0] && useHours < interval[1] :
    useHours > interval[0] || useHours < interval[1]