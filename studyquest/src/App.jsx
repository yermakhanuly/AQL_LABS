import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Focus from "./pages/Focus";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex gap-4 mb-8">
        <Link className="font-semibold text-blue-600 hover:underline" to="/">Dashboard</Link>
        <Link className="font-semibold text-blue-600 hover:underline" to="/tasks">Tasks</Link>
        <Link className="font-semibold text-blue-600 hover:underline" to="/focus">Focus</Link>
        <Link className="font-semibold text-blue-600 hover:underline" to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
