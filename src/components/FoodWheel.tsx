import React, { useState, useRef } from 'react';
import { Utensils } from 'lucide-react';
import { foodOptions } from '../data/foodOptions';
import './FoodWheel.css';

const FoodWheel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedFood, setSelectedFood] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  const getRandomDegree = () => {
    return Math.floor(Math.random() * 360) + 3600; // Spin at least 10 full rotations
  };

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setShowResult(false);
    setSelectedFood(null);
    
    const newRotation = rotation + getRandomDegree();
    setRotation(newRotation);
    
    // Calculate which food item is selected based on final rotation
    setTimeout(() => {
      const normalizedRotation = newRotation % 360;
      const segmentSize = 360 / foodOptions.length;
      const selectedIndex = Math.floor(
        (360 - normalizedRotation) / segmentSize
      );
      setSelectedFood(foodOptions[selectedIndex % foodOptions.length].name);
      setIsSpinning(false);
      setShowResult(true);
    }, 5000); // Match this timing with the CSS transition duration
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-8">
        <div className="wheel-container relative">
          <div 
            ref={wheelRef}
            className="wheel"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {foodOptions.map((food, index) => {
              const angle = 360 / foodOptions.length;
              const rotation = index * angle;
              return (
                <div 
                  key={index}
                  className="wheel-segment"
                  style={{ 
                    transform: `rotate(${rotation}deg) skewY(${90 - angle}deg)`,
                    background: food.color
                  }}
                >
                  <div className="segment-content" style={{ transform: `skewY(${-(90 - angle)}deg) rotate(${angle / 2}deg)` }}>
                    <span>{food.name}</span>
                    <small>{food.english}</small>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wheel-center">
            <Utensils className="h-6 w-6 text-red-600" />
          </div>
          <div className="wheel-pointer"></div>
        </div>
      </div>

      <button
        className="spin-button bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={spinWheel}
        disabled={isSpinning}
      >
        {isSpinning ? "旋转中..." : "转一转"}
      </button>

      {showResult && selectedFood && (
        <div className="result-container mt-8 result-animation">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">今天吃:</h2>
          <div className="result-box bg-white p-6 rounded-lg shadow-md border-2 border-red-500">
            <p className="text-3xl font-bold text-red-600">{selectedFood}</p>
          </div>
        </div>
      )}

      <div className="mt-12 w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">所有美食选项</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {foodOptions.map((food, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              style={{ borderLeft: `4px solid ${food.color}` }}
            >
              <h3 className="font-bold text-gray-800 mb-1">{food.name}</h3>
              <p className="text-sm text-gray-600">{food.english}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodWheel;