import { useState } from "react";

export default function App() {
  const [bias, setBias] = useState("neutral");
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">📈 Haya & Arham AI Dashboard</h1>
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 mr-2" onClick={() => setBias("bullish")}>Bullish</button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={() => setBias("bearish")}>Bearish</button>
      </div>
      <p className="mt-4">Current Bias: <strong>{bias.toUpperCase()}</strong></p>
    </div>
  );
}