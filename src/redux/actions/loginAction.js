import * as ActionConstant from './../../common/actionConstant'
import * as LoginApi from './../../api/loginApi'

export const setCurrentUserSuccess = user => {
  return {
    type: ActionConstant.SET_CURRENT_USER,
    user
  }
}

export const getCurrentUserSuccess = currentUser => {
  return {
    type: ActionConstant.GET_CURRENT_USER,
    currentUser
  }
}

export const logoutSuccess = () => {
  return {
    type: ActionConstant.LOGOUT_USER
  }
}

export const logout = () => {
  return dispatch => {
    return LoginApi.logout({}).then(() => {
      dispatch(logoutSuccess())
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return LoginApi.getCurrentUser().then(response => {
      dispatch(getCurrentUserSuccess(response.data))
    })
  }
}

export const setCurrentUser = userInfo => {
  return dispatch => {
    return LoginApi.setCurrentUser(userInfo).then(response => {
      dispatch(setCurrentUserSuccess(response.data))
    })
  }
}
