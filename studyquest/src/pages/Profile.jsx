import { Trophy, Target, Clock, TrendingUp, Award, Calendar, Zap, Star, Check, BarChart3, Users } from 'lucide-react';

export default function Profile() {
  // Mock data - will be replaced with real data from backend
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10 mb-10">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm font-bold text-white">{userStats.level}</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 mb-3">Study Warrior</h1>
              <p className="text-slate-600 text-lg mb-6">Member since {new Date(userStats.joinDate).toLocaleDateString()}</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{userStats.xp}</div>
                  <div className="text-sm text-slate-500 font-medium">Total XP</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{completionRate}%</div>
                  <div className="text-sm text-slate-500 font-medium">Success Rate</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{userStats.currentStreak}</div>
                  <div className="text-sm text-slate-500 font-medium">Day Streak</div>
                </div>
                <div className="w-px h-12 bg-slate-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{userStats.focusSessions}</div>
                  <div className="text-sm text-slate-500 font-medium">Focus Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Task Statistics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Total Tasks</span>
                    <span className="font-semibold text-xl">{userStats.totalTasks}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Completed</span>
                    <span className="font-semibold text-xl text-green-600">{userStats.completedTasks}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Pending</span>
                    <span className="font-semibold text-xl text-orange-600">{userStats.totalTasks - userStats.completedTasks}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Completion Rate</span>
                    <span className="font-semibold text-xl text-blue-600">{completionRate}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">Focus Statistics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Focus Sessions</span>
                    <span className="font-semibold text-xl">{userStats.focusSessions}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Current Streak</span>
                    <span className="font-semibold text-xl text-green-600">{userStats.currentStreak} days</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Longest Streak</span>
                    <span className="font-semibold text-xl text-purple-600">{userStats.longestStreak} days</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600 text-lg">Avg. Session</span>
                    <span className="font-semibold text-xl text-blue-600">25 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Charts */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Weekly Progress Overview</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-lg">Tasks Completed</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-lg font-semibold w-12 text-right">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-lg">Focus Sessions</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
                    </div>
                    <span className="text-lg font-semibold w-12 text-right">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-lg">XP Earned</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-lg font-semibold w-12 text-right">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 text-lg">Study Streak</span>
                  <div className="flex items-center gap-4">
                    <div className="w-48 h-4 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000" style={{ width: '47%' }}></div>
                    </div>
                    <span className="text-lg font-semibold w-12 text-right">47%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Recent Activity</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Completed "Study React Hooks" task</span>
                  <span className="text-sm text-slate-500 ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Finished focus session (25 min)</span>
                  <span className="text-sm text-slate-500 ml-auto">4 hours ago</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Reached Level 5</span>
                  <span className="text-sm text-slate-500 ml-auto">1 day ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Achievements */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Achievements</h3>
              </div>
              <div className="space-y-4">
                {userStats.achievements.map(achievement => (
                  <div key={achievement.id} className={`p-4 rounded-2xl border ${
                    achievement.earned 
                      ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.earned 
                          ? 'bg-gradient-to-br from-green-400 to-emerald-500' 
                          : 'bg-slate-300'
                      }`}>
                        {achievement.earned ? (
                          <Check className="w-5 h-5 text-white" />
                        ) : (
                          <Star className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-lg ${
                          achievement.earned ? 'text-slate-900' : 'text-slate-500'
                        }`}>
                          {achievement.name}
                        </div>
                        <div className={`text-sm ${
                          achievement.earned ? 'text-slate-600' : 'text-slate-400'
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl border border-blue-200/50 p-8">
              <h3 className="font-semibold text-slate-800 mb-6 text-xl">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full p-4 bg-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 text-left group">
                  <div className="flex items-center gap-4">
                    <Zap className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-lg">Start Focus Session</span>
                  </div>
                </button>
                <button className="w-full p-4 bg-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 text-left group">
                  <div className="flex items-center gap-4">
                    <Target className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-lg">Add New Task</span>
                  </div>
                </button>
                <button className="w-full p-4 bg-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 text-left group">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-lg">View Progress</span>
                  </div>
                </button>
                <button className="w-full p-4 bg-white/60 hover:bg-white/80 rounded-2xl transition-all duration-200 text-left group">
                  <div className="flex items-center gap-4">
                    <BarChart3 className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-slate-700 text-lg">Analytics</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 