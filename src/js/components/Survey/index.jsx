import React, { Component, PropTypes} from "react"
import {connect} from "react-redux"
import classnames from "classnames"
import Home from "../Home"
import Login from "../Login"
import Header from "../Header"
import styles from "./Survey.css"

class Survey extends Component {
    static propTypes = {
        token: PropTypes.string,
        screenName: PropTypes.string,
        children: PropTypes.node,
        loading: PropTypes.bool
    }
    renderLoader = () => {
        if (this.props.loading)
            return (
                <div className={styles.loaderContainer}>
                    <div className={classnames("preloader-wrapper active", styles.loader)}>
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        return null
    }
    render(){
        const { token, screenName } = this.props
        return (
            <div className="fluid-container">
                <Header screenName={screenName}/>
                {token ? <Home>{this.props.children ? this.props.children : null}</Home> : <Login />}
                {this.renderLoader()}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        token: state.token && state.token !== "" ? true : false,
        screenName: state.screenName,
        loading: state.loading
    })
)(Survey)
