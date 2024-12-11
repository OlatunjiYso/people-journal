import { NewPost, Post, User, UserPostsResponse } from "./definitions";
import { makeDeleteRequest, makeGetRequest, makePostRequest } from "./httpClient";

function delay(time: number){
    return new Promise((resolve, _)=> setTimeout(resolve, time));
  }
export async function fetchUsers(
    page: number
  ): Promise<{ users: User[]; total: number }> {
    const url =`users?pageNumber=${page}`;
    const response = await makeGetRequest(url);
    return response.data;
  }
  
  export async function fetchUserPosts(userId: string): Promise<UserPostsResponse> {
    const url = `posts/?userId=${userId}`;
    const response = await makeGetRequest(url);
    return response.data;
  }

  export async function createPost(data: NewPost): Promise<Post> {
    const url = `posts/`;
    const response = await makePostRequest(url, data);
    return response.data;
  }
  
  export async function deletePost(postId: string): Promise<void> {
    const url = `posts/${postId}/`;
    const response = await makeDeleteRequest(url);
    return response.data;
  }
  