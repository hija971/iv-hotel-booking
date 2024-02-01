
import "./Contact.css"
import React, { useState } from 'react';

const ContactLocation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <button
                className={`btn-collapse ${isExpanded ? '' : 'collapsed'}`}
                onClick={toggleCollapse}

            >
                OTHER LOCATION{' '}
                <span className="fa fa-angle-down"></span>
            </button>
            <div
                className={`collapse ${isExpanded ? 'show' : ''}`}
                style={{ height: isExpanded ? 'auto' : 0 }}

            >
                <div className="location-group">
                    <h6>NORTH AMERICA</h6>
                    <span>Caribbean, French West Indies</span>

                    <div className="location-item flex mb-5 " data-location="39.0926986,-94.5747324">
                        <div className="img ">
                            <img className="relative" src="https://landing.engotheme.com/html/lotus/demo/images/contact/img-1.jpg" alt="#"  />
                            <i className="fa fa-map-marker absolute " style={{color: "#e1bd85",}}></i>
                        </div>
                        <div className="text ml-3">
                            <address>PO Box 4077, 2584 St Martin, CEDEX, French West Indies</address>
                            <p>
                                Tel: 858 634 8975 <br />
                                Fax: +1 212 854 7039
                            </p>
                        </div>
                    </div>

                    <div className="location-item flex mb-5" data-location="39.0912284,-94.5743515">
                        <div className="img">
                            <img className="relative" src="https://landing.engotheme.com/html/lotus/demo/images/contact/img-2.jpg" alt="#" />
                            <i className="fa fa-map-marker absolute" style={{color: "#e1bd85",}}></i>
                        </div>
                        <div className="text ml-3">
                            <address>PO Box 4077, 2584 St Martin, CEDEX, French West Indies</address>
                            <p>
                                Tel: 858 634 8975 <br />
                                Fax: +1 212 854 7039
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactLocation;