import React from "react"
import Typed from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="header-info">
               
                <Typed
                    strings={['LivePhotos x Polaroid']}
                    typeSpeed={80}
                    className="type-text"
                    loop
                />
                <br/>
 
                <Typed
                strings={[
                    'vivd photo',
                    'keep every moment',
                    'blight your life']}
                    typeSpeed={40} //spell
                    backSpeed={50} //reverse                   
                    loop  //non stop
                    >
                   
                </Typed>
                <a href="#" className="btn-main-offeer">click here</a>
            </div>
        </div>
    )
}
