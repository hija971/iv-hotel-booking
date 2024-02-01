import "./WidgetDeal.css"
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

const WidgetDeal = () => {
    const products = [
        {
            id: 1,
            name: 'Luxury ROOM FORM',
            price: '$260',
            aweBtn: 'VIEW MORE',
            image: 'https://landing.engotheme.com/html/lotus/demo/images/hotel/img-1.jpg',
        },
        {
            id: 2,
            name: 'Luxury ROOM FORM',
            price: '$260',
            aweBtn: 'VIEW MORE',
            image: 'https://landing.engotheme.com/html/lotus/demo/images/room/img-1.jpg',
        },
        {
            id: 3,
            name: 'Luxury ROOM FORM',
            price: '$260',
            aweBtn: 'VIEW MORE',
            image: 'https://landing.engotheme.com/html/lotus/demo/images/room/img-2.jpg',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex >= 0 ? newIndex : products.length - 1;
        });
    };

    return (
        <div className="widget widget_deal">
            <h4 className="widget-title">DEAL</h4>
            <div className="widget-deals">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className={`deal-item ${index === activeIndex ? 'active' : ''}`}
                    >
                        <div className="deal-img">
                            {index === activeIndex && (
                                <img src={product.image} alt="" className="deal-img-inner" />
                            )}
                            <div className="deal-text">
                                <h2>{product.name}</h2>
                                <p className="deal-price">{product.price}</p>
                                <Link to="/room-detail" className="deal-btn">{product.aweBtn}</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="deal-controls">
                    <button className="deal-prev" onClick={handlePrev}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="deal-next" onClick={handleNext}>
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WidgetDeal;



