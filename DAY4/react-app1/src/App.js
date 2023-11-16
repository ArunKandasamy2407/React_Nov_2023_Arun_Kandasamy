import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/AppBar';
import {useState} from 'react'
function App() {
  let employees = [
    {
      id: 1,
      name: 'John Doe',
      department: 'HR'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Engineering'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      department: 'Finance'
    },
    {
      id: 4,
      name: 'Alice Brown',
      department: 'Marketing'
    }
  ];
  
  console.log(employees);
  
  return (
    <div className="App">
   <ButtonAppBar/>
    </div>
  );
}

export default App;
