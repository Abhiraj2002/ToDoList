import React, { useState } from "react";
import ToDoList from "./toDoList";

const App=()=> {
  const [inputList, setInput]=useState("");
  const [Items , setItems]=useState([]); 
  const itemevent = (event)=> {
    setInput(event.target.value);
  };
  
  const additems=()=>{
     setItems((oldItems)=>{
      //  console.log(oldItems);
       return [...oldItems,inputList];
     });
     setInput("");
  };
  const deleteItems=(id)=>{
    setItems((oldVal)=>{
      return oldVal.filter((val,index)=>{
        return index !== id;
      })
    })
  }




    return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Add Items"
        value={inputList}
         onChange={itemevent}/>


        <button onClick={additems}>Add</button>
        <ol>
          {
            Items.map((val,index)=>{
              return (
              <ToDoList
              key={index}
              id={index}
              text={val}
              onSelect={deleteItems}
              />
              );
            })
          };
        </ol>
      </div>
    </div>
  );
}

export default App;
  