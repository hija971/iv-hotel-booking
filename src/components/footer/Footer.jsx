import "./Footer.css";
import footerLogo from "../../common/Layout/img/footer-logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container mx-auto">
                    <div className="grid grid-cols-4">
                        <div className="col-span-3">
                            <div className="flex items-center justify-evenly">
                                <h4 className="text-white text-2xl align-middle font-normal">
                                    <i class="fa-regular fa-envelope border-[3px] border-[#e1bd85] text-[#e1bd85] p-3 rounded-full mr-3"></i>
                                    NEWS & OFFERS
                                </h4>
                                <div className="ml-[65px]">
                                    <form>
                                        <input className="border-2 border-white bg-transparent text-white py-2 px-3 inline-block align-middle w-[290px]" type="email" name="email" placeholder="Your email address" />
                                        <button className="align-middle w-[135px] text-center py-2 px-3 h-10 text-white hover:text-[#e1bd85] bg-[#e1bd85] hover:bg-white text-base ml-3">SIGN UP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="">
                                <a className="text-xl text-white mr-3" href="#"><i class="fa-brands fa-pinterest border hover:border-[#e1bd85] rounded-full p-3"></i></a>
                                <a className="text-xl text-white mr-3" href="#"><i class="fa-brands fa-facebook border hover:border-[#e1bd85] rounded-full p-3"></i></a>
                                <a className="text-xl text-white mr-3" href="#"><i class="fa-brands fa-twitter border hover:border-[#e1bd85] rounded-full p-3"></i></a>
                                <a className="text-xl text-white mr-3" href="#"><i class="fa-brands fa-google border hover:border-[#e1bd85] rounded-full p-3"></i></a>
                                <a className="text-xl text-white" href="#"><i class="fa-brands fa-instagram border hover:border-[#e1bd85] rounded-full p-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-center">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12">
                        <div className="col-span-5 mt-10">
                            <div className="flex justify-center items-center mt-5">
                                <div className="img mr-10">
                                    <a href="#">
                                        <img className="w-[153px]" src={footerLogo} alt="" />
                                    </a>
                                </div>
                                <div className="text">
                                    <p className="flex items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <span className="text-[#acacac] text-sm">225 Beach Street, Australian</span>
                                    </p>
                                    <p className="flex items-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                        <span className="text-[#acacac] text-sm">1-548-854-8898</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white mr-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                        <a className="text-[#acacac] hover:text-[#e1bd85] text-sm" href="#">hello@theloutshotel.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 mt-10">
                            <h4 className="text-white text-base font-semibold mb-5">PAGE SITE</h4>
                            <ul>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">Guest Book</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">Gallery</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">Restaurant</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">Event</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 mt-10">
                            <h4 className="text-white text-base font-semibold mb-5">ABOUT</h4>
                            <ul>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">About</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="#">Blog</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="">Contact Us</a>
                                </li>
                                <li>
                                    <a className="text-[#acacac] hover:text-white text-sm py-[5px]" href="">Comming Soon</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 mt-10">
                            <h4 className="text-white text-base font-semibold mb-5">TRIPADVISOR</h4>
                            <div>
                                <p className="text-[#acacac] text-sm mb-5">Now with hotel reviews by</p>
                                <img className="mb-5" src="https://landing.engotheme.com/html/lotus/demo/images/tripadvisor.png" alt="" />
                                <span>
                                    <i className="tripadvisor-circle"></i>
                                    <i className="tripadvisor-circle"></i>
                                    <i className="tripadvisor-circle"></i>
                                    <i className="tripadvisor-circle"></i>
                                    <i className="tripadvisor-circle"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container mx-auto">
                    <p>© 2023 Lotus Hotel All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;