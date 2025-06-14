
import Navbar from "@/components/navbar/Navbar";
import PrivateRoute from "@/components/private-route/PrivateRoute";

export default function NoFooterLayout({ children }) {
    return (
        <>
            <PrivateRoute>
                <Navbar />
                {children}
            </PrivateRoute>
        </>
    );
}
