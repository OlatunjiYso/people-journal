export const selectUsersTemplate = `
SELECT 
  users.*, 
  Addresses.street, 
  Addresses.state,
  Addresses.city,
  Addresses.zipcode
FROM 
  users
LEFT JOIN 
Addresses 
ON 
  users.id = Addresses.user_id
ORDER BY 
  users.name
LIMIT ?, ?;
`;

export const selectCountOfUsersTemplate = `
SELECT COUNT(*) as count
FROM users
`;

export const selectUserByIdTemplate = `
SELECT *
FROM users
WHERE ID = ?`;