export default function Dashboard({ setPage }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <button onClick={() => setPage("firstaid")} className="bg-red-500 p-4 rounded">First Aid</button>
        <button onClick={() => setPage("disease")} className="bg-blue-500 p-4 rounded">Disease</button>
        <button onClick={() => setPage("mental")} className="bg-green-500 p-4 rounded">Mental Health</button>
      </div>
    </div>
  );
}
