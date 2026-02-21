import { Routes, Route, NavLink } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-md">

        {/* Top Navbar */}
        <nav className="sticky top-0 bg-white border-b border-slate-200 px-4 py-3 flex justify-between items-center z-10">
          <h1 className="text-xl font-bold text-indigo-600">
            MiniSocial
          </h1>

          <div className="flex gap-4 text-sm">
            <NavLink
              to="/create-post"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
              }
            >
              Create
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
              }
            >
              Feed
            </NavLink>
          </div>
        </nav>

        <div className="px-3 py-6">
          <Routes>
            <Route path="/create-post" element={<CreatePage />} />
            <Route path="/" element={<PostsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;