import React, {Component} from "react"
import {Link} from "react-router"
import styles from "./NoMatch.css"
import classnames from "classnames"

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className={classnames("col s12 m8 offset-m2", styles.container)}>
                    <h3 className="blue-grey-text lighten-3 center-align">Page does not exist.</h3>
                    <p className="grey-text lighten-3">Looks like you are lost. This page you are trying to find does not exist. Make sure you are on the correct path. Please follow the link to return to home</p>
                    <p className="center-align"><Link to="/" className="blue-text center-align">Return to homepage</Link></p>
                </div>
            </div>
        )
    }
}
