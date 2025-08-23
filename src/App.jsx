import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetail from "./components/PostDetail";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostEdit from "./components/PostEdit";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="/edit" element={<PostEdit />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;