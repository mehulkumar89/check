import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Image from './image';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>      
      <Route path='/img' element={<Image/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
