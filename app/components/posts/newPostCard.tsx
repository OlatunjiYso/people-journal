interface NewPostCardProps {
    onClick: () => void;
  }
  
  export function NewPostCard({ onClick }: NewPostCardProps) {
    return (
      <button
        onClick={onClick}
        className="bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300 hover:border-gray-400 flex items-center justify-center h-[360px] w-full transition-colors"
      >
        <div className="text-center">
          <div className="text-4xl text-gray-400 mb-2">+</div>
          <div className="text-gray-500">New Post</div>
        </div>
      </button>
    );
  }