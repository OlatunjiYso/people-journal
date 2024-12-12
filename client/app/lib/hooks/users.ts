import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../data';

export function useUsers(page: number) {
  return useQuery({
    queryKey: ['users', page],
    queryFn: () => fetchUsers(page),
    retry: 2,
    staleTime: 30000, // Consider data fresh for 30 seconds
    //keepPreviousData: true
  });
}