import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {

    const [inputData , setInputData] = useState({id : "" , content : "" , checked : false});

    const handleInputChange = ( value ) => {
        setInputData({ id : value , content : value , checked : false}) 
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputData);
        setInputData({ id : "" , content : "" , checked : false}) 
    }   

     return(
        <div className="form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="todo-input"
                        autoComplete="off" 
                        onChange = {(e) => handleInputChange(e.target.value)} 
                        value={inputData.content}/>
                    <button type="submit" className="todo-btn">
                        Add Task    
                    </button>
                </form>
            </div>
     )
}

