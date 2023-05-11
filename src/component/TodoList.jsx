import React, { useState } from "react";
import "../App.css";
import { AiFillPlusCircle } from "react-icons/ai";

const TodoList = (props) => {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const AddInputs = () => {
    props.addList(input);
    setInput("")
  }
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      props.addList(input);
      setInput("")
    }
  }
  return (
    <>
      <div className="container">
        <div>
          <input
            type="text"
            value={input}
            placeholder="Enter Your To Do"
            className="input-btn"
            onChange={inputHandler}
            onKeyDown={handleEnterKey}
          />
          <button className="btn">
            <AiFillPlusCircle
              onClick={AddInputs}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
