import React from 'react';
import Slider from 'react-slick';

var SimpleSlider = React.createClass({
    render: function () {
        var settings = {
            dots: true,
            dotsClass: "nav-dots",
            arrows: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        };
        return (
            <Slider{...settings}>
                <div><img src="./images/slider-images/img-qut.jpg"></img></div>
                <div><img src="./images/slider-images/img-city.jpg"></img></div>
                <div><img src="./images/slider-images/img-mountains.jpg"></img></div>
                <div><img src="./images/slider-images/img-gardens.jpg"></img></div>
            </Slider>
        );
    }
});

export default SimpleSlider