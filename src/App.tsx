import React from 'react';
import FoodWheel from './components/FoodWheel';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-2">今天吃啥</h1>
          <p className="text-gray-600">What should I eat today?</p>
        </header>
        <main>
          <FoodWheel />
        </main>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 今天吃啥 - Your daily food decision maker</p>
        </footer>
      </div>
    </div>
  );
}

export default App;