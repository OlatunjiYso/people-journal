import { LoadingSpinner } from "../ui/loadingSpinner";

export function UserTableLoading() {
  return (
    <tr>
      <td colSpan={3}>
        <div className="py-20 flex justify-center">
          <LoadingSpinner />
        </div>
      </td>
    </tr>
  );
}