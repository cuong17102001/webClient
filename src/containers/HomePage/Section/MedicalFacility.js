import React, { Component } from 'react';

import { connect } from 'react-redux';
import "./MedicalFacility.scss";
import specialty from "../../../assets/images/specialty/co-xuong-khop.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" , padding: "auto"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }


class MedicalFacility extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
           
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            slidesToScroll: 1,
            autoplaySpeed: 2000
          };
        return (
            <div className='slider medicalfacility-slider'>
            <div className=' container'>
                <div className='slider-title'>
                    Chuyên Khoa
                </div>
                <Slider {...settings}>
                   
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                    <div className='slider-item'>
                        <img className='slider-img' src={specialty} />
                        <div className='slider-item-title'>Xương khớp</div>
                    </div>
                </Slider>
            </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
