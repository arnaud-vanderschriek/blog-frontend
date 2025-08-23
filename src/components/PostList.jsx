import { useEffect, useState } from "react";
import { getPosts } from "../services/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  return (
    <div class="flex flex-col items-center mt-20">
      <h1 class="text-4xl mt-4 font-black">All posts</h1>
      <ul>
        {posts.map((p) => (
          <li class="mt-10" key={p.id}>
            <div class="flex">
              <p class="text-gray-400 m-4">by: {p.author}</p>
              <p class="text-gray-400 m-4">date: {p.createdAt}</p>
            </div>
            <p class="bg-black text-white ml-4 h-10 flex justify-center items-center rounded-lg "><strong>{p.title}</strong></p>
            <div class="w-200 h-100 flex flex-col items-center shadow-lg">
              <div class="h-full m-4">
                <p>{p.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}