import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux'; // теперь в компоненте App все дочерние компоненты будут иметь доступ к store без прокидывания через props.(в нашем примере)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
