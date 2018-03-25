import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App --- Shallow Render REACT COMPONENTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
