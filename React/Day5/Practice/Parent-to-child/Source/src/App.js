import {useState,react} from 'react'
import './App.css';
import Display from './components/Display.js'


function App() {
  const [name1,nameState] = useState(null)
  const [arr,arrState] = useState([])
  function demo(e)
  {
    nameState(e.target.value)
  }
  function result()
  {
    console.log(name1)
  }
  return (   
    <div className="App">
       <input type="text" onChange={demo}></input>
       <button onClick={result}>submit</button>
      <Display result={true} name={name1}/>

    </div>
  );
}

export default App;
