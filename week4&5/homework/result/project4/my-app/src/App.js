import logo from './logo.svg';
import './App.css';
import MAINPAGE from './Component/MainPage/MainPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './redux/reducer';

const store = createStore(appReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MAINPAGE></MAINPAGE>
      </div>
    </Provider>
  );
}

export default App;
