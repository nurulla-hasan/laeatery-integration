import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Auth Pages",
    description: "Login, Signup, etc",
};

export default function AuthLayout({ children }) {
    return (
        <>
            <div
                className={`min-h-screen bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url('/image/auth-bg.png')" }}
            >
                <div>
                    <Link href="/" className="absolute p-2 rounded-full bg-black/50  backdrop-blur-sm top-10 left-10 font-poltawski">
                        <MoveLeft size={20} />
                    </Link>
                    {children}
                </div>
            </div>
        </>
    );
}
