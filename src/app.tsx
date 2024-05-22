import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/navbar/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Analytics />
        </>
    );
}
