import { Trophy, Target, Clock, Award, Calendar, Zap, Star, Check, BarChart3 } from 'lucide-react';
import XPBar from '../components/XPBar';

export default function Profile() {
  // Mock data
  const userStats = {
    level: 5,
    xp: 1250,
    totalTasks: 45,
    completedTasks: 38,
    focusSessions: 12,
    currentStreak: 7,
    longestStreak: 15,
    joinDate: '2024-01-15',
    achievements: [
      { id: 1, name: 'First Task', description: 'Completed your first task', earned: true },
      { id: 2, name: 'Focus Master', description: 'Completed 10 focus sessions', earned: true },
      { id: 3, name: 'Streak Champion', description: '7-day study streak', earned: true },
      { id: 4, name: 'Task Master', description: 'Complete 50 tasks', earned: false },
      { id: 5, name: 'Level 10', description: 'Reach level 10', earned: false },
    ]
  };
  const completionRate = Math.round((userStats.completedTasks / userStats.totalTasks) * 100);

  return (
    <div className="w-screen h-screen bg-sq-gradient flex items-center justify-center overflow-hidden font-inter">
      <div className="w-[1440px] min-h-[900px] bg-white/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 flex flex-row gap-12 p-12">
        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-8">
          {/* Profile Header */}
          <div className="bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-xl p-10 flex flex-row gap-10 items-center mb-2">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-sqblue to-sqviolet rounded-full flex items-center justify-center shadow-xl">
                <Trophy className="w-20 h-20 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-r from-sqyellow to-sqpink rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">{userStats.level}</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-sqviolet-dark mb-3">Study Warrior</h1>
              <p className="text-xl text-sqblue-dark mb-6">Member since {new Date(userStats.joinDate).toLocaleDateString()}</p>
              <div className="flex items-center gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-sqblue">{userStats.xp}</div>
                  <div className="text-lg text-sqviolet-dark font-medium">Total XP</div>
                </div>
                <div className="w-px h-16 bg-sqviolet-light"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-sqgreen">{completionRate}%</div>
                  <div className="text-lg text-sqviolet-dark font-medium">Success Rate</div>
                </div>
                <div className="w-px h-16 bg-sqviolet-light"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-sqviolet">{userStats.currentStreak}</div>
                  <div className="text-lg text-sqviolet-dark font-medium">Day Streak</div>
                </div>
                <div className="w-px h-16 bg-sqviolet-light"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-sqyellow">{userStats.focusSessions}</div>
                  <div className="text-lg text-sqviolet-dark font-medium">Focus Sessions</div>
                </div>
              </div>
            </div>
          </div>
          {/* XP Bar and Level */}
          <div className="flex items-center gap-8 mb-2">
            <XPBar xp={userStats.xp} maxXp={1600} level={userStats.level} />
            <div className="flex flex-col items-center">
              <span className="text-sqviolet-dark text-lg font-bold">Level</span>
              <span className="text-3xl font-extrabold text-sqviolet drop-shadow">{userStats.level}</span>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sqgreen-light/80 to-sqyellow-light/80 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-sqblue" />
                <h3 className="text-2xl font-semibold text-sqviolet-dark">Task Statistics</h3>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Total Tasks</span>
                  <span className="font-semibold">{userStats.totalTasks}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Completed</span>
                  <span className="font-semibold text-sqgreen">{userStats.completedTasks}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Pending</span>
                  <span className="font-semibold text-sqyellow">{userStats.totalTasks - userStats.completedTasks}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Completion Rate</span>
                  <span className="font-semibold text-sqblue">{completionRate}%</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sqviolet-light/80 to-sqpink-light/80 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-sqviolet" />
                <h3 className="text-2xl font-semibold text-sqviolet-dark">Focus Statistics</h3>
              </div>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Focus Sessions</span>
                  <span className="font-semibold">{userStats.focusSessions}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Current Streak</span>
                  <span className="font-semibold text-sqgreen">{userStats.currentStreak} days</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Longest Streak</span>
                  <span className="font-semibold text-sqviolet">{userStats.longestStreak} days</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sqviolet-dark">Avg. Session</span>
                  <span className="font-semibold text-sqblue">25 min</span>
                </div>
              </div>
            </div>
          </div>
          {/* Progress Charts */}
          <div className="bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-8">
              <BarChart3 className="w-8 h-8 text-sqviolet" />
              <h3 className="text-2xl font-semibold text-sqviolet-dark">Weekly Progress Overview</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sqviolet-dark text-lg">Tasks Completed</span>
                <div className="flex items-center gap-4">
                  <div className="w-64 h-4 bg-sqviolet-light rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sqblue to-sqviolet rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-lg font-semibold w-12 text-right">75%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sqviolet-dark text-lg">Focus Sessions</span>
                <div className="flex items-center gap-4">
                  <div className="w-64 h-4 bg-sqviolet-light rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sqgreen to-sqyellow rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-lg font-semibold w-12 text-right">60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sqviolet-dark text-lg">XP Earned</span>
                <div className="flex items-center gap-4">
                  <div className="w-64 h-4 bg-sqviolet-light rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sqyellow to-sqpink rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-lg font-semibold w-12 text-right">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sqviolet-dark text-lg">Study Streak</span>
                <div className="flex items-center gap-4">
                  <div className="w-64 h-4 bg-sqviolet-light rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sqviolet to-sqpink rounded-full transition-all duration-1000" style={{ width: '47%' }}></div>
                  </div>
                  <span className="text-lg font-semibold w-12 text-right">47%</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Sidebar */}
        <aside className="w-[340px] h-full flex flex-col gap-8">
          {/* Achievements */}
          <div className="bg-gradient-to-br from-sqyellow-light/80 to-sqpink-light/80 rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-sqyellow" />
              <h3 className="text-2xl font-semibold text-sqviolet-dark">Achievements</h3>
            </div>
            <div className="space-y-4">
              {userStats.achievements.map(achievement => (
                <div key={achievement.id} className={`p-4 rounded-2xl border ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-sqgreen-light to-sqgreen border-sqgreen' 
                    : 'bg-white/60 border-sqviolet-light'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-gradient-to-br from-sqgreen to-sqyellow' 
                        : 'bg-sqviolet-light'
                    }`}>
                      {achievement.earned ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <Star className="w-5 h-5 text-sqviolet" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold text-lg ${
                        achievement.earned ? 'text-sqviolet-dark' : 'text-sqviolet-light'
                      }`}>
                        {achievement.name}
                      </div>
                      <div className={`text-sm ${
                        achievement.earned ? 'text-sqgreen-dark' : 'text-sqviolet-light'
                      }`}>
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-sqblue-light/80 to-sqviolet-light/80 rounded-2xl shadow-lg p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-sqviolet-dark mb-2">Quick Actions</h3>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqblue to-sqviolet text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Zap className="w-6 h-6" /> Start Focus Session
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqgreen to-sqyellow text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Target className="w-6 h-6" /> Add New Task
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqyellow to-sqpink text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <Calendar className="w-6 h-6" /> View Progress
            </button>
            <button className="w-full px-8 py-5 bg-gradient-to-r from-sqviolet to-sqpink text-white text-xl font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-4">
              <BarChart3 className="w-6 h-6" /> Analytics
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
} 