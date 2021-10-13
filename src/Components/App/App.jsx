import './App.css';
import Pay from '../Pay/Pay';
import React, { useState } from 'react';
function App() {
  const [operator, setOperator] = useState(["MTS","Megafon","Beeline"])
  const [routing, setRouting] = useState(undefined)
  const clickSetOperator = (item) => setRouting(item)

  return (
    <div className="App">
      {!routing ?
      <ul>
      {operator.map((item) => <li onClick={()=>clickSetOperator(item)}>{item}</li>)}
      </ul>
        :
       <Pay name={routing} setRouting={setRouting}/>
      }
    </div>
  );
}

export default App;
