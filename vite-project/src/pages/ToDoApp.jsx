import { useState } from "react";
import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";

function ToDoApp() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>ToDo App</h1>
      <div className="d-flex m-3">
        <button className="btn btn-success m-2">Completadas</button>
        <button className="btn btn-primary m-2">En curso</button>
      </div>

      <div className="row m-3">
        <div className="col-4">
          <AddToDo todoList={todoList} setTodoList={setTodoList} />
        </div>
        <div className="col-6">
          <div className="p-2 border">
            <ToDoList todoList={todoList} setTodoList={setTodoList} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoApp;
