import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/lib/apis/auth/auth'; 

export const useGetMe = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      if (!token) {
        throw new Error("No access token found. Please log in.");
      }
      const res = await getUserProfile();
      if (res.data && res.data.success) {
        return res.data.data;
      } else {
        throw new Error(res.data.message || "Failed to fetch user profile.");
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!token, 
  });
};