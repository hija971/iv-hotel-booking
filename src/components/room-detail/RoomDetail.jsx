import React from 'react'
import "./RoomDetail.css";
import ImageSlider from './ImageSlider';
import RoomDetailForm from './RoomDetailForm';
import RoomDetailTab from './RoomDetailTab';
import RoomDetailCompare from './RoomDetailCompare';
function RoomDetail() {
    const images = [
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-1.jpg',
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-2.jpg',
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-3.jpg',
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-5.jpg',
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-6.jpg',
        'https://landing.engotheme.com/html/lotus/demo/images/room/detail/lager/img-7.jpg',

    ];
    return (
        <div className='detail-content'>
            <section className="pt-16 bg-16 ">
                <div className='awe-overlay'></div>
                <div className='sub-banners'>
                    <div className='container'>
                        <div className='texts text-center'>
                            <h2>LUXURY ROOM</h2>
                            <p>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-room-detail bg-white pb-16'>
                <div className='container'>
                    <div className='room-detail'>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2'>
                                <ImageSlider images={images} />
                            </div>
                            <div className='col-span-1 '>
                                <div className='room-detail_book mt-11 p-5 pt-0 pb-3'>
                                    <div className='room-detail_total py-4 px-4 text-center border-b-2 border-y-neutral-200'>
                                        <img className='icon-logo' src="../logo-grey-nobg.png" alt="logo" />
                                        <h6 className='text-[#232323] text-base font-bold mt-2.5'>STARTING ROOM FROM</h6>
                                        <p className='price mb-0 mt-2.5 text-[#898989] text-lg '>
                                            <span className='amout text-4xl text-[#232323] font-bold' >$260</span>
                                            /days
                                        </p>
                                    </div>
                                    <div className='room-detail_form'>
                                        <RoomDetailForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <RoomDetailTab />
            </section>
            <section>
                 <RoomDetailCompare/>
            </section>
        </div>
    )
}

export default RoomDetail