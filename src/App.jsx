import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/theme/themeContext";

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Logo section */}
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div
            className={`w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold ${
              theme === "dark" ? "bg-purple-600" : "bg-purple-500"
            } text-white`}
          >
            <img src="/vite.svg" alt="Vite Logo" />
          </div>
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:drop-shadow-lg transition-all duration-300 hover:-translate-y-1 animate-spin-slow"
        >
          <div
            className={`w-24 h-24 rounded-lg flex items-center justify-center text-4xl font-bold ${
              theme === "dark" ? "bg-blue-600" : "bg-blue-500"
            } text-white`}
          >
            <img src="/react.svg" alt="React Logo" />
          </div>
        </a>
      </div>

      {/* Main heading */}
      <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Vite + React
      </h1>

      {/* Card section */}
      <div
        className={`p-8 rounded-xl shadow-xl max-w-md w-full text-center space-y-6 flex flex-col ${
          theme === "dark"
            ? "bg-gray-800 border border-gray-700"
            : "bg-gray-50 border border-gray-200"
        }`}
      >
        {/* Theme toggle button */}
        <button
          onClick={() => {
            console.log(`Theme before clicked!`);
            console.log(theme);
            toggleTheme();
          }}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            theme === "dark"
              ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
              : "bg-gray-800 hover:bg-gray-700 text-white"
          }`}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Counter button */}
        <button
          onClick={() => setCount((count) => count + 1)}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-500 text-white border border-blue-500"
              : "bg-blue-500 hover:bg-blue-600 text-white border border-blue-400"
          }`}
        >
          Count is {count}
        </button>

        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Edit{" "}
          <code
            className={`px-2 py-1 rounded text-xs ${
              theme === "dark"
                ? "bg-gray-700 text-yellow-400"
                : "bg-gray-200 text-purple-600"
            }`}
          >
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      {/* Footer text */}
      <p
        className={`mt-8 text-sm ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
export default App;
