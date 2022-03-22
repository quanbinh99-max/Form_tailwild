
import './App.css';
import Login from './Login';
import ListPage from './ListPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page" element={<ListPage />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
