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
    const {i_img, heading, text} = this.props;
        return (
            <div className="page-content">
                <div className="heading">
                    {/* {i_img && <img src={i_img} className="i_img" alt="Pic.png"/>} */}
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>
            </div>
        )
    }

}

// const PageContent =(props)=> {
//     return (
//             <div className="page-content">
//                 <div className="heading">
//                     {props.showpicture && <img src={this.props.i_img} className="i_img"/>}
//                     <h1>{props.heading}</h1>
//                     <p>{props.text}</p>
//                 </div>
//             </div>
//         )
     
// }

export default PageContent