import { Post } from '@/app/lib/definitions';
import { PostCard } from './postCard';
import { NewPostCard } from './newPostCard';

interface PostGridProps {
  posts: Post[];
  onNewPost: () => void;
  onDeletePost: (postId: string) => void;
  isDeleting: boolean;
}

export function PostGrid({ posts, onNewPost, onDeletePost, isDeleting }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NewPostCard onClick={onNewPost} />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={onDeletePost}
          isDeleting={isDeleting}
        />
      ))}
    </div>
  );
}