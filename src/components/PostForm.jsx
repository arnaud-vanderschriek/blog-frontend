import { useState } from "react"
import { createPost } from "../services/api";

export default function PostForm() {
 const [value, setValue] = useState({
    title: "",
    content: "",
    author: "",
  });

const change = (e, name) => {
    setValue((prev) => ({
      ...prev,
      [name]: e, 
    }));
  };

const submit = async (e) => {
    e.preventDefault(); 
    try {
      value["createdAt"] = new Date()
      await createPost(value);
      alert("Article créé avec succès !");
      setValue({ title: "", content: "", author: "" }); 
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la création de l'article");
    }
  }; return (
    <div class="flex flex-col fixed top-20 left-0 right-0">
      <h1 class="text-4xl font-black text-center">Send your post.</h1>
      <form action="POST" onSubmit={submit} class="flex flex-col m-4 p-4 shadow-lg" >
        <label class="mt-4 ml-4">Title:</label>
        <input class="shadow-xl mt-4 ml-4 mr-4 p-2 h-10 border-1" type="text" onChange={(e) => change(e.target.value, "title") } />
        <label class="mt-4 ml-4">Content:</label>
        <textarea class="h-50 shadow-xl border-1 mt-4 ml-4 mr-4 p-2" name="" id="" onChange={(e) => change(e.target.value, "content")}></textarea>
        <label class="mt-4 ml-4">Author:</label>
        <input class="shadow-lg mt-2 mb-4 ml-4 w-100 border-1 p-1" type="text" onChange={(e) => change(e.target.value, "author")}/>
        <button class="bg-black text-white rounded-lg p-2 mb-2 hover:bg-gray-500 w-50 m-4" type="submit">Envoyez</button>
      </form>
    </div>
  );
}