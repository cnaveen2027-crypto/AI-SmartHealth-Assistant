export default function Home({ setPage }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">AI Smart Health Assistant</h1>
      <button
        onClick={() => setPage("dashboard")}
        className="mt-6 bg-blue-500 px-6 py-2 text-white rounded"
      >
        Get Started
      </button>
    </div>
  );
}
