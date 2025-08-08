import { ReactComponentProps } from "@/interfaces"
import Footer from "./Footer";
import Header from "./Header";
import Home from "@/pages";

const Layout: React.FC<ReactComponentProps> = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <Home/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;