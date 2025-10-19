import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1>Test</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind CSS is Ready! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your React app is now configured with Tailwind CSS v4.
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
