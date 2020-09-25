import * as loginAction from './../actions/loginAction';
import loginReducer from './loginReducer';

describe('Login reducer', () => {
  it('Should set login info when passed SET_CURRENT_USER action', () => {
    const initialState = [];
    const user = {
      role: 'Admin',
      userName: 'jadhavakshay'
    };
    const getLoginAction = loginAction.setCurrentUserSuccess(user);
    const newState = loginReducer(initialState, getLoginAction);
    expect(newState.role).toEqual('Admin');
  });

  it('Should get login info when passed GET_CURRENT_USER action', () => {
    const initialState = [];
    const currentUser = {
      role: 'Admin',
      userName: 'jadhavakshay'
    };
    const getLoginAction = loginAction.getCurrentUserSuccess(currentUser);
    const newState = loginReducer(initialState, getLoginAction);
    expect(newState.role).toEqual('Admin');
  });

  it('Should logout user', () => {
    const initialState = [];
    const getLoginAction = loginAction.logoutSuccess();
    const newState = loginReducer(initialState, getLoginAction);
    expect(newState).toEqual(null);
  });
});
