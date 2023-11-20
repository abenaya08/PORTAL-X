//App.js
import './App.css';
import DeleteAxios from './Day8/DeleteAxios';
//import AxiosGet from './Day8/AxiosGet';
import PostAxios from './Day8/PostAxios';

function App() {
  return (
    <div className="App">
      <PostAxios/>
      <DeleteAxios/>
    </div>
  );
}

export default App;