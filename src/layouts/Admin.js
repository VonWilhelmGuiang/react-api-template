/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import React from "react";
import { Routes } from "react-router-dom";
// core components
import UsersNavbar from "components/Navbars/UsersNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
//routes
import routes from "routes.js";
// helpers
import { filterRoutes,createRoutes } from "helpers/Navbars";


const Admin = (props) => {
    const mainContent = React.useRef(null);
    const current_routes = filterRoutes(routes, '/admin');
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

export default Admin;
