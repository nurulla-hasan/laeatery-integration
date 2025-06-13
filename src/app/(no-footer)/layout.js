
import Navbar from "@/components/navbar/Navbar";

export default function NoFooterLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
