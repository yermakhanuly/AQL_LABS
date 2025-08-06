import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Dashboard' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/focus', label: 'Focus Mode' },
  { to: '/profile', label: 'Profile' },
];

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-emerald-50 flex flex-col">
      {/* Header / Navbar */}
      <header className="w-full bg-white/80 shadow-md sticky top-0 z-20">
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-extrabold text-2xl text-violet-700 tracking-tight select-none">StudyQuest</div>
          <div className="flex gap-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-base hover:bg-violet-100 hover:text-violet-700 ${
                  location.pathname === link.to ? 'bg-violet-200 text-violet-800' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto p-6 flex flex-col gap-6">
        {children}
      </main>
      {/* Footer (optional) */}
      <footer className="w-full text-center text-gray-400 text-sm py-4 mt-8">
        &copy; {new Date().getFullYear()} StudyQuest. All rights reserved.
      </footer>
    </div>
  );
} 