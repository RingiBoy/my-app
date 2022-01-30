import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import store from './store/stor.conf';



ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>    

    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



//провайдером обволакиваем нашу апку и указываем стор, мы его уже создали в файле стор конфиг функцией конфигуреСтор