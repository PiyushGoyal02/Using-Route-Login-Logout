import './App.css';
import { Route,Routes, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './componants/Home';
import About from './componants/About';
import Contact from './componants/Contact';
import Login from './componants/Login';
import DeshBord from './componants/DeshBord';
import { useState } from 'react';
import Signup from './componants/Signup';


function App() {

  const [islogin,setlogin] = useState(false);

  const nevigate = useNavigate();

  function LoginClickHandler(){
    nevigate('/login')
  }

  function OnClickHandler(){
    nevigate('/signup')
  }

  return (
    <div className='container'>

      <div className='wrapper'>

        <div className='Top-Hading'>

          <Link to='/home'>
            <div className='logo-text'>
              <div className='logokaS'>S</div>
              <p className='study'>StudyNotion</p>
            </div>
          </Link>

          <div className='text-Links'>

            <Link className='link' to='/home'> Home </Link>
            <Link className='link' to='/about'> About </Link>
            <Link className='link' to='/contact'> Contact </Link>

          </div>

          <div className='Login-signup-link'>
            { !islogin &&
              <button onClick={LoginClickHandler}> Log In </button>
            }

            { !islogin &&
              <button onClick={OnClickHandler}> Sign Up </button>
            }

            { islogin &&
              <Link to='/login'>
                <button className='logoutbutton'> Log Out </button>
              </Link>
            }

            { islogin &&
              <Link to='/home'>
                <button className='deshboardbutton'>Deshbord</button>
              </Link>
            }
            
          </div>

        </div>

        <Routes>

          <Route path='/home' element={ <Home/> }></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/contact' element={ <Contact/> }></Route>
          <Route path='/login' element={ <Login setlogin={setlogin}/> }></Route>
          <Route path='/deshbord' element={ <DeshBord/> }></Route>
          <Route path='/signup' element={ <Signup setlogin={setlogin} /> }></Route>
          
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
