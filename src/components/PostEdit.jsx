import { useEffect, useState } from "react"
import { getPosts, deletePost } from "../services/api";

export default function PostEdit() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    loadPosts();
  }, []);

  async function handleDelete(id) {
    console.log("ID in PostEdit: ", id)
    await deletePost(id);
    loadPosts(); 
  }

 async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  return (
    <div className="mt-20 flex flex-col justify-center">
      <h1>Edit posts</h1>
      {posts.map((elem ) => (
        <div key={elem._id} class="w-200 h-100 flex flex-col items-center shadow-lg">
          <p>{elem.title}</p>
          <p>{elem.content}</p>
          <button class="bg-black text-white rounded-lg p-2 mb-2 hover:bg-gray-500 w-50" onClick={() => handleDelete(elem._id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
}