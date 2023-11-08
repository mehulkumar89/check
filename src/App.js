import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Shivam from './shivam';
import Image from './image';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Shivam/>} />
      <Route path='/img' element={<Image/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
