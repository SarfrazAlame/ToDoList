import React, { useState } from "react";
import TodoList from "./component/TodoList";
import ListItem from "./component/ListItem";
import "./App.css";

const App = () => {
  const [listToDo, setListToDO] = useState([]);

  function addList(inputText) {
    if (inputText !== "") {
      setListToDO([...listToDo, inputText]);
    }
  }
  function deleteItem(id) {
    let newList = [...listToDo];
    newList.splice(id, 1);
    setListToDO([...newList]);
  }
  return (
    <>
      <TodoList addList={addList} />
      <div className="flex-box">
        {listToDo.map((curVal, i) => {
          return (
            <ListItem invokedItem={curVal} id={i} deleteItem={deleteItem} />
          );
        })}
      </div>
    </>
  );
};

export default App;
