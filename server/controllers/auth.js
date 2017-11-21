module.exports = ({ sessionService, emailService, loginService }) => ({
  generateCode: (req, res, next) => {
    const { email } = req.payload

    generateCode(email)
      .then(authCode => sendCode(email, authCode))
      .then(() => sessionService.create({
        emailToVerify: email,
        sessionType: sessionService.sessionTypes.ATTEMPT_LOGIN
      }))
      .then(loginJWT => {
        res
        .status(200)
        .json({ loginJWT })
      })
      .catch(next)
  },
  verifyCode: (req, res, next) => {
    const { code } = req.payload
    const { emailToVerify, sessionType } = req.session

    if (sessionType !== sessionService.sessionTypes.ATTEMPT_LOGIN) // invalid token

    validateCode(emailToVerify, code)
      .then(() => users.getIdFromEmail(emailToVerify))
      .then(userId =>
        sessionService.create({
          sessionType: sessionService.sessionTypes.LOGGED_IN,
          userId
        })
      ).then(sessionJWT => {
        res
        .status(200)
        .json({ sessionJWT })
      })
      .catch(next)
  }
})
