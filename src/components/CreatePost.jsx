import { useState } from "react";

const API_BASE = "http://localhost:3000";

function CreatePost({ onPostCreated }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !caption.trim()) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      const response = await fetch(`${API_BASE}/create-post`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      setCaption("");
      setImage(null);
      e.target.reset();

      if (onPostCreated) {
        onPostCreated();
      }
    } catch (err) {
      setError("Failed to upload post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">
        Create New Post
      </h2>

      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-sm text-slate-500 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-full file:border-0 
              file:text-sm file:font-semibold 
              file:bg-indigo-50 file:text-indigo-700 
              hover:file:bg-indigo-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Caption
          </label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write something..."
            required
            className="w-full p-3 border border-slate-200 rounded-lg 
              focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold 
            hover:bg-indigo-700 disabled:bg-slate-400"
        >
          {loading ? "Uploading..." : "Publish Post"}
        </button>
      </form>
    </section>
  );
}

export default CreatePost;