import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

const renderRoutes = args => {
  const defaultProps = {};
  const props = { ...defaultProps, ...args };
  return shallow(<Routes {...props} />);
};

describe('Render manage service component', () => {
  it('Render manage service modal', () => {
    let wrapper = renderRoutes({});
    expect(wrapper).toMatchSnapshot();
  });
});
