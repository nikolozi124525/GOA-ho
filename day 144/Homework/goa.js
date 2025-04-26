import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Can't divide by zero");
        break;
      case "reset":
        setNum1("");
        setNum2("");
        setResult(null);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-6">
      <h1 className="text-2xl font-bold text-center">Simple Calculator</h1>
      <div className="flex flex-col space-y-4">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="border p-2 rounded"
        />
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        {["+", "-", "*", "/", "reset"].map((op) => (
          <button
            key={op}
            onClick={() => calculate(op)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            {op.toUpperCase()}
          </button>
        ))}
      </div>
      {result !== null && (
        <div className="text-xl text-center font-semibold text-gray-700">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
