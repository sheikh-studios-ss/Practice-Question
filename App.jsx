import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [User, setUser] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p>This is Counter {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />

      {User ? <p>{User.name}</p> : <p>LOADING DATA...........</p>}
      <br />

      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
