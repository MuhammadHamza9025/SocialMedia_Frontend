
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Posts from './Pages/Posts';
import Addpost from './Pages/Addpost';
import UserDetails from './Pages/UserDetails';
import UserProfiles from './Pages/UserProfiles';
import Error from './Pages/Error';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        {localStorage.getItem('auth-token') ?
          <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/addpost' element={<Addpost></Addpost>}></Route>
            <Route path='/user/:id' element={<UserDetails></UserDetails>}></Route>
            <Route path='/users/:id' element={<UserProfiles></UserProfiles>}></Route>
            <Route path='*' element={<Error></Error>}></Route>


          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={<Error></Error>}></Route>


          </Routes>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
