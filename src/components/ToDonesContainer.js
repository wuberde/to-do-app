import React from "react";
import ToDoneItem from "./ToDoneItem";

export default function ToDonesContainer(props) {


  const toDonesItems = props.toDonesProps.map((task) => {
    return (
     <ToDoneItem key={task.id} updateItemProps= {props.updateItemProps} taskProps={task} deleteItemProps={props.deleteItemProps}/>
    );
  });

  
  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      { toDonesItems }
    </div>
  );
}
