import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/SignIn/Login';
import SignupPage from './pages/Signup/SignUp';
import Sidebar from './Components/Sidebar/Sidebar';
import Protected from './Protected';
import Home from './Components/Home/Home';
import Error from './pages/Error/Error';


function App() {
  return (
   <>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<Protected Component={Sidebar}/>}/>
        {/* <Route path='/home' element={<Sidebar/>}/> */}

        <Route path='/*' element={<Error/>}/>

        

      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;