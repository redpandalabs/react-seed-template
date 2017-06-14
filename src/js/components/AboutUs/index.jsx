import React, { Component } from "react"
import {connect} from "react-redux"

class AboutUs extends Component {
    static propTypes = {

    }
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12">
                        AboutUs Component
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state,
)(AboutUs)
