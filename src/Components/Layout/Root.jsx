import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";


const Root = () => {
    return (
        <div className=" min-h-screen "> 
   
            <NavBar></NavBar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;