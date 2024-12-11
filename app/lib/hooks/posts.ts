import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUserPosts, createPost, deletePost } from '../data';
import { Post } from '../definitions';

export function usePosts(userId: string) {
  const queryClient = useQueryClient();

  const userPosts = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchUserPosts(userId),
    retry: 2,
    staleTime: 30000
  });

  const deletePostMutation = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', userId] });
    }
  });

  const createPostMutation = useMutation({
    mutationFn: (data: { title: string; body: string }) =>
      createPost({...data, userId}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', userId] });
    }
  });

  return {
    userPosts,
    deletePost: deletePostMutation,
    createPost: createPostMutation
  };
}