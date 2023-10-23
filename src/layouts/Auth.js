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
import { Route, Routes } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";
import routes from "routes.js";

const Auth = (props) => {
    const mainContent = React.useRef(null);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            console.log(prop)
            if (prop.layout === "/auth") {
                return (
                    <Route path={prop.path} element={prop.component} key={key} exact />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
        <div className="main-content bg-default" ref={mainContent}>
            <div className="header bg-gradient-success py-7 py-lg-8">
                <div className="separator separator-bottom separator-skew zindex-100" style={{bottom:'-2px'}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                        >
                        <polygon
                            className="fill-default"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </div>
            {/* Page content */}
            <Container className="mt--9" style={{height:'55em'}}>
                <Row className="justify-content-center">
                    <Routes>
                        {getRoutes(routes)}
                    </Routes>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Auth;
