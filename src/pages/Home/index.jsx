import React, { useState } from "react";

import List from "../../components/List";
import Add from "../../components/Add";

// import './Home.css'
import style from "./Home.module.css";
function Home() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(input);
  return (
    <div className={style.home}>
      <Add
        input={input}
        setInput={setInput}
        setTodos={setTodos}
        todos={todos}
      />
      <List 
      todos={todos} 
      setTodos={setTodos}
      />
    </div>
  );
}

export default Home;
