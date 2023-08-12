import Navbar from "../navbar";
import Footer from "../footer";
import { WebThreeProvider } from "../provider";

export default function Layout({children}) {

    return (
        <>
            {/* <WebThreeProvider> */}
                <Navbar />
                <div className="relative bg-white overflow-hidden">
                    <div className="relative max-w-7xl mx-auto px-4">
                        <div className="fit">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            {/* </WebThreeProvider> */}
        </>
    );
}