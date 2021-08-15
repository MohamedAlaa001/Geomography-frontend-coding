import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';

import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
