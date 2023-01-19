import React from "react";

import '../../App.css'


const TodoItem = (props) => {
    
    const {items , deleitem} = props;
    let length = items.length;
    const ListItems = length ? (
    items.map(item => {
        return(
            <div key={item.id}> 
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={ () => deleitem(item.id)} > &times;</span>
            </div>
        ) 
    })

    ) : (
        <p>ther is no item</p>
    )

    
    return(
        <div className="ListItems">  

        <div className="nga"> 
         <span className="title"> Name </span>
         <span className="title"> Age </span>
         <span  className="title"> Action </span>
        </div>
           {ListItems}
        </div>
    )
}

export default TodoItem