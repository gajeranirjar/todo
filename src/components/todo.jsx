import { FaCheckCircle } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { useState } from "react";


export const Todo = () => {

const [inputData , setInputData] = useState("");
const [item , setItem] = useState([{
    id : Number(),
    content : new String(),
}]);
console.log("👌 ~ Todo ~ item:", item)


function handleSubmit (e) {
    e.preventDefault();
    if(inputData.length === 0) return;
    setItem((pre) => [...pre , {
        id : item.length,
        content : inputData
    }])
    setInputData("");
}



    return <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>

            <div className="form">
                <form>
                    <input type="text" className="todo-input" autoComplete="off" onChange={(e) => setInputData(e.target.value)} value={inputData}/>
                    <button type="submit" className="todo-btn" onClick={handleSubmit}>
                        Add Task
                    </button>
                </form>
            </div>

            <div className="todo-list">
                <ul>
                    {
                       item.length == 1 ? "" :item.map((curElem) => {
                        return <li key={curElem.id}>
                        <span>
                            {curElem.content}
                        </span>
                        <button className="check-btn">
                            <FaCheckCircle />
                        </button>
                        <button className="delete-btn">
                            <IoTrashBin />
                        </button>
                    </li>
                    })
                    }
                </ul>
            </div>

            <div className="btn">
                Clear All
            </div>
        </section>
    </>
}