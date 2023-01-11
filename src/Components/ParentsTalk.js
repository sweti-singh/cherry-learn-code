import { Carousel } from "react-bootstrap";
import '../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ParentsTalk() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
            <h1 className="heading4">Parents Talk</h1>
            <div className="slider">
            <Slider {...settings}>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
                <div className="container">
                    <h1>Tulsi(mother)</h1>
                    <p>Parents</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.</p>
                </div>
            </Slider>
            </div>
        </div>

    )

}

export default ParentsTalk;