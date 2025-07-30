import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer, Zap, Target, CheckCircle, Coffee, Clock } from 'lucide-react';

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [xp, setXp] = useState(0);

  const focusTime = 25 * 60; // 25 minutes
  const breakTime = 5 * 60; // 5 minutes

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Session completed
      if (!isBreak) {
        // Focus session completed
        setSessions(sessions + 1);
        setXp(xp + 10); // Award 10 XP for completed focus session
        setIsBreak(true);
        setTimeLeft(breakTime);
      } else {
        // Break completed
        setIsBreak(false);
        setTimeLeft(focusTime);
        setIsActive(false);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak, sessions, xp]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(focusTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((focusTime - timeLeft) / focusTime) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Focus Mode
          </h1>
          <p className="text-slate-600 text-xl">Stay focused, earn XP, level up your productivity</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Timer Section */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-12">
              {/* Timer Display */}
              <div className="text-center mb-12">
                <div className="relative inline-block">
                  <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl mb-8">
                    <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className={`text-8xl font-bold ${isBreak ? 'text-orange-600' : 'text-slate-900'}`}>
                          {formatTime(timeLeft)}
                        </div>
                        <div className={`text-2xl font-medium mt-4 ${isBreak ? 'text-orange-500' : 'text-slate-600'}`}>
                          {isBreak ? 'Break Time' : 'Focus Time'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Ring */}
                  <svg className="absolute inset-0 w-80 h-80 transform -rotate-90" viewBox="0 0 320 320">
                    <circle
                      cx="160"
                      cy="160"
                      r="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-slate-200"
                    />
                    <circle
                      cx="160"
                      cy="160"
                      r="150"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeDasharray={`${2 * Math.PI * 150}`}
                      strokeDashoffset={`${2 * Math.PI * 150 * (1 - progress / 100)}`}
                      className={`transition-all duration-1000 ease-out ${isBreak ? 'text-orange-500' : 'text-blue-500'}`}
                    />
                  </svg>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-6 mb-8">
                <button
                  onClick={toggleTimer}
                  className={`px-12 py-6 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg ${
                    isActive
                      ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isActive ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  {isActive ? 'Pause Session' : 'Start Focus Session'}
                </button>
                <button
                  onClick={resetTimer}
                  className="px-12 py-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 text-lg"
                >
                  <RotateCcw className="w-6 h-6" />
                  Reset Timer
                </button>
              </div>

              {/* Session Info */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 rounded-full">
                  <Target className="w-5 h-5 text-slate-600" />
                  <span className="text-lg font-medium text-slate-700">
                    Session {sessions + 1} • {isBreak ? 'Break' : 'Focus'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* XP Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Focus XP</h3>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">{xp}</div>
              <div className="text-slate-600">Total earned from focus sessions</div>
            </div>

            {/* Sessions Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Completed Sessions</h3>
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-3">{sessions}</div>
              <div className="text-slate-600">Focus sessions completed</div>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl border border-blue-200/50 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Focus Tips</h3>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-base">Find a quiet, distraction-free environment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-base">Use the break time to stretch and refresh</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-base">Stay hydrated and take deep breaths</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-base">Close unnecessary browser tabs</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Session Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Focus Duration</span>
                  <span className="font-semibold text-slate-900">25 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Break Duration</span>
                  <span className="font-semibold text-slate-900">5 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">XP per Session</span>
                  <span className="font-semibold text-green-600">10 XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 