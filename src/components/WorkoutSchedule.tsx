import React from 'react';
import { workoutSchedule } from '../data/workoutSchedule';

const WeightGuide: React.FC = () => (
  <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-bold text-blue-700 mb-3">哑铃重量建议</h3>
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-700">初学者（1–2个月）：</h4>
          <p className="text-gray-600">女性：2-4kg / 男性：4-6kg</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">中级阶段（2–4个月）：</h4>
          <p className="text-gray-600">女性：6-8kg / 男性：8-12kg</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">高级阶段（4个月以上）：</h4>
        <p className="text-gray-600">10kg 以上，根据个人情况逐步提高</p>
      </div>
    </div>
  </div>
);

const WorkoutSchedule: React.FC = () => {
  return (
    <div>
      <WeightGuide />
      <div className="space-y-6">
        {workoutSchedule.map((day, index) => (
          <div key={day.day} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4">{day.day}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">{day.focus}</h3>
              <p className="text-gray-600">{day.targetMuscles}</p>
              <p className="text-gray-600 italic">{day.note}</p>
            </div>
            <div className="space-y-4">
              {day.exercises.map((exercise, exIndex) => (
                <div key={exIndex} className="border-l-4 border-blue-500 pl-4">
                  <div className="font-medium text-gray-800">
                    {exercise.name}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mt-1">
                    <div>目标部位：{exercise.target}</div>
                    <div>组数/次数：{exercise.sets}组 {exercise.reps}</div>
                    <div>每组时间：{exercise.timePerSet}分钟</div>
                    <div>休息时间：{exercise.restTime}秒</div>
                  </div>
                  <div className="text-sm text-gray-500 italic mt-1">{exercise.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutSchedule;