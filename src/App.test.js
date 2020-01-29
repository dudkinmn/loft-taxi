import React from 'react';
import App from './App';
import ReactDom from 'react-dom'
import { shallow } from 'enzyme';
import LoginForm from './components/LoginForm';

import TextField from '@material-ui/core/TextField';

it('rendes without craching', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div)
  ReactDom.unmountComponentAtNode(div);
});

it('renders shallow', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<LoginForm />)).toEqual(true);
})

it('renders shallow TextField in Login', () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper.contains(<TextField />)).toEqual(true);
})