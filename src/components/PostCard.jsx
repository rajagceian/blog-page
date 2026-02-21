function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

      {/* Header (Profile section) */}
      <div className="flex items-center gap-3 p-3">
        <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          U
        </div>
        <div>
          <p className="text-sm font-semibold">username</p>
          <p className="text-xs text-slate-400">Just now</p>
        </div>
      </div>

      {/* Image - 1:1 Aspect Ratio */}
      <div className="w-full aspect-square bg-black">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="p-3 space-y-2">
        <div className="flex gap-4 text-xl">
          <button className="hover:text-red-500 transition">❤️</button>
          <button className="hover:text-indigo-500 transition">💬</button>
          <button className="hover:text-indigo-500 transition">📤</button>
        </div>

        {/* Caption */}
        <p className="text-sm">
          <span className="font-semibold mr-2">username</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}

export default PostCard;