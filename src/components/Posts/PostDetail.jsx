import { useEffect, useState } from "react"
import { getPosts, deletePost } from "../../services/api";

export default function PostDetail() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  });

  async function handleDelete(id) {
    await deletePost(id);
    loadPosts(); 
  }

 async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  return (
    <div>
      <h1>Details</h1>
      <div className="w-200 h-100 flex flex-col items-center shadow-lg">
        {posts.map((elem ) => {
          <p>{elem.titre}</p>  
        })}
        <div className="h-full m-4">
          <p></p>
        </div>
      </div>
      <button className="bg-black text-white rounded-lg p-2 mb-2 hover:bg-gray-500 w-50" onClick={() => handleDelete(posts.id)}>Supprimer</button>
    </div>
  );
}