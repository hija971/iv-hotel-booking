import React, { useState } from 'react';
import "./RoomDetailTab.css"
function RoomDetailTab() {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto border-y-2 pb-5 pt-5">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <div className="flex flex-col">
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'overview' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('overview')}
                        >
                            OVERVIEW
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'amenities' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('amenities')}
                        >
                            AMENITIES
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'package' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('package')}
                        >
                            PACKAGE
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'rates' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('rates')}
                        >
                            RATES
                        </button>
                        <button
                            className={`p-4 pl-0 text-start font-bold border-b border-gray-300 focus:outline-none ${activeTab === 'calendar' ? 'text-[#e1bd85]' : ''
                                }`}
                            onClick={() => handleTabClick('calendar')}
                        >
                            CALENDAR
                        </button>
                    </div>
                </div>
                <div className="col-span-3">
                    {/* Nội dung tương ứng với tab được chọn */}
                    {activeTab === 'overview'
                        && <div className="overview p-4 pr-0">
                            <div className='room-detail_overview'>
                                <h5 className='uppercase font-medium mb-2'>de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                <p>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                                <div className='grid grid-cols-2 gap-4 mt-4'>
                                    <div>
                                        <h6 className="font-medium">SPECIAL ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Max: 4 Person(s)</li>
                                            <li>Size: 35 m2 / 376 ft2</li>
                                            <li>View: Ocen</li>
                                            <li>Bed: King-size or twin beds</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">SERVICE ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Oversized work desk</li>
                                            <li>Hairdryer</li>
                                            <li>Iron/ironing board upon request</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    {activeTab === 'amenities' &&
                        <div className="amenities p-4 pr-0 ">
                            <div className='room-detail_amenities'>
                                <p className='text-base font-medium'>Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations, superb amenities, genuine hospitality and dedicated service for an elevated experience in the Rocky Mountains.</p>
                                <div className='grid grid-cols-3 gap-4 pt-5'>
                                    <div>
                                        <h6 className="font-medium">LIVING ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Oversized work desk</li>
                                            <li>Hairdryer</li>
                                            <li>Iron/ironing board upon request</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">KITCHEN ROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>AM/FM clock radio</li>
                                            <li>Voicemail</li>
                                            <li>High-speed Internet access</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">BALCONY</h6>
                                        <ul className="list-disc pl-6">
                                            <li>AM/FM clock radio</li>
                                            <li>Voicemail</li>
                                            <li>High-speed Internet access</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">BEDROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Coffee maker</li>
                                            <li>25 inch or larger TV</li>
                                            <li>Cable/satellite TV channels</li>
                                            <li>AM/FM clock radio</li>
                                            <li>Voicemail</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">BATHROOM</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Dataport</li>
                                            <li>Phone access fees waived</li>
                                            <li>24-hour Concierge service</li>
                                            <li>Private concierge</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-medium">Oversized work desk</h6>
                                        <ul className="list-disc pl-6">
                                            <li>Dataport</li>
                                            <li>Phone access fees waived</li>
                                            <li>24-hour Concierge service</li>
                                            <li>Private concierge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    {activeTab === 'package' &&
                        <div className="p-4 pr-0">
                            <div className='package'>
                                <div className='room-detail_package'>
                                    <div className='room-package_items'>
                                        <div className='grid grid-cols-6 gap-4'>
                                            <div className='col-start-1 col-span-5'>
                                                <h4 className="font-medium">PACKAGE STANDAR</h4>
                                                <p className='text-pack'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            </div>
                                            <div className='room-package_price col-span-1 text-end'>
                                                <p className='price'><span className="amout">$260</span> / Package</p>
                                                <a href="#" className="awe-btn2">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='room-package_item'>
                                        <div className='grid grid-cols-6 gap-4'>
                                            <div className='col-start-1 col-span-5'>
                                                <h4 className="font-medium">PACKAGE STANDAR</h4>
                                                <p className='text-pack'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            </div>
                                            <div className='room-package_price col-span-1 text-end'>
                                                <p className='price'><span className="amout">$260</span> / Package</p>
                                                <a href="#" className="awe-btn2">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-6 gap-4'>
                                            <div className='col-start-1 col-span-5'>
                                                <h4 className="font-medium">PACKAGE STANDAR</h4>
                                                <p className='text-pack'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            </div>
                                            <div className='room-package_price col-span-1 text-end'>
                                                <p className='price'><span className="amout">$260</span> / Package</p>
                                                <a href="#" className="awe-btn2">Book package</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    {activeTab === 'rates' &&
                        <div className="p-4 pt-0 pr-0 room-detail_rates">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 text-start">Rate Period</th>
                                        <th className="border px-4 py-2">Nightly</th>
                                        <th className="border px-4 py-2">Weekend Night</th>
                                        <th className="border px-4 py-2">Weekly</th>
                                        <th className="border px-4 py-2">Monthly</th>
                                        <th className="border px-4 py-2">Event</th>
                                    </tr>
                                </thead>
                                <tbody><tr>
                                    <td className="border px-4 py-2">
                                        <h6 className="font-medium">Spring/Summer Season</h6>
                                        <ul className="pl-4">
                                            <li>Jun 1 - Aug 31</li>
                                            <li>3 night minimum stay</li>
                                        </ul>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <p className="price text-center"><span className="amout text-center">$320</span></p>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <p className="price text-center"><span className="amout text-center">$23</span></p>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <p className="price text-center"><span className="amout text-center">$120</span></p>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <p className="price text-center"><span className="amout text-center">$100</span></p>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <p className="price text-center"><span className="amout text-center">$89</span></p>
                                    </td>
                                </tr>
                                    <tr>
                                        <td className="border px-4 py-2">
                                            <h6 className="font-medium">Summer/Fall Season</h6>
                                            <ul className="pl-4">
                                                <li>Jun 1 - Aug 31</li>
                                                <li>3 night minimum stay</li>
                                            </ul>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$320</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$23</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$120</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$100</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$89</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2">
                                            <h6 className="font-medium">Christmas Season</h6>
                                            <ul className="pl-4">
                                                <li>Jun 1 - Aug 31</li>
                                                <li>3 night minimum stay</li>
                                            </ul>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$320</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$23</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$120</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$100</span></p>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <p className="price text-center"><span className="amout text-center">$89</span></p>
                                        </td>
                                    </tr>
                                </tbody></table>

                        </div>}
                    {activeTab === 'calendar' &&
                        <div className="p-4 pr-0 pt-0 calendar">
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <div className="calendar_custom">
                                        <div className="calendar_title">
                                            <span className="calendar_month">JULY</span>
                                            <span className="calendar_year">2023</span>
                                            <a href="#" className="calendar_prev calendar_corner"><i className="lotus-icon-left-arrow"></i></a>
                                        </div>
                                        <table className="calendar_tabel">
                                            <thead>
                                                <tr>
                                                    <th>Su</th>
                                                    <th>Mo</th>
                                                    <th>Tu</th>
                                                    <th>We</th>
                                                    <th>Th</th>
                                                    <th>Fr</th>
                                                    <th>Sa</th>
                                                </tr>
                                            </thead>
                                            <tbody><tr>
                                                <td></td>
                                                <td className="apb-calendar_current-date">
                                                    <a href="#"><small>1</small></a>
                                                </td>
                                                <td><a href="#"><small>2</small></a></td>
                                                <td><a href="#"><small>3</small></a></td>
                                                <td><a href="#"><small>4</small></a></td>
                                                <td><a href="#"><small>5</small></a></td>
                                                <td><a href="#"><small>6</small></a></td>
                                            </tr>
                                                <tr>
                                                    <td><a href="#"><small>7</small></a></td>
                                                    <td><a href="#"><small>8</small></a></td>
                                                    <td><a href="#"><small>9</small></a></td>
                                                    <td><a href="#"><small>10</small></a></td>
                                                    <td className="apb-calendar_current-select"><a href="#"><small>11</small></a></td>
                                                    <td className="apb-calendar_current-select"><a href="#"><small>12</small></a></td>
                                                    <td><a href="#"><small>13</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>14</small></a></td>
                                                    <td><a href="#"><small>15</small></a></td>
                                                    <td className="not-available"><a href="#"><small>16</small></a></td>
                                                    <td className="not-available"><a href="#"><small>17</small></a></td>
                                                    <td><a href="#"><small>18</small></a></td>
                                                    <td><a href="#"><small>19</small></a></td>
                                                    <td><a href="#"><small>20</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>21</small></a></td>
                                                    <td><a href="#"><small>22</small></a></td>
                                                    <td><a href="#"><small>23</small></a></td>
                                                    <td><a href="#"><small>24</small></a></td>
                                                    <td><a href="#"><small>25</small></a></td>
                                                    <td><a href="#"><small>26</small></a></td>
                                                    <td><a href="#"><small>27</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>28</small></a></td>
                                                    <td><a href="#"><small>29</small></a></td>
                                                    <td><a href="#"><small>30</small></a></td>
                                                    <td><a href="#"><small>31</small></a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                                <div classNames="col-sm-6">
                                    <div className="calendar_custom">
                                        <div className="calendar_title">
                                            <span className="calendar_month">JULY</span>
                                            <span className="calendar_year">2023</span>

                                            <a href="#" className="calendar_next calendar_corner"><i className="lotus-icon-right-arrow"></i></a>
                                        </div>
                                        <table className="calendar_tabel">
                                            <thead>
                                                <tr>
                                                    <th>Su</th>
                                                    <th>Mo</th>
                                                    <th>Tu</th>
                                                    <th>We</th>
                                                    <th>Th</th>
                                                    <th>Fr</th>
                                                    <th>Sa</th>
                                                </tr>
                                            </thead>
                                            <tbody><tr>
                                                <td></td>
                                                <td className="apb-calendar_current-date">
                                                    <a href="#"><small>1</small></a>
                                                </td>
                                                <td><a href="#"><small>2</small></a></td>
                                                <td><a href="#"><small>3</small></a></td>
                                                <td><a href="#"><small>4</small></a></td>
                                                <td><a href="#"><small>5</small></a></td>
                                                <td><a href="#"><small>6</small></a></td>
                                            </tr>
                                                <tr>
                                                    <td><a href="#"><small>7</small></a></td>
                                                    <td><a href="#"><small>8</small></a></td>
                                                    <td><a href="#"><small>9</small></a></td>
                                                    <td><a href="#"><small>10</small></a></td>
                                                    <td className="apb-calendar_current-select"><a href="#"><small>11</small></a></td>
                                                    <td className="apb-calendar_current-select"><a href="#"><small>12</small></a></td>
                                                    <td><a href="#"><small>13</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>14</small></a></td>
                                                    <td><a href="#"><small>15</small></a></td>
                                                    <td className="not-available"><a href="#"><small>16</small></a></td>
                                                    <td className="not-available"><a href="#"><small>17</small></a></td>
                                                    <td><a href="#"><small>18</small></a></td>
                                                    <td><a href="#"><small>19</small></a></td>
                                                    <td><a href="#"><small>20</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>21</small></a></td>
                                                    <td><a href="#"><small>22</small></a></td>
                                                    <td><a href="#"><small>23</small></a></td>
                                                    <td><a href="#"><small>24</small></a></td>
                                                    <td><a href="#"><small>25</small></a></td>
                                                    <td><a href="#"><small>26</small></a></td>
                                                    <td><a href="#"><small>27</small></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#"><small>28</small></a></td>
                                                    <td><a href="#"><small>29</small></a></td>
                                                    <td><a href="#"><small>30</small></a></td>
                                                    <td><a href="#"><small>31</small></a></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="calendar_status text-center pt-3">
                                <span className='available'>Available</span>
                                <span className="not-availables">Not Available</span>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default RoomDetailTab;