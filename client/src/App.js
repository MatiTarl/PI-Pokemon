import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Detail from './components/detail';
import Form from './components/form';

function App() {
  return (
    <div className='App' >
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/detail/:id' element={<Detail></Detail>} />
        <Route path='/form' element={<Form></Form>} />
      </Routes>
    </div> 
  );
}

export default App;
