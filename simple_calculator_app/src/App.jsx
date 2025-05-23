import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null); 
  const [operatorSymbol, setOperatorSymbol] = useState('');

  function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }
  function multiply(x, y) {
    return x * y;
  }
  function divide(x, y) {
    return y !== 0 ? x / y : "Error";
  }

  function handleOperation(opFunc, symbol) {
    setFirstNumber(inputValue);  
    setOperation(() => opFunc);  
    setOperatorSymbol(symbol); 
    setInputValue(0);               
  }

  function getResult() {
    if (firstNumber !== null && typeof operation === 'function') {
      const secondNumber = inputValue;
      const tempResult = operation(firstNumber, secondNumber);
      setResult(tempResult);
      setInputValue(0);
      setFirstNumber(null);
      setOperation(null);
      setOperatorSymbol('');
    } else {
      alert("Choose the operation!");
    }
  }

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <div>
        <p className='result' id='result'>
          {firstNumber !== null ? `${firstNumber} ${operatorSymbol} ${inputValue}` : result}
        </p>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={getResult} className='result'>=</button>
        <ul className='buttons'>
          <li><button onClick={() => handleOperation(add, '+')}>add</button></li>
          <li><button onClick={() => handleOperation(subtract, '-')}>subtract</button></li>
          <li><button onClick={() => handleOperation(multiply, '*')}>multiply</button></li>
          <li><button onClick={() => handleOperation(divide, '/')}>divide</button></li>
          <li><button className='reset' onClick={() => {
            setInputValue(0);
            setFirstNumber(null);
          }}>reset input</button></li>
          <li><button className='reset' onClick={() => {
            setResult(0);
            setInputValue(0);
            setFirstNumber(null);
            setOperatorSymbol('');
            setOperation(null);
          }}>reset result</button></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
