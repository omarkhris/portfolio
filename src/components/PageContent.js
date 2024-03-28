import "./PageContent.css"

import React, { Component } from 'react'

class PageContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPicture : false
        };
    }

    render() {
    const {heading, text} = this.props;
        return (
            <div className="page-content">
                <div className="heading">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

}


export default PageContent