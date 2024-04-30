import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import AuthComponent from './components/AuthComponent/AuthComponent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CallbackComponent from './components/CallbackComponent/CallbackComponent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<AuthComponent><SignIn/></AuthComponent>} />
          <Route path='/sign-up' element={<AuthComponent><SignUp/></AuthComponent>} />
          <Route path='/callback' element={<CallbackComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
