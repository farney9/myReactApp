import  { useState } from 'react'

const Counter = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0)


  return (
    <div>
        <hr/>
      <h2>Has dado click <strong>{count}</strong> veces</h2>
      <h4>{ count % 2 ? `${count} Es primo` : `${count} No es primo`}</h4>
      <button
        className="btn btn-success"
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter
