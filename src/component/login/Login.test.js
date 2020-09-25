import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

const renderLogin = args => {
  const defaultProps = {
    history: {},
    loginInfo: {},
    getLoginInfo: () => {},
    setCurrentUser: () => {},
    currentUser: {},
    getCurrentUser: () => {}
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Login {...props} />);
};

describe('Render login component', () => {
  it('Should render login component', () => {
    const wrapper = renderLogin();
    expect(wrapper).toMatchSnapshot();
  });

  it('should close modal', () => {
    const wrapper = renderLogin();
    const parentProps = wrapper.find('LoginModal').props();
    parentProps.handleClose();
    expect(parentProps.show).toBeFalsy();
  });

  it('should open modal', () => {
    const wrapper = renderLogin();
    const parentProps = wrapper.find('LoginSideInfo').props();
    parentProps.showLoginModal();
  });
});
