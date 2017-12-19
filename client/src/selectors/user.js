export const userSelector = state => {
  return state.user.userInfo
}

export const isFetchingUserInfoSelector = state => {
  return state.user.isFetchingUserInfo
}
