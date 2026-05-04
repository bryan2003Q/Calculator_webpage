import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CalculatorComponent from "./components/organisms/CalculatorComponent";
import CardsPage from "./pages/CardsPage";
import { SumComponent } from "./components/organisms/SumComponent";

function App() {
  const [showSum, setShowSum] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  if (showSum === true) {
    return <SumComponent onBack={() => setShowSum(false)} />;
  }

  if (showCalculator === true) {
    return <CalculatorComponent onReturn={() => setShowCalculator(false)} />;
  }

  if (showSearch === true) {
    return <CardsPage onReturn={() => setShowSearch(false)} />;
  }

  return (
    <div>
      <HomePage
        onShowSum={() => setShowSum(true)}
        onShowCalculator={() => setShowCalculator(true)}
        onShowCards={() => setShowSearch(true)}
      />
    </div>
  );
}

export default App;
