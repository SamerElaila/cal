module.exports = service => {
  let service

  const getService = () => {
    if (!service) {
      throw new Error(
        `Tring to use service ${service.name} before it has been initialised`
      )
    }

    return service
  }

  const init = () =>
    service.start().then(serviceInst => {
      service = serviceInst
    })
}
