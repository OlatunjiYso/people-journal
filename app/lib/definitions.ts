export interface User {
    id: string;
    name: string;
    email: string;
    street: string;
    state: string;
    city: string;
    zipcode: string;
  }
  
  export interface Post {
    id: string;
    userId: number;
    title: string;
    body: string;
  }

  export interface ApiResponse {
    data: any;
    error: Error | null;
    status: number;
    statusText: string;
    ok: boolean;
  }

  export interface NewPost {
    userId: string;
    title: string;
    body: string;
  }

  export type UserInfo = Pick<User, 'name' | 'email'>;

  export interface UserPostsResponse {
    posts: Post[];
    userInfo: UserInfo;
  }