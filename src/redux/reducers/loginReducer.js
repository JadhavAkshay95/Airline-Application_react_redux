import * as ActionConstant from './../../common/actionConstant';

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case ActionConstant.SET_CURRENT_USER:
      return action.user;

    case ActionConstant.GET_CURRENT_USER:
      return action.currentUser;

    case ActionConstant.LOGOUT_USER:
      return null;

    default:
      return state;
  }
};
export default loginReducer;
