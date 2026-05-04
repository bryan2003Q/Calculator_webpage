import { useState } from "react";
import "./App.css";
import Home from "./Home.tsx";
import Calculator from "./Calculator.tsx";
import Cards from "./Cards.tsx";

function App() {
  const [showSum, setShowSum] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  const sum = () => {
    const result = numberOne + numberTwo;
    alert(`The result is: ${result}`);
  };


  if (showSum === true) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Sum of two numbers</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number 1</label>
              <input
                type="number"
                className="w-full p-3 border rounded"
                placeholder="Enter first number"
                onChange={(e) => setNumberOne(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number 2</label>
              <input
                type="number"
                className="w-full p-3 border rounded"
                placeholder="Enter second number"
                onChange={(e) => setNumberTwo(Number(e.target.value))}
              />
            </div>
            <button
              onClick={sum}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded"
            >
              Calculate Result
            </button>
            <button
              onClick={() => setShowSum(false)}
              className="w-full py-2 text-gray-500 font-medium"
            >
              ← Back to Selection
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showCalculator == true) {
    return <Calculator onReturn={() => setShowCalculator(false)} />;
  }

  if (showSearch == true) {
    return <Cards onReturn={() => setShowSearch(false)} />;
  }

  return (
    <div>
      <Home
        onShowSum={() => setShowSum(true)}
        onShowCalculator={() => setShowCalculator(true)}
        onShowCards={() => setShowSearch(true)}
      />
    </div>
  );
}

export default App;

