import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PrivateRoute from "@/components/private-route/PrivateRoute";

export default function HomePageLayout({ children }) {
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
