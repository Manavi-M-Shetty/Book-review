import './App.css';
import Nav from './component/Nav';
import Register from './component/Register';
import Login from './component/login';
import Addbook from './component/Addbook';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/add-book" element={<Addbook/>}/>
      
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;