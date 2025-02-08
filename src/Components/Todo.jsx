import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  const addToDo = () => {
    let val = todo.trim();
    if (val === "") {
      alert('Task is empty');
    } 
    else if (todolist.includes(val)) {
      alert('Task already exists');
    } 
    else {
      setTodoList([...todolist, val]); 
    }
    setTodo(""); 
  };

  const deleteTodo = () => {
    setTodoList([]); 
  };

  const Del = (index) => {
    setTodoList(todolist.filter((_, ind) => ind !== index));
  };

  return (
    <div className="bg-secondary min-vh-100 d-flex flex-column align-items-center py-4">
      <h1 className="text-white mb-4">To-Do List</h1>

      <div className="d-flex gap-3 bg-dark p-4 rounded shadow">
        <input
          type="text"
          placeholder="Enter Your To-Do"
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-success fw-bold" onClick={addToDo}>Add</button>
        <button className="btn btn-danger fw-bold" onClick={deleteTodo}>Delete All</button>
      </div>

      <ul className="list-group w-50 mt-4">
        {todolist.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center bg-light shadow-sm rounded m-2">
            {item}
            <button onClick={() => Del(index)} className="btn btn-danger btn-sm">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
