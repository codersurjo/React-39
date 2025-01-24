
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import User from './User';

function App() {

  // 1.Normal handaler Function 
  function ClikeMe(){
    alert("Click Me");
  } 
  // 2.Arrow handaler Function
  const ClikeMe2 = () =>{
    alert("Click Me 2");
  }
  // adding 
  function Adding(num){
      alert(num+4)
  }
  return (
    <>
      <h1>React Core Concept -2</h1>
      <Friends></Friends>

      <Counter></Counter>
      <Team></Team>
      <User></User>

      <button onClick={ClikeMe}>Click Me</button>
      <button onClick={ClikeMe2}>Click Me 2</button>
      <button onClick={()=>{alert("Third Alert")}}>Click Me 3</button>
      <button onClick={()=> Adding(3)}>Four</button>
    </>
  )
}

export default App
