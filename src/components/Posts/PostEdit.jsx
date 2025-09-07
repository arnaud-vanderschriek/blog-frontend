import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../services/api";

export default function PostEdit() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "", author: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  function handleEdit(post) {
    setIsEditing(true);
    setFormData({ title: post.title, content: post.content, author: post.author });
  }

  async function handleDelete(id) {
    await deletePost(id);
    loadPosts();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("✅ Article modifié avec succès !");
      setFormData({ title: "", content: "", author: "" });
      setIsEditing(false);
      loadPosts();
    } catch (err) {
      console.error(err);
      setMessage("❌ Erreur lors de la modification de l'article.");
    }
  }

  return (
    <div className="mt-20 flex flex-col items-center">
      {isEditing ? (
        <div className="flex flex-col fixed top-20 left-0 right-0">
          <h1 className="text-4xl font-black text-center">Edit your post</h1>
          <form onSubmit={handleSubmit} className="flex flex-col m-4 p-4 shadow-lg">
            <label className="mt-4 ml-4" htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              className="shadow-xl mt-4 ml-4 mr-4 p-2 h-10 border"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
            <label className="mt-4 ml-4" htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              className="h-50 shadow-xl border mt-4 ml-4 mr-4 p-2"
              value={formData.content}
              onChange={handleChange}
            />
            <label className="mt-4 ml-4" htmlFor="author">Author:</label>
            <input
              id="author"
              name="author"
              className="shadow-lg mt-2 mb-4 ml-4 w-100 border p-1"
              type="text"
              value={formData.author}
              onChange={handleChange}
            />
            <div className="flex gap-4 m-4">
              <button className="bg-black text-white rounded-lg p-2 hover:bg-gray-500" type="submit">
                Save
              </button>
              <button className="bg-gray-600 text-white rounded-lg p-2 hover:bg-gray-400" type="button" onClick={() => setIsEditing(false)}>
                Back to Posts
              </button>
            </div>
            {message && <p className="text-center mt-2">{message}</p>}
          </form>
        </div>
      ) : (
        <>
          <h1 className="text-4xl mt-4 font-black text-center">Edit posts</h1>
          {posts.map(post => (
            <div key={post._id} className="w-200 h-100 flex mt-10 flex-col items-center shadow-lg p-4">
              <p>{post.title}</p>
              <p>{post.content}</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-black text-white rounded-lg p-2 hover:bg-gray-500" onClick={() => handleEdit(post)}>Edit</button>
                <button className="bg-black text-white rounded-lg p-2 hover:bg-gray-500" onClick={() => handleDelete(post._id)}>Delete</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}