import React,{useState} from 'react'

const App = () => {
  const[name,setName] = useState("Are you There");
  return (
    <div>
      <center>
        <h1>{name}</h1>
      <button onClick={() => setName("hay all ae ok")}>Click Here Change</button>
      </center>
    </div>
    
  )
}
export default App