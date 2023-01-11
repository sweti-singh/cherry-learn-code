import React from "react";
import '../App.css';
import img2 from '../Images/img2.png'

function Homepage(){
    return(<div className="Homepage">
            <div className="Heading">
                <h1 style={{fontSize:100}}>1 to 5 Standard Activity based</h1>
                <p style={{fontSize:20}}>nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
                nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
            </div>
            <div className="img2"><img src={img2} alt='img'/></div>
          
        </div>
    )

}

export default Homepage;