import React, { useState } from "react";
import InputBoxItem from "../inputBoxItem/inputBoxItem";
import "./InputBox.css";
document.body.style = 'background: #2061CB;';

function InputBox() {
   
    const [inpVal , setInpVal] = useState("")
    const [data , setData] = useState([])

    const inpHander = (e)=>{
        setInpVal(e.target.value)
    }
  


    const addToDo = ()=>{
        let newToDo = {
            id:data.length,
            title: inpVal,
        }
        setData([...data ,newToDo ]);
        setInpVal("");
    }
    
    return ( 
        <>
        <div className="react">To do list using react</div>
        <div className="add">

        <input className="inp"  type="text"  value={inpVal} onChange={inpHander} />
        <button className="bt" onClick={addToDo}>Add</button>
       
        </div>


        {
            
            data.length == 0 ? <h1></h1>  :
            
                    data.map((obj)=>{
                        return <InputBoxItem key={obj.id}
                                             data={obj}
                                             useStateData={data} 
                                             setData={setData}
                                             />
                    })
        }
        </>
     );
}

export default InputBox;