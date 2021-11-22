import React from "react";

const ToDoList = (props)=> {
    return (
        <>
            <div className="listItems">
                <button
                className="remove"
                onClick={()=>{
                    props.onSelect(props.id);
                }}> remove</button>
                <li>{props.text}</li>
            </div>

        </>
    );
};
export default ToDoList;