import { CheckCircle, Trash2, Star } from 'lucide-react';

export default function TaskCard({ title, done, xp, onComplete, onDelete }) {
  return (
    <div
      className={`flex items-center gap-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-sqblue-light to-sqviolet-light transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border-2 ${done ? 'border-sqgreen' : 'border-transparent'} group`}
    >
      <button
        onClick={onComplete}
        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${done ? 'bg-sqgreen text-white border-sqgreen' : 'bg-white text-sqblue border-sqblue'} group-hover:scale-110`}
        aria-label="Mark as complete"
      >
        {done ? <CheckCircle className="w-7 h-7" /> : <Star className="w-7 h-7" />}
      </button>
      <div className={`flex-1 text-lg font-semibold ${done ? 'line-through text-sqgreen-dark' : 'text-sqblue-dark'}`}>{title}</div>
      <div className="flex items-center gap-2">
        <span className="text-sqyellow font-bold text-lg">+{xp} XP</span>
      </div>
      <button
        onClick={onDelete}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-sqpink transition-all duration-200 text-sqpink-dark hover:text-white border-2 border-transparent hover:border-sqpink"
        aria-label="Delete task"
      >
        <Trash2 className="w-6 h-6" />
      </button>
    </div>
  );
} 