import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="fixed top-0 right-0 left-0 bg-white text-black p-4 flex justify-between items-center shadow-lg">
      <h1 class="font-bold text-xl">Blog Space</h1>
      <div class="flex gap-4 justify-between h-full w-auto">
        <Link to="/home" class="hover:text-gray-400">home</Link>
        <Link to="/posts" class="hover:text-gray-400">posts</Link>
        <Link to="/new" class="hover:text-gray-400">create posts</Link>
        <Link to="/edit" class="hover:text-gray-400">edit post</Link>
      </div>
    </nav>
  );
}