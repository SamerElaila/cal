module.exports = (req, res, next) => {
  const {
    params: { userId },
    user: { sub }
  } = req

  if (userId !== sub) return next(Boom.unauthorised())

  next()
}
