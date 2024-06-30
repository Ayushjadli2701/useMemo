import React, { useMemo, useState } from 'react'
const App = () => {

  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(50);


  // function multiply(){
  //   console.log("printing...");
  //   return add*10;
  // }
  // this function will run even if sub value changes, which we dont want

  const multiply = useMemo(function multiply(){
    console.log("printing...");
    return add*10;
  }, [add]);

  //[] dependency array, this function will only run when "add" changes
  
  return (
    <div>
        <h1>useMemo Hook</h1>
        {multiply}<br/>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <span>{add}</span>
        <br/>
        <button onClick={function minus(){setSub(sub-1)}}>Subtract</button>
        <span>{sub}</span>
    </div>
  )
}

export default App
