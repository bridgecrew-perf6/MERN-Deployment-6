import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import View from './views/View';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/pirates" element={<Main/>}></Route>
          <Route path="/pirates/new" element={<Create/> } ></Route>
          <Route path="/pirate/:id" element={<View/> } ></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
