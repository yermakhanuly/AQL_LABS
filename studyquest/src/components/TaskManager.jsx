import { useState } from 'react';
import TaskCard from './TaskCard';
import XPBar from './XPBar';
import { Plus } from 'lucide-react';

const XP_PER_TASK = 5;
const XP_LEVELS = [0, 20, 50, 100, 200, 400, 800, 1600]; // Example XP thresholds

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read 10 pages of textbook', done: false },
    { id: 2, title: 'Complete math assignment', done: true },
    { id: 3, title: 'Review flashcards', done: false },
  ]);
  const [newTask, setNewTask] = useState('');

  // XP and Level calculation
  const completedCount = tasks.filter(t => t.done).length;
  const xp = completedCount * XP_PER_TASK;
  const level = XP_LEVELS.findIndex((thresh, i) => xp < (XP_LEVELS[i + 1] ?? Infinity));
  const nextLevelXp = XP_LEVELS[level + 1] ?? (xp + 100);

  // Handlers
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: newTask.trim(), done: false },
      ]);
      setNewTask('');
    }
  };
  const completeTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };
  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="w-full flex flex-col gap-10 font-inter">
      {/* XP Bar and Level */}
      <div className="flex items-center gap-8 mb-2">
        <XPBar xp={xp} maxXp={nextLevelXp} level={level} />
        <div className="flex flex-col items-center">
          <span className="text-sqviolet-dark text-lg font-bold">Level</span>
          <span className="text-3xl font-extrabold text-sqviolet drop-shadow">{level}</span>
        </div>
      </div>
      {/* Add Task */}
      <div className="flex gap-4 items-center mb-2">
        <input
          className="flex-1 px-6 py-4 rounded-2xl border-2 border-sqblue-light bg-white/80 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-sqblue transition-all duration-200 shadow"
          placeholder="Add a new quest..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <button
          className="px-6 py-4 rounded-2xl bg-gradient-to-r from-sqblue to-sqviolet text-white font-bold text-xl shadow-lg hover:scale-105 hover:from-sqblue-dark hover:to-sqviolet-dark transition-all flex items-center gap-2"
          onClick={addTask}
        >
          <Plus className="w-6 h-6" /> Add
        </button>
      </div>
      {/* Task List */}
      <div className="flex flex-col gap-6 mt-2">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-sqblue-light/30 to-sqviolet-light/30 rounded-2xl shadow-inner">
            <span className="text-3xl font-bold text-sqblue-dark mb-2">🎉 You’ve completed everything!</span>
            <span className="text-lg text-sqviolet-dark">Add a new quest to keep leveling up!</span>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              done={task.done}
              xp={XP_PER_TASK}
              onComplete={() => completeTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
} 