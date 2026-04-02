import { useState } from "react";

export default function FirstAid() {
  const [steps, setSteps] = useState([]);

  const handleHelp = () => {
    setSteps([
      "Stay calm",
      "Clean the wound",
      "Apply bandage",
      "Call emergency if severe"
    ]);

    const msg = new SpeechSynthesisUtterance("Follow first aid instructions");
    speechSynthesis.speak(msg);
  };

  return (
    <div>
      <h2>First Aid Assistant</h2>
      <button onClick={handleHelp} className="bg-red-500 px-4 py-2 text-white">
        Get Help
      </button>

      <ul className="mt-4">
        {steps.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <a href="tel:108">
        <button className="mt-4 bg-red-700 px-4 py-2 text-white">
          Emergency Call
        </button>
      </a>
    </div>
  );
}
