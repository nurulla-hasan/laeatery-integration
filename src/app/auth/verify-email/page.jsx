
import { Suspense } from 'react';
import VerifyEmailBox from "@/components/auth/VerifyEmailBox";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-[#333333]">
      Loading email verification form...
    </div>
  );
};

const VerifyEmailPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <VerifyEmailBox/>
      </Suspense>
    </>
  );
};

export default VerifyEmailPage;