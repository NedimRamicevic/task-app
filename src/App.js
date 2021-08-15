import './App.css';
import ColorPicker from './colorPicker'
import Task from './task'
function App() {
  return (
    <div className="App">
      <div>
      <ColorPicker/>
      </div>
      <div>
      <Task/>
      </div>
      <div>
      <ColorPicker/>
      </div>
    </div>
  );
}

export default App;
