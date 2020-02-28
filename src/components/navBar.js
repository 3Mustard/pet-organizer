import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return (
            <div id="nav">
                <Link to={`/pets/`}>See All Pets</Link>
            </div>
        );
    }
}

export default  Navbar;