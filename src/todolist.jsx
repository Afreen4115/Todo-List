import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const TodoLists = (props) => {
    return (
        <>
            <div className="todo_style">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faTimes} className="fa-times" 
                    onClick={()=>{
                        props.onSelect(props.id)
                    }}/>
                </div>
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default TodoLists;
