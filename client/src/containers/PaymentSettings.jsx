import { connect } from 'react-redux'

import PaymentSettings from '../components/payment_settings/PaymentSettings'
import { fetchUserInfo } from '../actions/user'
import { userSelector, isFetchingUserInfoSelector } from '../selectors/user'
import { createStateSelector } from '../utils/redux'

const mapStateToProps = createStateSelector({
  user: userSelector,
  isFetchingUserInfo: isFetchingUserInfoSelector
})

export default connect(mapStateToProps, { fetchUserInfo })(PaymentSettings)
