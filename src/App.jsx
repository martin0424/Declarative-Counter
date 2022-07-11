import { useState } from 'react';

const App = (props) => {

    const [counter, setCounter] = useState(0);

    const addOne = () => {
      
    }
    
  return (
    <div className="App">
      { counter }
      <button onClick={(addOne) => setCounter(counter + 1)}>
        Add 1 
      </button>
    </div>
  )
}

export default App
