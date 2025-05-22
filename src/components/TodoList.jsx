import { FaCheckCircle } from "react-icons/fa"
import { IoTrashBin } from "react-icons/io5"

export const TodoList = ({data, onHandleDeleteTodo , onHandleChecklistTodo }) => {
    const {content , checked} = data ;
    return (
        <li>
            <span className={`${ checked ? "checkList" : "notCheckList"}`}>
                {content}
            </span>
            <button className="check-btn" onClick={() => onHandleChecklistTodo(data)}>
                <FaCheckCircle />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(content)}>
                <IoTrashBin />
            </button>
        </li>
    )
}