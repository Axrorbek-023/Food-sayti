import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import NotFound from './pages/404/notPage';
import Chart from './pages/Chart/Chart';
import Percent from './pages/Percent/Percent';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/percent' element={<Percent/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/email' element={<Home/>}/>
        <Route path='/notification' element={<Home/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
