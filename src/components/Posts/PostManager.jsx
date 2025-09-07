import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../../services/api";
import PostList from "./PostList";
import PostForm from "./PostForm";

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error("❌ Failed to load posts:", err);
      setMessage("Error loading posts.");
    }
  }

  async function handleDelete(id) {
    try {
      await deletePost(id);
      setMessage("✅ Post deleted successfully.");
      loadPosts();
    } catch (err) {
      console.error("❌ Delete error:", err);
      setMessage("Error deleting post.");
    }
  }

  function handleEdit(post) {
    setSelectedPost(post);
  }

  function handleCancel() {
    setSelectedPost(null);
    setMessage("");
  }

  return (
    <div className="mt-20 flex flex-col items-center">
      {selectedPost ? (
        <PostForm
          post={selectedPost}
          onSuccess={() => {
            loadPosts();
            setSelectedPost(null);
            setMessage("✅ Post updated successfully.");
          }}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <h1 className="text-4xl mt-4 font-black text-center">Manage Posts</h1>
          {message && <p className="mt-2 text-center">{message}</p>}
          <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
}