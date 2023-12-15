import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";


const Root = () => {
    return (
        <div className="bg-[#f4f6f0] text-[#6D6D70]  min-h-screen"> 
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;