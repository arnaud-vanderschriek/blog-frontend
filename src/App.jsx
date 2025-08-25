import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostEdit from "./components/PostEdit";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoutes";

function AppContent() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const showNavbar = token && location.pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/posts" element={<ProtectedRoute><PostList /></ProtectedRoute>} />
        <Route path="/new" element={<ProtectedRoute><PostForm /></ProtectedRoute>} />
        <Route path="/edit" element={<ProtectedRoute><PostEdit /></ProtectedRoute>} />
        <Route path="/post/:id" element={<ProtectedRoute><PostDetail /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;