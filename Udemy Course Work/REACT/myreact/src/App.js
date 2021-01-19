import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hi, welcome React App playground. Follow from learning on Udemy.</h1>
      <p>So far so good if your can see me.</p>
    </div>
  );
  // return (React.createElement('div', null, React.createElement('h1', {className: "App"}, 'Hi, this is the start of my professional portfolio. Getting educated.')));
}
}

export default App;
