import React from "react";
import "./inputBoxItem.css"


function InputBoxItem({data , useStateData,setData}) {
    
    const delete_item = ()=>{
    let empty = []
        useStateData.forEach(i => {
            if (i.id != data.id) {
                return empty.push(i)
            }       
            setData(empty);
 })}
    
    return ( 
        <div className="wrapper">
            <h1 >{data.title}</h1>
            <button className="margin" onClick={delete_item}>del</button>
        </div> 
     )
}

export default InputBoxItem;



