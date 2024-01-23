import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Counter from './pages/counter';
import Movie from './pages/movie';
import TaskAdd from './pages/taskadd';

function App() {
  return (
    <div className="App">
      <Router>

<div>
  <a className='links' href='/counter'>Counter</a>
  <a className='links' href='/movie'>Movie</a>
  <a className='links' href='/tasks'>Task</a>
  
  <Routes>
    <Route path="counter" element={<Counter />}></Route>
    <Route path="movie" element={<Movie />}></Route>
    <Route path="tasks" element={<TaskAdd />}></Route>

  </Routes>
  
</div>
</Router>
    </div>
  );
}

export default App;
