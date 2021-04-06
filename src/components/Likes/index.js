import React from 'react';
import { render } from 'react-dom';
import Likes from './Likes';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const App = () => (
  <div style={styles}>
    <Likes/>
  </div>
);

render(<App />, document.getElementById('root'));
