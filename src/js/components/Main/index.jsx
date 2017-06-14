import React, { Component, PropTypes} from "react"
import {connect} from "react-redux"
import Navbar from "../Navbar"
import redpandalogo from "../../../images/redpandalogo.png"

class Main extends Component {
    static propTypes = {
        children: PropTypes.node
    }
    render(){
        return (
            <div className="fluid-container">
                <Navbar />
                <img src={redpandalogo}/>
                <p className="grey-text">
                    Main Component - This is the starting component of our app. All the other componenets will be composed in this app.
                    By default component mentioned in the IndexRoute is the child component (Home component in this case).
                    if we change the route then the child component changes and that route component will be rendered.
                </p>
                <div className="row">
                    <div className="col s12 m12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => state
)(Main)
