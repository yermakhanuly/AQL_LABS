import { Trophy, Zap, CheckCircle, Clock } from 'lucide-react';
import XPBar from '../components/XPBar';

export default function Dashboard() {
  // Mock stats for demonstration
  const stats = [
    { icon: <Zap className="w-8 h-8 text-sqyellow" />, label: 'XP', value: 1250 },
    { icon: <CheckCircle className="w-8 h-8 text-sqgreen" />, label: 'Tasks Completed', value: 38 },
    { icon: <Clock className="w-8 h-8 text-sqblue" />, label: 'Focus Sessions', value: 12 },
    { icon: <Trophy className="w-8 h-8 text-sqviolet" />, label: 'Level', value: 5 },
  ];

  return (
    <div className="w-screen h-screen bg-sq-gradient flex items-center justify-center overflow-hidden font-inter">
      <div className="w-[1440px] min-h-[900px] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 flex flex-col gap-12 p-12">
        {/* Welcome Card */}
        <div className="flex flex-row gap-8 items-center mb-4">
          <div className="flex-1 bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-lg p-10 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-sqviolet-dark mb-4 tracking-tight">Welcome to StudyQuest!</h2>
            <p className="text-2xl text-sqblue-dark font-medium mb-2">Your journey to productivity and growth starts here.</p>
            <p className="text-lg text-sqviolet-dark/80">Track your progress, earn XP, and level up your study habits with a gamified planner designed for desktop.</p>
          </div>
          <div className="w-[320px] h-[220px] bg-gradient-to-br from-sqviolet to-sqpink rounded-2xl shadow-xl flex items-center justify-center">
            <Trophy className="w-32 h-32 text-white drop-shadow-xl" />
          </div>
        </div>
        {/* XP Bar and Level */}
        <div className="flex items-center gap-8 mb-8">
          <XPBar xp={1250} maxXp={1600} level={5} />
          <div className="flex flex-col items-center">
            <span className="text-sqviolet-dark text-lg font-bold">Level</span>
            <span className="text-3xl font-extrabold text-sqviolet drop-shadow">5</span>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-all`}>
              {stat.icon}
              <div className="text-4xl font-extrabold text-sqblue-dark mt-4 mb-1">{stat.value}</div>
              <div className="text-lg text-sqviolet-dark font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Motivation & Quick Actions */}
        <div className="flex flex-row gap-8">
          <div className="flex-1 bg-gradient-to-br from-sqgreen-light/80 to-sqyellow-light/80 rounded-2xl shadow-lg p-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-sqgreen-dark mb-4">Stay Motivated!</h3>
            <ul className="text-lg text-sqgreen-dark/90 font-medium space-y-2 pl-2">
              <li>• Every completed task brings you closer to your next level.</li>
              <li>• Use Focus Mode to maximize your productivity streaks.</li>
              <li>• Redeem XP for rewards and celebrate your progress.</li>
            </ul>
          </div>
          <div className="w-[420px] bg-gradient-to-br from-sqviolet-light/80 to-sqblue-light/80 rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center gap-6">
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqblue to-sqviolet text-white text-2xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Zap className="w-7 h-7" /> Start Focus Session
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqgreen to-sqyellow text-white text-2xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <CheckCircle className="w-7 h-7" /> Add New Task
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqyellow to-sqpink text-white text-2xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Trophy className="w-7 h-7" /> View Achievements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 