import { useEffect, useState } from 'react'

// 外部套件 axios
import axios from 'axios'

import { Input } from './components/Input.jsx'
// import './assets/all.sass'


function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_PATH);
      const result = await axios.get('https://randomuser.me/api/');
      console.log(result);
    })();
  }, []);

  return (
    <>
      <div>
        <h1>React App</h1>
        <Input
          id="my-input"
          text="Enter text:"
          value={count}
          onChangeHandler={(e) => setCount(e.target.value)}
        />
        <p>Current value: {count}</p>
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    </>
  )
}

export default App
