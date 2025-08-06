import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap, Target, CheckCircle, Coffee, Clock, Star } from 'lucide-react';

const XP_PER_SESSION = 10;
const XP_LEVELS = [0, 20, 50, 100, 200, 400, 800, 1600];

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [xp, setXp] = useState(0);
  const [showReward, setShowReward] = useState(false);

  const focusTime = 25 * 60; // 25 minutes
  const breakTime = 5 * 60; // 5 minutes

  // Level calculation
  const level = XP_LEVELS.findIndex((thresh, i) => xp < (XP_LEVELS[i + 1] ?? Infinity));
  const nextLevelXp = XP_LEVELS[level + 1] ?? (xp + 100);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (!isBreak) {
        setSessions(sessions + 1);
        setXp(xp + XP_PER_SESSION);
        setShowReward(true);
        setTimeout(() => setShowReward(false), 2000);
        setIsBreak(true);
        setTimeLeft(breakTime);
      } else {
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
    <div className="w-screen h-screen bg-sq-gradient flex items-center justify-center overflow-hidden font-inter">
      <div className="w-[1200px] h-[700px] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 flex flex-row gap-12 p-12 relative">
        {/* Sidebar */}
        <aside className="w-[320px] h-full flex flex-col gap-8 pr-6 border-r border-white/30">
          {/* Level Badge */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sqyellow to-sqviolet shadow-lg flex items-center justify-center text-4xl font-extrabold text-white border-4 border-white select-none">
              {level}
            </div>
            <span className="text-sqviolet-dark text-lg font-bold">Level</span>
          </div>
          {/* XP Card */}
          <div className="bg-gradient-to-br from-sqyellow-light/80 to-sqpink-light/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <Zap className="w-10 h-10 text-white mb-2" />
            <div className="text-5xl font-extrabold text-white drop-shadow mb-1">{xp}</div>
            <div className="text-lg text-white/90 font-medium">Focus XP</div>
          </div>
          {/* Sessions Card */}
          <div className="bg-gradient-to-br from-sqgreen-light/80 to-sqyellow-light/80 rounded-2xl shadow-lg p-8 flex flex-col items-center">
            <CheckCircle className="w-10 h-10 text-white mb-2" />
            <div className="text-5xl font-extrabold text-white drop-shadow mb-1">{sessions}</div>
            <div className="text-lg text-white/90 font-medium">Sessions</div>
          </div>
          {/* Tips Card */}
          <div className="bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-7 h-7 text-sqviolet" />
              <span className="text-xl font-semibold text-sqviolet-dark">Focus Tips</span>
            </div>
            <ul className="space-y-3 text-sqviolet-dark/90 text-base font-medium pl-2">
              <li>• Find a quiet, distraction-free environment</li>
              <li>• Use the break time to stretch and refresh</li>
              <li>• Stay hydrated and take deep breaths</li>
              <li>• Close unnecessary browser tabs</li>
            </ul>
          </div>
        </aside>
        {/* Main Timer Area */}
        <main className="flex-1 flex flex-col items-center justify-center relative">
          {/* Animated XP Reward */}
          {showReward && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
              <div className="px-8 py-4 bg-gradient-to-r from-sqyellow to-sqpink text-white text-3xl font-extrabold rounded-2xl shadow-xl flex items-center gap-3 border-4 border-white">
                <Star className="w-8 h-8 text-white" /> +{XP_PER_SESSION} XP!
              </div>
            </div>
          )}
          {/* Timer Display */}
          <div className="relative flex flex-col items-center mb-12">
            <div className="w-[340px] h-[340px] bg-gradient-to-br from-sqblue to-sqviolet rounded-full flex items-center justify-center shadow-2xl border-8 border-white/30">
              <div className="w-[290px] h-[290px] bg-white/80 rounded-full flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className={`text-[5rem] font-extrabold tracking-tight ${isBreak ? 'text-sqyellow' : 'text-sqviolet-dark'} drop-shadow-lg`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {formatTime(timeLeft)}
                  </div>
                  <div className={`text-2xl font-semibold mt-4 ${isBreak ? 'text-sqyellow' : 'text-sqviolet-dark'}`}>{isBreak ? 'Break Time' : 'Focus Time'}</div>
                </div>
              </div>
            </div>
            {/* Animated Progress Ring */}
            <svg className="absolute top-0 left-0 w-[340px] h-[340px] pointer-events-none" viewBox="0 0 340 340">
              <circle
                cx="170"
                cy="170"
                r="160"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="14"
              />
              <circle
                cx="170"
                cy="170"
                r="160"
                fill="none"
                stroke={isBreak ? '#fde68a' : '#7c3aed'}
                strokeWidth="14"
                strokeDasharray={2 * Math.PI * 160}
                strokeDashoffset={2 * Math.PI * 160 * (1 - progress / 100)}
                style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,2,.6,1)' }}
              />
            </svg>
          </div>
          {/* Controls */}
          <div className="flex gap-8 mb-10">
            <button
              onClick={toggleTimer}
              className={`px-16 py-6 rounded-2xl font-bold text-2xl shadow-xl transition-all duration-300 flex items-center gap-4 tracking-wide border-2 border-transparent ${
                isActive
                  ? 'bg-gradient-to-r from-sqyellow to-sqpink text-white hover:from-sqyellow-dark hover:to-sqpink-dark'
                  : 'bg-gradient-to-r from-sqblue to-sqviolet text-white hover:from-sqblue-dark hover:to-sqviolet-dark'
              } hover:scale-105`}
            >
              {isActive ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
              {isActive ? 'Pause' : 'Start Focus'}
            </button>
            <button
              onClick={resetTimer}
              className="px-16 py-6 bg-white/80 hover:bg-sqviolet-light text-sqviolet-dark rounded-2xl font-bold text-2xl shadow-xl border-2 border-sqviolet-light transition-all duration-300 flex items-center gap-4 hover:scale-105"
            >
              <RotateCcw className="w-8 h-8" />
              Cancel
            </button>
          </div>
          {/* Session Info */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-sqviolet-light/80 rounded-full shadow text-xl font-semibold text-sqviolet-dark border border-sqviolet-light">
            <Target className="w-6 h-6 text-sqviolet" />
            Session {sessions + 1} • {isBreak ? 'Break' : 'Focus'}
          </div>
        </main>
      </div>
    </div>
  );
} 