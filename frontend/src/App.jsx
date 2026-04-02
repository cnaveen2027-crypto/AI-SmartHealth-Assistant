import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FirstAid from "./pages/FirstAid";
import Disease from "./pages/Disease";
import Mental from "./pages/Mental";

export default function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "dashboard": return <Dashboard setPage={setPage} />;
      case "firstaid": return <FirstAid />;
      case "disease": return <Disease />;
      case "mental": return <Mental />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {renderPage()}
    </div>
  );
}
