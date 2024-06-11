import '../TodoItem/TodoItem.css';
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


function TodoItem({completed, text, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}>
      <FaCheck />
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete} >
      <FaTrash />
      </span>
    </li>
  );
}

export { TodoItem };