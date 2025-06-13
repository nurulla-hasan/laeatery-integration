"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export default function RootLayoutClient({ children }) {


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={`relative min-h-screen bg-[#E9E7E3]`}>
          {children}
        </div>
      </QueryClientProvider>
    </>
  );
}