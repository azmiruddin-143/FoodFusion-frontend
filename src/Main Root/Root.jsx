import { ToastContainer } from "react-toastify";
import Header from "../Components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration/>
        </div>
    );
};

export default Root;