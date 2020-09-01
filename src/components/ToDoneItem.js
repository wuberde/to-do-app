import React from 'react'

export default function ToDoneItem({taskProps , updateItemProps,deleteItemProps}) {
    return (
        <div className="todones-item">
        <p>{taskProps.text}</p>
        <div className="action">
          <button className="btn" onClick={()=>updateItemProps(taskProps.id)}> &#8635; </button>
          <button className="btn" onClick={()=>deleteItemProps(taskProps.id)}> X </button>
        </div>
      </div>
    )
}
