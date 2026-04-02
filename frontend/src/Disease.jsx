import { useState } from "react";

export default function Disease() {
  const [result, setResult] = useState(null);

  const predict = async () => {
    const res = await fetch("http://localhost:5000/predict");
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h2>Disease Prediction</h2>
      <button onClick={predict} className="bg-blue-500 px-4 py-2 text-white">
        Predict
      </button>

      {result && (
        <div className="mt-4">
          <p>Disease: {result.disease}</p>
          <p>Probability: {result.probability}</p>
        </div>
      )}
    </div>
  );
}
