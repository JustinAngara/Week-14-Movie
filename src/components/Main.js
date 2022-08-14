import React from 'react';
import Footer from './Footer';
import Movie from './Movie'
export default class Main extends React.Component{
    render(){
        return(
            <div>
                <Movie{...{image:"https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",name:"Car",description:"Very cool guy",author:"james"}}/>
                
                <Footer />
            </div>
        );
    }
}