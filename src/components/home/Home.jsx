import React from "react";
import Slideshow from "../slideShow/SlideShow";
import DateRange from "../dateRange/DateRange";
import RoomList from "../roomList/RoomList";
import Gallery from "../gallery/Gallery";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="section-slider">
        <Slideshow />
      </section>
      <section className="section-check-availability absolute bottom-0 z-50 w-full">
        <DateRange />
      </section>
      <section className="section-accomd">
        <div className="container mx-auto">
          <div className="accomd-modations p-10">
            <div className="">
              <div className="">
                <h2 className="text-[#232323] text-4xl font-bold relative text-center">
                  ROOMS & RATE
                </h2>
                <img
                  className="mx-auto"
                  src="https://landing.engotheme.com/html/lotus/demo/images/icon-accmod.png"
                  alt=""
                />
                <p className="text-base text-center mt-2 mb-4">
                  Semper ac dolor vitae accumsan. Cras interdum hendrerit
                  lacinia. Phasellus accumsan urna vitae molestie interdum. Nam
                  sed placerat libero, non eleifend dolor.
                </p>
              </div>
              <RoomList />
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-about bg-white mt-[70px]">
        <div className="container mx-auto">
          <div className="home-about">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="img">
                  <a href="#">
                    <img
                      className="w-full p-5"
                      src="https://landing.engotheme.com/html/lotus/demo/images/home/about/img-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-span-1">
                <div className="text">
                  <h2 className="mt-4 text-[#232323] text-4xl font-bold">
                    ABOUT US
                  </h2>
                  <span className="inline-block h-[1px] bg-[#e1bd85] w-[250px]"></span>
                  <p className="text-[#232323] mt-6 mb-0 text-sm">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source
                  </p>
                  <a
                    className="inline-block border-2 border-black hover:border-[#e1bd85] hover:bg-[#e1bd85] hover:text-white py-2 px-3 mt-5 text-xs text-center w-[110px]"
                    href="#"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-our-best mt-10 mb-[70px]">
        <div className="container mx-auto">
          <div className="our-best">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="text">
                  <h2 className="mt-4 text-[#232323] text-4xl font-bold">
                    OUR BEST
                  </h2>
                  <p className="text-[#333] mb-0 mt-6">
                    One of Catalina Island's best-loved hotels, Hotel Vista Del
                    Mar is recognized as one of Avalon's leading hotels with
                    gracious island hospitality, thoughtful amenities and
                    distinctive .
                  </p>
                  <ul className="grid grid-cols-2 grid-rows-3 gap-5 mt-3">
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-3.png"
                        alt="icon"
                      />
                      250 Best Rooms 5 Star
                    </li>
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-2.png"
                        alt="icon"
                      />
                      Wet Bar with Refrigerator
                    </li>
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-4.png"
                        alt="icon"
                      />
                      Double Whirlpool Jacuzzi Tub
                    </li>
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-5.png"
                        alt="icon"
                      />
                      Luxurious High Thread Coun
                    </li>
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-1.png"
                        alt="icon"
                      />
                      Breakfast each morning
                    </li>
                    <li className="flex items-center mb-3 font-medium">
                      <img
                        className="mr-2"
                        src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/icon-6.png"
                        alt="icon"
                      />
                      Ocean Views to lotus Hotel
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="img">
                  <img
                    className="w-full p-5"
                    src="https://landing.engotheme.com/html/lotus/demo/images/home/ourbest/img-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-home-guestbook">
        <div className="container">
          <div className="home-guestbook"></div>
        </div>
      </section>
      <section className="section-event-news">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <div className="event">
                <h2 className="text-[#232323] text-4xl font-bold">
                  EVENT & DEAL
                </h2>
                <span className="w-[350px] h-[1px] bg-[#e1bd85] mt-3 mb-5 block"></span>
                <div>
                  <div className="grid grid-cols-1 pb-5">
                    <div className="event-item">
                      <div className="img overflow-hidden">
                        <img
                          className="w-full transition duration-300 ease-in-out hover:scale-110"
                          src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1">
                      <div className="event-item relative">
                        <div className="img overflow-hidden">
                          <a href="#">
                            <img
                              className="w-full transition duration-300 ease-in-out hover:scale-110"
                              src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="text absolute w-[130px] bg-black/60 top-0 left-5 bottom-0">
                          <div className="p-2 mt-3 w-full">
                            <h2 className="text-2xl font-bold text-white">
                              SAVE THE DATE
                            </h2>
                            <span className="text-white text-sm mt-2">
                              BECCA & ROBERT
                            </span>
                            <a
                              className="border-2 border-white hover:border-[#e1bd85] text-white text-[10px] px-3 py-2 hover:bg-[#e1bd85] inline-block mt-2"
                              href="#"
                            >
                              VIEW MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="event-item relative">
                        <div className="img overflow-hidden">
                          <a href="#">
                            <img
                              className="w-full transition duration-300 ease-in-out hover:scale-110"
                              src="https://landing.engotheme.com/html/lotus/demo/images/home/eventdeal/img-3.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="text absolute w-[130px] bg-black/60 top-0 left-5 bottom-0">
                          <div className="p-2 mt-3 w-full">
                            <h2 className="text-2xl font-bold text-white">
                              GO TO BEACH. LOTUS
                            </h2>
                            <a
                              className="border-2 border-white hover:border-[#e1bd85] text-white text-[10px] px-3 py-2 hover:bg-[#e1bd85] inline-block mt-2"
                              href="#"
                            >
                              VIEW MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="news">
                <h2 className="text-[#232323] text-4xl font-bold">NEWS</h2>
                <span className="w-[350px] h-[1px] bg-[#e1bd85] mt-3 mb-5 block"></span>
                <div className="grid grid-rows-3 gap-4">
                  <div className="row-span-1">
                    <div className="news-item flex">
                      <div className="img mr-5 overflow-hidden">
                        <a href="#">
                          <img
                            className="transition duration-300 ease-in-out hover:scale-110"
                            src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-1.jpg"
                            alt=""
                          ></img>
                        </a>
                      </div>
                      <div className="text">
                        <div className="">
                          <span className="text-[#898989] text-xl">
                            21 / March
                          </span>
                          <h2 className="text-lg font-bold">
                            <a href="#">UPDATE MENU FOOD IN LOTUS HOTEL</a>
                          </h2>
                          <a
                            className="mt-3 text-sm text-[#898989] hover:text-[#e1bd85]"
                            href="#"
                          >
                            [ Read More ]
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1">
                    <div className="news-item flex">
                      <div className="img mr-5 overflow-hidden">
                        <a href="#">
                          <img
                            className="transition duration-300 ease-in-out hover:scale-110"
                            src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-2.jpg"
                            alt=""
                          ></img>
                        </a>
                      </div>
                      <div className="text">
                        <span className="text-[#898989] text-xl">
                          8 / March
                        </span>
                        <h2 className="text-lg font-bold">
                          <a href="#">WEDDING DAY JONATHA & JESSICA</a>
                        </h2>
                        <a
                          className="mt-3 text-sm text-[#898989] hover:text-[#e1bd85]"
                          href="#"
                        >
                          [ Read More ]
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row-span-1">
                    <div className="news-item flex">
                      <div className="img mr-5 overflow-hidden">
                        <a href="">
                          <img
                            className="transition duration-300 ease-in-out hover:scale-110"
                            src="https://landing.engotheme.com/html/lotus/demo/images/home/lotusnews/img-3.jpg"
                            alt=""
                          ></img>
                        </a>
                      </div>
                      <div className="text">
                        <span className="text-[#898989] text-xl">
                          16 / February
                        </span>
                        <h2 className="text-lg font-bold">
                          <a href="#">THE BEST WEDDING GUIDE 2023</a>
                        </h2>
                        <a
                          className="mt-3 text-sm text-[#898989] hover:text-[#e1bd85]"
                          href="#"
                        >
                          [ Read More ]
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="inline-block mt-5 border-2 border-black hover:border-[#e1bd85] hover:bg-[#e1bd85] hover:text-white px-3 py-2"
                  href=""
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
    </main>
  );
};

export default Home;
