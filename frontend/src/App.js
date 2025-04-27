import './App.css';
import Nav from './component/Nav';
import Register from './component/Register';
import Login from './component/login';
import Addbook from './component/Addbook';
import BookList from './component/BookList';
import Review from './component/Review';
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
      <Route path="/" element={<BookList/>}/>
      <Route path="add-review/:id" element={<Review/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;