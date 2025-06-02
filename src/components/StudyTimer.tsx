import React, { useState, useEffect } from 'react';
import { Timer, Pause, Play, RotateCcw } from 'lucide-react';

const StudyTimer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionHistory, setSessionHistory] = useState<{ date: string; duration: number }[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    
    if (isRunning && time > 0) {
      // Save session when pausing
      setSessionHistory(prev => [
        ...prev,
        { 
          date: new Date().toISOString(),
          duration: time
        }
      ]);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Timer className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Study Timer</h3>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-mono font-bold text-gray-900 dark:text-white mb-4">
          {formatTime(time)}
        </div>
        
        <div className="flex justify-center space-x-3">
          <button
            onClick={toggleTimer}
            className="p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
            aria-label={isRunning ? "Pause timer" : "Start timer"}
          >
            {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          
          <button
            onClick={resetTimer}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Reset timer"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {sessionHistory.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Recent Sessions</h4>
          <div className="space-y-2">
            {sessionHistory.slice(-3).reverse().map((session, index) => (
              <div 
                key={index}
                className="text-sm text-gray-600 dark:text-gray-400 flex justify-between"
              >
                <span>{new Date(session.date).toLocaleDateString()}</span>
                <span>{formatTime(session.duration)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyTimer;