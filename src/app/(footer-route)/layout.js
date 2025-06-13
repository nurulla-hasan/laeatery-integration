

// export const metadata = {
//     title: "Auth Pages",
//     description: "Login, Signup, etc",
// };

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function FooterLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
