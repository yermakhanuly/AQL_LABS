import { useState } from 'react';
import { Plus, Check, Trash2, Trophy, Star, Target, Clock, TrendingUp, Zap, Calendar, Award } from 'lucide-react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  // Calculate XP needed for next level (simple formula: level * 100)
  const xpForNextLevel = level * 100;
  const xpProgress = (xp % xpForNextLevel) / xpForNextLevel * 100;

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    
    // Award XP for completing task
    const newXp = xp + 5;
    setXp(newXp);
    
    // Check for level up
    if (newXp >= xpForNextLevel) {
      setLevel(level + 1);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Premium Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white">{level}</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  StudyQuest
                </h1>
                <p className="text-slate-600 mt-1 font-medium">Transform your study habits into achievements</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">{xp}</div>
                <div className="text-sm text-slate-500 font-medium">Total XP</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{completionRate}%</div>
                <div className="text-sm text-slate-500 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Advanced Stats */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            {/* Level Progress Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-slate-900 mb-2">Level {level}</div>
                <div className="text-sm text-slate-500 font-medium mb-4">Study Warrior</div>
                <div className="relative">
                  <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{ width: `${xpProgress}%` }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-slate-700 bg-white px-2 py-1 rounded-full shadow-sm">
                      {xp % xpForNextLevel}/{xpForNextLevel} XP
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">{totalTasks}</div>
                  <div className="text-xs text-slate-600 font-medium">Total Tasks</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
                  <div className="text-xs text-slate-600 font-medium">Completed</div>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-xl border border-yellow-200/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800">Recent Achievements</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">First task completed!</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-700">Level {level} reached</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Add Task Form - Premium Design */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Add New Quest</h3>
                  <p className="text-slate-600">What's your next study challenge?</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    placeholder="Enter your study goal..."
                    className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Zap className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
                <button
                  onClick={addTask}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Quest
                </button>
              </div>
            </div>

            {/* Task List - Premium Design */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="p-8 border-b border-slate-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Your Quests</h3>
                      <p className="text-slate-600">{totalTasks} total • {completedTasks} completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-slate-200/50">
                {tasks.length === 0 ? (
                  <div className="p-16 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="w-10 h-10 text-slate-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-700 mb-3">Ready to begin your journey?</h4>
                    <p className="text-slate-500 max-w-md mx-auto">Add your first study quest above to start earning XP and leveling up your study skills.</p>
                  </div>
                ) : (
                  tasks.map(task => (
                    <div key={task.id} className={`p-6 transition-all duration-300 hover:bg-slate-50/50 ${task.completed ? 'bg-green-50/50' : ''}`}>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => completeTask(task.id)}
                          disabled={task.completed}
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
                            task.completed 
                              ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-500 text-white shadow-lg' 
                              : 'border-slate-300 hover:border-green-500 hover:bg-green-50'
                          }`}
                        >
                          {task.completed && <Check className="w-4 h-4" />}
                        </button>
                        
                        <div className="flex-1">
                          <div className={`font-semibold text-lg ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                            {task.title}
                          </div>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Calendar className="w-4 h-4" />
                              <span>{task.createdAt.toLocaleDateString()}</span>
                            </div>
                            {task.completed && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                <Check className="w-4 h-4" />
                                Completed
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 