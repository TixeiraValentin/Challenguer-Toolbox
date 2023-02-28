import './App.css';
import Rutas from './Routes';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {Provider} from 'react-redux';
import rootReducer from './Redux/Reducer/index';
import rootSaga from './Redux/Sagas/index';

function App() {
  const sagasMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagasMiddleware))
  sagasMiddleware.run(rootSaga)
 
  
  return (
    <Provider store={store}>
      <Rutas/>
    </Provider>
  );
}

export default App;
