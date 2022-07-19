import './App.css';
import Navbar from './components/Navbar';
import AllItems from './components/AllItems';
import Home from './components/Home';
import AddItems from './components/AddItems';
import UpdateItems from './components/UpdateItems';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all' element={<AllItems />} />
      <Route path='/add' element={<AddItems />} />
      <Route path='/update/:id' element={<UpdateItems />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
