import { useState } from "react";
import { TodoForm } from "./TodoForms";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "nirjarTodo"
const getLocalData = () => {
    const data = localStorage.getItem(todoKey)
    if (!data) return [];
    return JSON.parse(data);
}

export const Todo = () => {


    const [item, setItem] = useState(getLocalData());


    function handleSubmit(value) {
        const { content } = value;
        if (!content) return;

        if (item.find((curElem) => curElem.content == content)) return;

        setItem((pre) => [...pre, value])
    }

    // add local data 
    localStorage.setItem(todoKey, JSON.stringify(item))

    const handleClearAll = () => {
        setItem([]);
    }

    const handleCheckList = (value) => {
        const { id, checked } = value
        const isChecked = item.map((curElem) => {
            if (curElem.id == id) {
                curElem.checked = !checked
            }
            return curElem;
        })
        setItem(isChecked)
    }

    const handleDeleteTodo = (value) => {
        const items = item.filter((cur) => cur.content !== value)
        setItem(items);
    }






    return <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleSubmit} />

            <div className="todo-list">
                <ul>
                    {
                        item.map((curElem) => {
                            return (
                                < TodoList
                                    key={curElem.id}
                                    data={curElem}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleChecklistTodo={handleCheckList}
                                />
                            );
                        })}
                </ul>
            </div>

            <div className="btn" onClick={handleClearAll}>
                Clear All
            </div>
        </section>
    </>
}