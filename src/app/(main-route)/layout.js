

// export const metadata = {
//     title: "Auth Pages",
//     description: "Login, Signup, etc",
// };

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PrivateRoute from "@/components/private-route/PrivateRoute";

export default function MainRouteLayout({ children }) {
    return (
        <>
            <PrivateRoute>
                <Navbar />
                {children}
                <Footer />
            </PrivateRoute>
        </>
    );
}
