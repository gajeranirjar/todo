import { FaCheckCircle, FaEdit } from "react-icons/fa"
import { IoTrashBin } from "react-icons/io5"

export const TodoList = ({data, onHandleDeleteTodo , onHandleChecklistTodo , onHandleEditTodo }) => {
    const {content , checked} = data ;
    return (
        <li>
            <span className={`${ checked ? "checkList" : "notCheckList"}`}>
                {content}
            </span>
            <div className="li-btn">
            <button className="edit-btn" onClick={() => onHandleEditTodo(data)}>
                <FaEdit />
            </button>
            <button className="check-btn" onClick={() => onHandleChecklistTodo(data)}>
                <FaCheckCircle />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(content)}>
                <IoTrashBin />
            </button>
            </div>
        </li>
    )
}