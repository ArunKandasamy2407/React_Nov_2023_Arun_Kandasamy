import PharmacyRegistrationForm from './components/reg';
import Homepage from './homepage';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="App">
            <Router>
            <Routes>
               <Route path="/"  element={<Homepage/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/reg" element={<PharmacyRegistrationForm/>} />
          </Routes> 
     </Router>
          </div>


    
  );
}

export default App;
