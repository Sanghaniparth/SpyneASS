import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import AddCar from './pages/Cars/AddCar';
import EditCar from './pages/Cars/EditCar';

//CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/addCar' element={<AddCar />} />
        <Route path='/cars/editCar/:id' element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
