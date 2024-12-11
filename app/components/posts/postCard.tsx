import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Post } from '@/app/lib/definitions';
import { DeletePostModal } from './deletePostModal';

interface PostCardProps {
  post: Post;
  onDelete: (postId: string) => void;
  isDeleting?: boolean;
}

export function PostCard({ post, onDelete, isDeleting }: PostCardProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
  
    return (
      <>
        <div className="bg-white rounded-lg shadow-md h-[360px] flex flex-col">
          <div className="p-6 flex-1">
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setShowDeleteModal(true)}
                className="text-red-500 hover:text-red-700"
                disabled={isDeleting}
              >
                <Trash2 size={20} />
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 line-clamp-8">{post.body}</p>
          </div>
        </div>
  
        {showDeleteModal && (
          <DeletePostModal
            post={post}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={() => {
              onDelete(post.id);
              setShowDeleteModal(false);
            }}
            isDeleting={isDeleting}
          />
        )}
      </>
    );
  }