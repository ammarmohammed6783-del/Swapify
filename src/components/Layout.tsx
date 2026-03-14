import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Navigation from "./Navigation";

function Layout() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Sticky Top Navigation Bar */}
            <Nav />
            
            {/* The wrapper layout for sidebar and main content */}
            <div className="flex">
                {/* Sticky Left Sidebar Navigation */}
                <Navigation />
                
                {/* Main Page Content */}
                <div className="flex-1 w-full overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
