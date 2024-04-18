import { Navbar } from "./";

const Layout = ({ children }) => {

    return (
        <>
            <div>
                <Navbar />
                <div className="layoutContainer">{children}</div>
            </div>
        </>
    );
};

export default Layout;