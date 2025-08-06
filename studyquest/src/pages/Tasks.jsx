import TaskManager from '../components/TaskManager';
import { Zap, CheckCircle, ListChecks } from 'lucide-react';

export default function Tasks() {
  // Mock stats for sidebar
  const stats = [
    { icon: <CheckCircle className="w-7 h-7 text-green-400" />, label: 'Completed', value: 38 },
    { icon: <ListChecks className="w-7 h-7 text-blue-400" />, label: 'Total Tasks', value: 45 },
    { icon: <Zap className="w-7 h-7 text-yellow-400" />, label: 'XP Earned', value: 1250 },
  ];

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-700 flex items-center justify-center overflow-hidden">
      <div className="w-[1440px] min-h-[900px] bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 flex flex-row gap-12 p-12" style={{ boxShadow: '0 8px 40px 0 rgba(80, 80, 180, 0.18)' }}>
        {/* Main Task Manager */}
        <main className="flex-1 flex flex-col">
          <div className="bg-gradient-to-br from-blue-200/80 to-indigo-200/80 rounded-2xl shadow-xl p-10 mb-8">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-6 tracking-tight">Your Tasks</h2>
            <TaskManager />
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-[340px] h-full flex flex-col gap-8">
          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-green-200/80 to-emerald-200/80 rounded-2xl shadow-lg p-8 mb-2">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Quick Stats</h3>
            <div className="space-y-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  {stat.icon}
                  <span className="text-xl font-semibold text-slate-900 w-24">{stat.value}</span>
                  <span className="text-lg text-slate-700 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-yellow-200/80 to-orange-200/80 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-2">Quick Actions</h3>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Zap className="w-6 h-6" /> Start Focus Session
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <CheckCircle className="w-6 h-6" /> Mark All Complete
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
} 