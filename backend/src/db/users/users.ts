import { connection } from "../connection";

import {
  selectCountOfUsersTemplate,
  selectUsersTemplate,
  selectUserByIdTemplate
} from "./query-templates";
import { User } from "./types";

export const getUsersCount = (): Promise<number> =>
  new Promise((resolve, reject) => {
    connection.get<{ count: number }>(
      selectCountOfUsersTemplate,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.count);
      }
    );
  });

export const getUserById = (id: string): Promise<User> => 
  new Promise((resolve, reject)=> {
    connection.get<User>(
      selectUserByIdTemplate,
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  })

export const getUsers = (
  pageNumber: number,
  pageSize: number
): Promise<User[]> =>
  new Promise((resolve, reject) => {
    connection.all<User>(
      selectUsersTemplate,
      [pageNumber * pageSize, pageSize],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
