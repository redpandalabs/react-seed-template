import React, {Component} from "react"
import {Link} from "react-router"

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="" className="left brand-logo">Brand Logo</a>
                    <ul id="nav-mobile" className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutus">About US</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}
