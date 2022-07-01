import './App.css';
import Stories from './screens/Page/Story';
import { Provider } from 'react-redux'
import { store } from './Store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Stories />
      </div>
    </Provider>
  );
}

export default App;
