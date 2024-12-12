import { User } from "@/app/lib/definitions";
import { useRouter } from "next/navigation";
import { UserTableLoading } from "./userTableLoading";

interface UserTableProps {
  users: User[];
  isLoading: boolean;
}

export function UserTable({ users, isLoading }: UserTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg text-md font-medium text-gray-600 border-collapse border border-gray-200">
        <thead className="">
          <tr className="divide-gray-200">
            <th className="px-6 py-3 text-left tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left tracking-wider ">
              Email Address
            </th>
            <th className="px-6 py-3 text-left w-[392px] ">Address</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {isLoading ? (
            <UserTableLoading />
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{(user.email || "").toLowerCase()}</td>
                <td className="px-6 py-4 max-w-[392px] overflow-hidden text-ellipsis whitespace-nowrap">{`${
                  user.street || ""
                }, ${user.state || ""}, ${user.city || ""}, ${
                  user.zipcode || ""
                } `}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
