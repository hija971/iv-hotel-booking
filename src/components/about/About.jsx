import React from "react";
import logo from "./image/img-2.jpg"
import logo1 from "./image/img-1.jpg"
import logo2 from "./image/img-10.jpg"
import logo3 from "./imageTeam/img1.jpg"
import logo4 from "./imageTeam/img2.jpg"
import logo5 from "./imageTeam/img3.jpg"
import logo6 from "./imageTeam/img4.jpg"
import logo7 from "./imageTeam/img5.jpg"
import "./AppAbout.css"

const About = () => {

    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="absolute flex flex-col items-center pt-32">
                    <h2 className="text-4xl text-[#fff]">ABOUT LOTUS</h2>
                    <p className="text-xl text-[#fff]">Lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div>
                    <img src={logo7} alt="My image" />
                </div>
            </div>
            <div className="w-100% h-full flex flex-col justify-center items-center pt-10 bg-white">
                <div className="w-9/12 h-full">
                    <div className="flex">
                        <div>
                            <a href="#">
                                <img src={logo} alt="my image" />
                            </a>
                        </div>
                        <div className="w-6/12 pl-10 mt-6">
                            <div class="">
                                <h2 class="text-[#232323] text-4xl font-bold">ABOUT LOTUS</h2>
                                <div class="text-base text-[#333333] mt-5">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <b>The point of using Lorem Ipsum is that it has a more-or-less normal</b> distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                        <br />
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                    <br />
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-9/12 h-full mt-10 justify-center items-center">
                    <div className="flex flex-row-reverse justify-center items-center">
                        <div>
                            <a href="#">
                                <img src={logo1} alt="my image" />
                            </a>
                        </div>
                        <div className="w-6/12 pl-10">
                            <div class="">
                                <h2 class="text-[#232323] text-4xl font-bold">WHY GUEST CHOOSE LOTUS HOTEL?</h2>
                                <div class="text-base text-[#333333] mt-5 pr-10">
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, <b>sometimes by accident, sometimes on purpose</b> (injected humour and the like).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center mt-10">
                    <div className="absolute flex flex-col items-center h-full w-full bg-[rgba(72,72,72,0.6)] pt-16">
                        <h2 className="text-4xl text-[#fff] font-bold">HOTEL  STATISTICS</h2>
                        <div className="grid grid-cols-4 gap-56 pt-8">
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-[#fff] text-6xl">768</span>
                                <span className="text-[#fff] text-lg">GUEST STAY</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-[#fff] text-6xl">632</span>
                                <span className="text-[#fff] text-lg">BOOK ROOM</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-[#fff] text-6xl">1024</span>
                                <span className="text-[#fff] text-lg">MEMBER STAY</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-[#fff] text-6xl">256</span>
                                <span className="text-[#fff] text-lg">MEALS SERVED</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={logo2} alt="my image" />
                    </div>
                </div>
                <div className="w-9/12 h-full pb-5">
                    <div className="pt-20 pb-20">
                        <h2 class="text-[#232323] font-bold text-4xl text-center">TEAM MEMBER</h2>
                        <p class="text-[#333333] text-xl text-center mt-4">Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-8">
                            <div className="">
                                <div class="zoom flex justify-center">
                                    <a href="#"><img src={logo3} alt="" /></a>
                                </div>
                                <div class="mt-7 text-center">
                                    <h2 className="text-[#232323] font-bold text-xl">JESSICA ALBA</h2>
                                    <p className="mt-2 text-[#898989] text-base">Manager lotus Hotel</p>
                                    <p className="mt-5 text-[#30373b] text-base">Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                    <div class="team-share mt-5">
                                        <a className="mr-2 ml-2" href="#"><i className="fa-brands fa-square-facebook" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-twitter" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-google-plus" style={{color: '#898989'}}></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div class="zoom flex justify-center">
                                    <a className="" href="#"><img src={logo4} alt="" /></a>
                                </div>
                                <div class="mt-7 text-center">
                                    <h2 className="text-[#232323] font-bold text-xl">ROBET WILIAM</h2>
                                    <p className="mt-2 text-[#898989] text-base">Founder Hotel</p>
                                    <p className="mt-5 text-[#30373b] text-base">Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                    <div class="team-share mt-5">
                                        <a className="mr-2 ml-2" href="#"><i className="fa-brands fa-square-facebook" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-twitter" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-google-plus" style={{color: '#898989'}}></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div class="zoom flex justify-center">
                                    <a href="#"><img src={logo5} alt="" /></a>
                                </div>
                                <div class="mt-7 text-center">
                                    <h2 className="text-[#232323] font-bold text-xl">ADAM</h2>
                                    <p className="mt-2 text-[#898989] text-base">Lorem lipsum</p>
                                    <p className="mt-5 text-[#30373b] text-base">Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                    <div class="team-share mt-5">
                                        <a className="mr-2 ml-2" href="#"><i className="fa-brands fa-square-facebook" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-twitter" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-google-plus" style={{color: '#898989'}}></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div class="zoom flex justify-center">
                                    <a href="#"><img src={logo6} alt="" /></a>
                                </div>
                                <div class="mt-7 text-center">
                                    <h2 className="text-[#232323] font-bold text-xl">DAVID GARI</h2>
                                    <p className="mt-2 text-[#898989] text-base">Lorem lipsum</p>
                                    <p className="mt-5 text-[#30373b] text-base">Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                                    <div class="team-share mt-5">
                                        <a className="mr-2 ml-2" href="#"><i className="fa-brands fa-square-facebook" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-twitter" style={{color: '#898989'}}></i></a>
                                        <a className="mr-2 ml-2" href="#"><i class="fa-brands fa-square-google-plus" style={{color: '#898989'}}></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;