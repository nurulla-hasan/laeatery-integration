import { Suspense } from 'react'; 
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-[#333333]">
      Loading password reset form...
    </div>
  );
};

const ResetPasswordPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ResetPasswordForm/>
      </Suspense>
    </>
  );
};

export default ResetPasswordPage;