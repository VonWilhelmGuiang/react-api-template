import {Route} from "react-router-dom";
import { NavLink as NavLinkRRD } from "react-router-dom";
import {
    NavItem,
    NavLink,}
from "reactstrap";
/*
    params
        routes  
            : array of objects
            : objects should have the following keys
                path: "/index",
                name: "Dashboard",
                icon: "ni ni-tv-2 text-primary",
                component: <Index />,
                layout: "/admin",
        
        user_layout
            : string
            : url url of the user such as ('/admin', '/customer' , '/shopowner')
*/
export const filterRoutes = (routes, user_path) => routes ? routes?.filter((x)=> x.layout === user_path): []

/*
    params
        routes  
            : array of objects
            : objects should have the following keys
                path: "/index",
                name: "Dashboard",
                icon: "ni ni-tv-2 text-primary",
                component: <Index />,
                layout: "/admin",
*/
export const createRoutes = (routes) => routes ? routes?.map((prop, key) => <Route path={prop.path} element={prop.component} key={key} exact />) : [];

/*
    params
        routes  
            : array of objects
            : objects should have the following keys
                path: "/index",
                name: "Dashboard",
                icon: "ni ni-tv-2 text-primary",
                component: <Index />,
                layout: "/admin",    

        closeCollapse
            : function
            : sets a state for collapsable to close

*/
export const createLinks = (routes, closeCollapse) => {
    return routes.map((prop, key) => {
        return (
            <NavItem key={prop.name}>
                <NavLink
                    to={prop.layout + prop.path}
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                >
                    <i className={prop.icon} />
                    {prop.name}
                </NavLink>
            </NavItem>
        );
    });
};