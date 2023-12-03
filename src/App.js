import { useState } from 'react';
import './App.css';
import HumanComponent from './components/HumanComponent/HumanComponent';
import InputBox from './components/InputBox/InputBox';




function App() {
  const [componentState , setComponentState ] = useState(true);

  const btnHandler = ()=>{
    setComponentState(!componentState)
  }

  return (
    <div className="App">
        {/* <button onClick={btnHandler} >Change</button>

        {
          componentState ? <HumanComponent/> : <h1>Sorry</h1>
        } */}


        <InputBox/>
      
    </div>
  );
}

export default App;
