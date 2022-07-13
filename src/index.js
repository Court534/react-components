import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { renderIntoDocument } from 'react-dom/test-utils';

const App = () => {
  return <div>Hello</div>
}


ReactDOM.render(<App />, document.querySelector('#root'))