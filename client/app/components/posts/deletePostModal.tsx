import { Post } from "@/app/lib/definitions";

interface DeletePostModalProps {
  post: Post;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
}

export function DeletePostModal({ post, onClose, onConfirm, isDeleting }: DeletePostModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Delete Post</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this post? This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50 flex items-center"
            disabled={isDeleting}
          >
            {isDeleting ? (
                <span className="ml-2">Deleting...</span>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}