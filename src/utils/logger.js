const needToLogOrNot = ('development' === process.env.NODE_ENV)

export default {
  log: () => {
    if (needToLogOrNot) {
      console.log.apply(this, arguments)
    }
  },
  error: () => {
    if (needToLogOrNot) {
      console.error.apply(this, arguments)
    }
  },
}
