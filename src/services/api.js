const API_URL = import.meta.env.VITE_API_URL;

export async function getPosts() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createPost(post) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
}

export async function updatePost(id, post) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return res.json();
}

export async function deletePost(id) {
  console.log("ID in deletePost: ", id);
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
