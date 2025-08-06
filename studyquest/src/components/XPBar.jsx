import React from 'react';

export default function XPBar({ xp, maxXp, level }) {
  const percent = Math.min(100, (xp / maxXp) * 100);
  return (
    <div className="w-full flex items-center gap-4">
      {level !== undefined && (
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sqyellow to-sqviolet shadow-lg text-2xl font-extrabold text-white border-4 border-white select-none">
          {level}
        </div>
      )}
      <div className="flex-1">
        <div className="relative h-8 rounded-full bg-sqblue-light/20 overflow-hidden shadow-inner">
          <div
            className="absolute left-0 top-0 h-8 rounded-full bg-gradient-to-r from-sqblue to-sqviolet transition-all duration-700"
            style={{ width: `${percent}%` }}
          />
          <div className="relative z-10 flex items-center justify-between h-8 px-4 text-white font-bold text-lg select-none">
            <span className="drop-shadow">XP: {xp}</span>
            <span className="drop-shadow">{xp} / {maxXp}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 