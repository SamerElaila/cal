module.exports = (req, res, next) => {
  const {
    params: { userId },
    user: { sub }
  } = req

  console.log(req.user);

  if (userId !== sub) return next(Boom.unauthorised())

  next()
}
