import React, { Component } from "react"
import {connect} from "react-redux"
import classnames from "classnames"
import styles from "./Home.css"

class Home extends Component {
    static propTypes = {

    }
    render(){
        return (
            <div>
                <div className="row">
                    <div className={classnames("col s12 m12", styles.bluetext)}>
                        Home Component
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state,
)(Home)
