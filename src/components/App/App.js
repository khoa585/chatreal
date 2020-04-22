import React from 'react';
import { Provider } from 'react-redux';
import configRedux from '../../redux/configRedux'
import RouterURL from '../../RouterURL/RouterURL'
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Dashboard/Header/Header';
function App() {
  const store = configRedux()
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <RouterURL></RouterURL>
      </Router>
    </Provider>
  );
}

export default App;
