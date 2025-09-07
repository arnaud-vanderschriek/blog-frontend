import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostList from "./components/Posts/PostList";
import PostForm from "./components/Posts/PostForm";
import PostEdit from "./components/Posts/PostEdit";
import PostDetail from "./components/Posts/PostDetail";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoutes";
import PostManager from "./components/Posts/PostManager";

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
        <Route path="/posts" element={<ProtectedRoute><PostManager /></ProtectedRoute>} />
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