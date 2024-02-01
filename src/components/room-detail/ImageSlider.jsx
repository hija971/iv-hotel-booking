import React, { useState, useEffect } from 'react';
import './ImageSlider.css'

const ImageSlider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Thay đổi thời gian lướt giữa các hình ảnh ở đây (3000ms = 3 giây)

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="image-slider mt-11">
            <button className="prev-button" onClick={prevSlide}>
                <i className="fa fa-chevron-left"></i>
            </button>
            <div className='image-content relative'>
                <img className="slide-image w-full" src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
                <h6 >Lorem Ipsum is simply dummy text of the printing and typesetting industry</h6>
            </div>
            <button className="next-button" onClick={nextSlide}>
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default ImageSlider;