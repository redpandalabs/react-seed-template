import React, { Component, PropTypes } from "react"
import {connect} from "react-redux"
import Notification from "../Notification"
import setScreenName from "../../actions/setScreenName"
import fetchPendingSurvey from "../../actions/fetchPendingSurvey"
import hideNotification from "../../actions/hideNotification"
import Menubar from "../Menubar"
import classnames from "classnames"
import styles from "./Home.css"

class Home extends Component {
    static propTypes = {
        setScreenName: PropTypes.func,
        children: PropTypes.node,
        token: PropTypes.string,
        fetchPendingSurvey: PropTypes.func,
        notifications: PropTypes.object,
        hideNotification: PropTypes.func,
    }
    componentWillMount = () => {
        this.props.setScreenName("Home")
        this.props.fetchPendingSurvey(this.props.token)
    }
    hideNotification = () => {
        this.props.hideNotification()
    }
    renderNotification = () => {
        return <Notification showNotification={this.props.notifications} hideNotification={this.hideNotification}/>
    }
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12">
                        <Menubar />
                        <div className={classnames("row", styles.container)}>
                            <div className="col s12 m10 offset-m2 l10 offset-l2">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderNotification()}
            </div>
        )
    }
}

export default connect(
    state => ({
        token: state.token,
    }),
    {setScreenName, fetchPendingSurvey, hideNotification}
)(Home)
