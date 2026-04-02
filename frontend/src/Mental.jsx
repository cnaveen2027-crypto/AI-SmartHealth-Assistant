import { useState } from "react";

export default function Mental() {
  const [status, setStatus] = useState("");

  const analyze = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      setStatus("You seem stressed. Try breathing exercises.");
    };
    recognition.start();
  };

  return (
    <div>
      <h2>Mental Health</h2>
      <button onClick={analyze} className="bg-green-500 px-4 py-2 text-white">
        Analyze Voice
      </button>

      <p className="mt-4">{status}</p>
    </div>
  );
}
