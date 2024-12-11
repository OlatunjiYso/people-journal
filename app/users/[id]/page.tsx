"use client";

import { useState } from 'react';
import { use } from 'react';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import { PostGrid } from '@/app/components/posts/postGrid';
import { UserDetailsHeader } from '@/app/components/users/userDetailsHeader';
import { NewPostModal } from '@/app/components/posts/newPostModal';
import { LoadingSpinner } from '@/app/components/ui/loadingSpinner';
import { ErrorMessage } from '@/app/components/ui/errorMessage';
import { usePosts } from '@/app/lib/hooks/posts';
  

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  
  const { 
    userPosts: { data, isLoading, error, refetch },
    deletePost: deleteMutation,
    createPost: createMutation
  } = usePosts(id);

  const posts = data?.posts || [];
  const userInfo = data?.userInfo;

  if (!userInfo && !isLoading) {
    return <div>User not found</div>;
  }

  if (error) {
    return (
      <>
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="mr-2" size={20} />
          Back to Users
        </Link>
        <ErrorMessage 
          message="Failed to load user posts. Please try again." 
          onRetry={() => refetch()}
        />
      </>
    );
  }

  const handleSubmit = (title:string, body:string)=> {
    createMutation.mutate({ title, body }, {
        onSuccess: () => {
          setShowNewPostModal(false);
        },
      });
  }
  return (
    <>
      <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Users
      </Link>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <UserDetailsHeader
            name={userInfo?.name || ''}
            email={userInfo?.email || ''}
            postCount={posts?.length || 0}
          />

          <PostGrid
            posts={posts}
            onNewPost={() => setShowNewPostModal(true)}
            onDeletePost={(postId) => deleteMutation.mutate(postId)}
            isDeleting={deleteMutation.isPending}
          />
        </>
      )}

      {showNewPostModal && (
        <NewPostModal
          onClose={() => setShowNewPostModal(false)}
          onSubmit={handleSubmit}
          isSubmitting={createMutation.isPending}
        />
      )}

      {createMutation.isPending && <LoadingSpinner />}
    </>
  );
}


export default UserDetailsPage;