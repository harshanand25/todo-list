import Header from "./My Components/Header";
import { Todos } from "./My Components/Todos";
import { Footer } from "./My Components/Footer";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import { AddTodo } from "./My Components/AddTodo";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
      initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log(" I am ondelete of todo", todo);
    // Deleting in react does not work this way
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  return (
    <>
      <Header title="My Todos list" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todo={todos} onDelete={onDelete} />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
