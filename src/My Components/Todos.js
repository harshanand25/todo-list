import React from "react";
import { TodoItem } from "../My Components/TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="Container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todo.length == 0
        ? "No Todos to Display"
        : props.todo.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};
export default Todos;
