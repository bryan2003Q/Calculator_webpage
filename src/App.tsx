import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Calculator from "./Calculator";
//import Cards from "./Cards";

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
      <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-4 font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate- mb-8 text-center">Sum of two numbers</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Number 1</label>
              <input
                type="number"
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                placeholder="Enter first number"
                onChange={(e) => setNumberOne(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">Number 2</label>
              <input
                type="number"
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                placeholder="Enter second number"
                onChange={(e) => setNumberTwo(Number(e.target.value))}
              />
            </div>
            <button
              onClick={sum}
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all active:scale-95"
            >
              Calculate Result
            </button>
            <button
              onClick={() => setShowSum(false)}
              className="w-full py-2 text-slate-500 font-medium hover:text-slate-800 transition-colors"
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
    <div className="bg-slate-50">
      <Home
        onShowSum={() => setShowSum(true)}
        onShowCalculator={() => setShowCalculator(true)}
        onShowCards={() => setShowSearch(true)}
      />
    </div>
  );
}

export default App;
