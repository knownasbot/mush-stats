import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
