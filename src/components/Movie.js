import React from 'react';
import Star from './Star';
import ReviewList from './ReviewList';
import Comment from './comment'
export default class MovieInput extends React.Component{
    // creates a constructor in order to add proper images, name, desc, author
    constructor(props){
        super(props);
        this.state={
            image: props.image,
            name: props.name,
            description: props.description,
            author: props.author
        };
    }

    render(){
        return(
            // used flex class in order to bring add multiple movies and place it in an appropriate place if there is no more space 
            <div className="container flex">
                <div>
                {/* add image with proper height/width */}
                <img
                    height="350"
                    width="200"
                    src={this.state.image}
                    alt={this.state.name}
                />  
                    <br />
                    {/* adds additional info */}
                    <p>{this.state.name} (By {this.state.author})</p> 
                    <h1>Decsription: <br/> {this.state.description}</h1>  
                    
                    {/* adds customized star and review list*/}
                    <Star starCount={5}/>

                    <ReviewList />
                    {/* <Comment {...{author:"jaems",content:"hello"}}/> */}
                    
                </div>

            </div>
        );
    }
}