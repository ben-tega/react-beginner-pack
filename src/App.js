import { useState } from 'react';
import './index.scss';

function App() {

  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount((count) => count + 1)
  }
  const countDwn = () => {
    setCount((count) => count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus"onClick={countDwn}>- Минус</button>
        <button className="plus" onClick={countUp}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
