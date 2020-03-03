import React from 'react';

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
                    <li><a href="/pets">Pets</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;