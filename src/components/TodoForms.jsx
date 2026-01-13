export const TodoForm = ({onAddTodo , inputData , setInputData}) => {

    const handleInputChange = ( value ) => {
        setInputData({ id : inputData.id || Date.now() , content : value , isEdit:inputData.isEdit, checked : inputData.checked}) 
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo(inputData);
        setInputData({ id : "" , content : "" , isEdit:false, checked : false }) 
    }   

    const isEdit = inputData.isEdit ? "Edit" : "Add Task"

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
                        {isEdit}    
                    </button>
                </form>
            </div>
     )
}

