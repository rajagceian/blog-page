import { useEffect, useState } from "react";
import PostsGrid from "../components/PostsGrid";

const API_BASE = "http://localhost:3000";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/posts`);
      if (!response.ok) throw new Error("Failed");

      const result = await response.json();
      setPosts(result.data ? [...result.data].reverse() : []);
    } catch (err) {
      setError("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="space-y-6">
      {loading && (
        <p className="text-center text-slate-400">
          Loading feed...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {!loading && !posts.length && (
        <p className="text-center text-slate-500">
          No posts yet.
        </p>
      )}

      <PostsGrid posts={posts} />
    </div>
  );
}

export default PostsPage;