import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import View from './views/View';
function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/pirates/new" element={<Create/> } ></Route>
          <Route path="/pirate/:id" element={<View/> } ></Route> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
