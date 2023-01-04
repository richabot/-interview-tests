import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './component/Details';
function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/job/:id" element={<Details />} />

     </Routes>
     {/* <DropDirectioExample /> */}
    </div>
  );
}

export default App;
