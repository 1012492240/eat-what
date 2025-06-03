import React from 'react';
import WorkoutSchedule from './components/WorkoutSchedule';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-2">健身训练计划</h1>
          <p className="text-gray-600">Weekly Workout Schedule</p>
        </header>
        <main>
          <WorkoutSchedule />
        </main>
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} 健身训练计划 - Your personal workout planner</p>
        </footer>
      </div>
    </div>
  );
}

export default App;