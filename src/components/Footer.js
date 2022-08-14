import React from 'react';


export default class Footer extends React.Component{
    
    render(){

        return(   
            // add necessary classes to make footer
            <div className="page-container">
                <div className="content-wrap"></div>

                <footer className="footer-copyright text-center py-3 footer">                    
                    © 2022 Copyright: Justin Angara 
                </footer>
            </div>
        );
    }
}
