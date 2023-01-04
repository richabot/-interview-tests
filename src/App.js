import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import DropDirectioExample from './component/DropDirectioExample';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Homepage/>} />

     </Routes>
     {/* <DropDirectioExample /> */}
    </div>
  );
}

export default App;
