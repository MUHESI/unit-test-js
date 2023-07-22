import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import App from './components/App';


it('snapshot App test', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();

});
