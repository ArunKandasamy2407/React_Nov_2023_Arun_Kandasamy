import logo from './logo.svg';
import './App.css';
import { StateProps } from './components/stateProps';
import { useEffect, useState } from 'react';
function App() {
  const student={
    name1:"Rayleigh"
  }

  const [time,setTime]=useState("11");
  setInterval(()=>{
    const date=new Date();
    setTime(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
  },1000);
  let [num,setNum]=useState(1);
  return (
    <div className="App">
    <h2>{time}</h2>
      <StateProps name="Luffy" number={num} student={student} />
      <button onClick={()=>{setNum(++num)}}>Num ++</button>
    </div>
  );
}

export default App;
