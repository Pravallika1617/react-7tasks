
import './App.css'

import { Route,Routes } from 'react-router-dom';
import Login from "./components/login"
import TodoList from "./components/list"
import Calculator from './components/calculator'
import SignUp from './components/signup';
import Home from "./components/home"
import Products from './components/products';
import Utils from './components/utils';
import Quiz from './components/quiz';


function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/list' element={<TodoList />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/utils' element={<Utils />} />
      <Route path='/quiz' element={<Quiz />} />
    </Routes>

    
    </>
  );
}

export default App;


