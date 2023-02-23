import './App.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate} from 'react-router-dom'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Userfront from '@userfront/react'
import NoPage from './components/404/NoPage'

function App() {

  Userfront.init("6bg6qz7n");

  function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Index />
          </RequireAuth>
        }/>
        <Route path='/login' element={
            <Login />
        }/>
        <Route path='/signup' element={
          <SignUp />
        }/>
        <Route path='*' element ={
          <RequireAuth>
            <NoPage />
          </RequireAuth>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
