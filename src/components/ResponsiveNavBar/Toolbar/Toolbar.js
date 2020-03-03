import React from 'react';
import {Link} from "react-router-dom";

import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar-toggle-button">
                <SideDrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to={`/pets/`}>All Pets</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;