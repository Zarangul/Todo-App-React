import React from "react";

function Add({ input, setInput, todos, setTodos }) {
    const handleAdd = ()=>{
        setTodos([...todos, input]);
        setInput('');
    }
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Elave et</button>
    </div>
  );
}

export default Add;
