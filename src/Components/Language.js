import React from "react";
import '../App.css';
import img2 from '../Images/img2.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Language() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (<div className="Subject">
        <div className="heading2"><h1>Subject</h1></div>
        <div className="heading3"><p>Select the class to check your subject</p></div>
        <Carousel responsive={responsive}>
        
                <div className="grid-wrapper">
                    <img src={img2} alt="img" height='250' width='200' />
                    <p>EVS</p>
                </div>
                <div className="grid-wrapper">
                    <img src={img2} alt="img" height='250' width='200' />
                    <p>english</p></div>
                <div className="grid-wrapper">
                    <img src={img2} alt="img" height='250' width='200' />
                    <p>kannada</p></div>
                <div className="grid-wrapper">
                    <img src={img2} alt="img" height='250' width='200' />
                    <p>hindi</p></div>
            
        </Carousel>
        {/* <div className="wrapper">
            <div className="grid-wrapper">
                <img src={img2} alt="img" height='250' width='200' />
                <p>EVS</p>
            </div>
            <div className="grid-wrapper">
                <img src={img2} alt="img" height='250' width='200' />
                <p>english</p></div>
            <div className="grid-wrapper">
                <img src={img2} alt="img" height='250' width='200' />
                <p>kannada</p></div> */}

    </div>
    )

}

export default Language;