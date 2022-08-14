import React from "react";
export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            author:props.author,
            content:props.content
        };
    }
    render(){
        return(
            <div className="post">
                <div className="comment">
                {/* header */}
                Author: {this.state.author}
                    <div className="comment"></div>
                        {/* content */}
                        Message: {this.state.content}
                </div>
            </div>
        );
    }
}
