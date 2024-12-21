import { ToastContainer } from "react-toastify";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;