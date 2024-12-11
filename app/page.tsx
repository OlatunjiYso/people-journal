"use client";
import { useState } from "react";
import { UserTable } from "./components/users/userTable";
import { Pagination } from "./components/ui/pagination";
import { ErrorMessage } from "./components/ui/errorMessage";
import { useUsers } from "./lib/hooks/users";

const UsersPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useUsers(page);
  const users = data?.users || [];
  if (error) {
    return (
      <>
        <h1 className="text-4xl font-bold mb-8">Users</h1>
        <ErrorMessage
          message="Failed to load users. Please try again."
          onRetry={() => refetch()}
        />
      </>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <UserTable users={users} isLoading={isLoading} />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil((data?.total || 0) / 4)}
        onPageChange={setPage}
      />
    </>
  );
};

export default UsersPage;
