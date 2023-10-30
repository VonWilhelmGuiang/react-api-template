import React from "react";
import { Routes } from "react-router-dom";
// core components
import UsersNavbar from "components/Navbars/UsersNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
//routes
import routes from "routes.js";
// helpers
import { filterRoutes,createRoutes } from "helpers/Navbars";


const Customer = (props) => {
    const mainContent = React.useRef(null);
    const current_routes = filterRoutes(routes, '/shopowner');
    const create_routes = createRoutes(current_routes)
    return (
        <>
            <Sidebar
                {...props}
                routes={current_routes}
                logo={{
                innerLink: "/admin/index",
                imgSrc: require("../assets/img/brand/company logo.png"),
                imgAlt: "...",
                }}
            />
            <div className="main-content" ref={mainContent}>
                <UsersNavbar />
                <Routes>
                    {create_routes}
                </Routes>
            </div>
        </>
    );
};

export default Customer;
