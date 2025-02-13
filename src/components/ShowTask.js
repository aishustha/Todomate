import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask); //captured individual task and store it here

    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo =>todo.id !== id); //notequals to id
        setTasklist(updatedTaskList); //captured individual task and store it here
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])} className="clearall">Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <FontAwesomeIcon onClick={() => handleEdit(todo.id)} icon={faPenToSquare} />
                    <FontAwesomeIcon onClick={() => handleDelete(todo.id)} icon={faTrash} /> 
                </li>
            ))}
        </ul>
    </section>
  )
}
