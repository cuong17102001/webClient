import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialty from "../../../assets/images/specialty/co-xuong-khop.jpg"

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

  
class Specialty extends Component {
    

    
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
            <div className='slider specialty-slider'>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
