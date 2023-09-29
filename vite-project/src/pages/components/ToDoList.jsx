export const ToDoList = ({ todoList, setTodoList }) => {
  
    const completeTodo = ({ target }) => {
      const todos = todoList.map((todo) => {
        if (todo.id == +target.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
  
      setTodoList(todos);
    };
  
    return (
      <>
        {todoList.length == 0 ? (
          <span>No existen tareas.</span>
        ) : (
          todoList.map((todo) => (
            <div
              className={`d-flex align-items-center alert ${
                todo.done ? "alert alert-success" : "alert alert-warning"
              } show`}
            >
              {todo.desc}
              <button
                onClick={completeTodo}
                id={todo.id}
                type="button"
                className="btn text-primary"
              >
                {todo.done ? "Realizada" : "Realizar"}
              </button>
            </div>
          ))
        )}
      </>
    );
  };
  