import PostCard from "./PostCard";

function PostsGrid({ posts }) {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}

export default PostsGrid;