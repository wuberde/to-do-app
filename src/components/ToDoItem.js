import React from "react";

export default function ToDoItem({taskProps, updateItemProps, deleteItemProps}) {

 /*  const changeStatus=()=>{
      updateItemProps(taskProps.id)
  }
   */


  return (
    <div className="todo-item">
      <p>{taskProps.text}</p>
      <div className="action">
        {/* //use arrow function if you need to pass argument in function */}
        <button className="btn" onClick={()=>updateItemProps(taskProps.id)}/*  onClick={changeStatus} */> &#10004;</button>
        <button className="btn" onClick={()=>deleteItemProps(taskProps.id)}/*  onClick={changeStatus} */> X </button>
      </div>
    </div>
  );
}
