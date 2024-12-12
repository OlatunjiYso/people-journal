import { connection } from "../connection";
import { selectPostsTemplate, addPostTemplate, deletePostByIdTemplate } from "./query-tamplates";
import { Post } from "./types";

export const getPosts = (userId: string): Promise<Post[]> =>
  new Promise((resolve, reject) => {
    connection.all(selectPostsTemplate, [userId], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results as Post[]);
    });
  });

  export const addPost = (post: Post): Promise<void> => 
    new Promise((resolve, reject)=> {
      const {id, user_id, title, body, created_at } = post;
      connection.run(addPostTemplate, [id, user_id, title, body, created_at], (error:any) => {
        if (error) {
          reject(error);
        }
        resolve();
      })
    });

    export const deletePostById = (id: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        connection.run(deletePostByIdTemplate, [id], (error) => {
          if (error) {
            return reject(error);
          }
          resolve();
        });
      });
    };
    
