import React from 'react'
import "./Blog.css";
import WidgetDeal from "./WidgetDeal.jsx";
function Blog() {
    return (
        <div>
            <div className="sub-banner">
                <div className="container">
                    <div className="textss text-center">
                        <h2 className="text-4xl font-bold">Our BLOG</h2>
                        <p className="text-lg">Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </div>
            <div className="blog-content">
                <div className="container">
                    <div className="blog">
                        <div className="grid grid-cols-3 gap-5">
                            <div className="col-span-1">
                                <div className="sidebar">
                                    <div className="widget widget_deal">
                                        <WidgetDeal />
                                        <div className='widget widget_categories'>
                                            <h4 className='widget-title'>CATEGORIES</h4>
                                            <ul>
                                                <li className='categories-content'><a href="#"></a>Food & Drinks (4)</li>
                                                <li className='categories-content'><a href="#"></a>Gardening (2)</li>
                                                <li className='categories-content'><a href="#"></a>Personal (6)</li>
                                                <li className='categories-content'><a href="#"></a>Recipes (2)</li>
                                                <li className='categories-content'><a href="#"></a>Uncategorized</li>
                                            </ul>
                                        </div>
                                        <div className='widget widget_upcoming_events'>
                                            <h4 className='widget-title'>Upcoming Events</h4>
                                            <ul>
                                                <li>
                                                    <span className='event-date'>
                                                        <strong>23</strong>
                                                        JUL
                                                    </span>
                                                    <div className='event-text'>
                                                        <a href="#">DISCOUNT EVENT ROOM</a>
                                                        <span className='date'>at 12:30 Pm, Thu 20 Jul 2023</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='event-date'>
                                                        <strong>18</strong>
                                                        JUL
                                                    </span>
                                                    <div className='event-text'>
                                                        <a href="#">Event wedding 1</a>
                                                        <span className='date'>at 11:30 Pm, Thu 05 Jul 2023</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='event-date'>
                                                        <strong>7</strong>
                                                        OCT
                                                    </span>
                                                    <div className='event-text'>
                                                        <a href="#">Event wedding 2</a>
                                                        <span className='date'>at 10:30 Pm, Thu 02 Oct 2023</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='widget widget_recent_entries has_thumbnail'>
                                            <h4 className='widget-title'>Recent Posts</h4>
                                            <ul>
                                                <li>
                                                    <div className='mr-5'><a href="#"><img src="https://landing.engotheme.com/html/lotus/demo/images/blog/thumbnail/img-2.jpg" alt="#" /></a></div>
                                                    <div className='event-text'>
                                                        <a href="#">Relaxing & travel in our hotel</a>
                                                        <span className='date'>at 12:30 Am, Thu 20 Jul 2023</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='mr-5'><a href="#"><img src="https://landing.engotheme.com/html/lotus/demo/images/blog/thumbnail/img-3.jpg" alt="#" /></a></div>
                                                    <div className='event-text'>
                                                        <a href="#">New kind of chicken food for dinner</a>
                                                        <span className='date'>at 12:30 Am, Thu 21 Jul 2023</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='mr-5'><a href="#"><img src="https://landing.engotheme.com/html/lotus/demo/images/blog/thumbnail/img-4.jpg" alt="#" /></a></div>
                                                    <div className='event-text'>
                                                        <a href="#">One night wedding with jessia & robet</a>
                                                        <span className='date'>at 12:30 Am, Thu 22 Jul 2023</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='mr-5'><a href="#"><img src="https://landing.engotheme.com/html/lotus/demo/images/blog/thumbnail/img-5.jpg" alt="#" /></a></div>
                                                    <div className='event-text'>
                                                        <a href="#">Fishing with lotus hotel</a>
                                                        <span className='date'>at 12:30 Am, Thu 23 Jul 2023</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='widget widget_tag_cloud'>
                                            <h4 className='widget-title'>Tags</h4>
                                            <div className='tagcloud'>
                                                <a href="#">Restaurant</a>
                                                <a href="#">Food Dinner</a>
                                                <a href="#">Travel</a>
                                                <a href="#">Blog</a>
                                                <a href="#">Wedding</a>
                                                <a href="#">Luxury Room</a>
                                                <a href="#">Valentine</a>
                                            </div>
                                        </div>
                                        <div className='widget widget_social'>
                                            <h4 className='widget-title'>LOTUS SOCIALS</h4>
                                            <div className='widget-social animate-bounce'>
                                                <a href="#"><i className="icon-social fa-brands fa-pinterest fa-xs"></i></a>
                                                <a href="#"><i className="icon-social fa-brands fa-facebook-f fa-xs"></i></a>
                                                <a href="#"><i className="icon-social fa-brands fa-twitter fa-xs"></i></a>
                                                <a href="#"><i className="icon-social fa-brands fa-google-plus-g fa-xs"></i></a>
                                                <a href="#"><i className="icon-social fa-brands fa-square-instagram fa-xs"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div className='blog-content'>
                                    <div className='widget widget_search'>
                                        <div className='widgetsearch'>
                                            <form action="#">
                                                <input type="search" className='input-text' placeholder='Search your entry here ...' />
                                            </form>
                                        </div>
                                        <article className='post'>
                                            <div className='entry-media'>
                                                <a href="#" className='post-thumbnail hover-zoom'> <img src="https://landing.engotheme.com/html/lotus/demo/images/blog/img-2.jpg" alt="#" /></a>
                                                <span className='posted-on'>
                                                    <strong>23</strong>
                                                    JUL
                                                </span>
                                            </div>
                                            <div className='entry-header'>
                                                <h2 className='entry-title'>
                                                    <a href="#">RELAXING & TRAVEL IN OUR HOTEL</a>
                                                </h2>
                                            </div>
                                            <div className='entry-content'>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                <br />
                                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className='entry-footer'>
                                                <p className='entry-meta'>
                                                    <span className='entry-author'>
                                                        <span className='screen-reader-text'>Posted by </span>
                                                        <a href="#" className='entry-author-link'>
                                                            <span className='entry-author-name'>Jonatha Owens</span>
                                                        </a>
                                                    </span>
                                                    <span className='entry-categories'>
                                                        <a href="#">Food Dinner</a>
                                                        ,
                                                        <a href="#">Travel</a>
                                                    </span>
                                                    <span className='entry-comments-link'>
                                                        <a href="#">3 Comments</a>
                                                    </span>
                                                    <span className='entry-tags'>
                                                        <span className='screen-reader-text'>
                                                            <i className="fa-solid fa-tags"></i>
                                                            <a href="#">Food</a>
                                                            -
                                                            <a href="#">Drink</a>
                                                            -
                                                            <a href="#">Event</a>
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </article>
                                        <article className='post'>
                                            <div className='entry-media'>
                                                <a href="#" className='post-thumbnail hover-zoom'> <img src="https://landing.engotheme.com/html/lotus/demo/images/blog/img-3.jpg" alt="#" /></a>
                                                <span className='posted-on'>
                                                    <strong>23</strong>
                                                    JUL
                                                </span>
                                            </div>
                                            <div className='entry-header'>
                                                <h2 className='entry-title'>
                                                    <a href="#">NEW KIND OF CHICKEN FOOD FOR DINNER</a>
                                                </h2>
                                            </div>
                                            <div className='entry-content'>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                <br />
                                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className='entry-footer'>
                                                <p className='entry-meta'>
                                                    <span className='entry-author'>
                                                        <span className='screen-reader-text'>Posted by </span>
                                                        <a href="#" className='entry-author-link'>
                                                            <span className='entry-author-name'>Jonatha Owens</span>
                                                        </a>
                                                    </span>
                                                    <span className='entry-categories'>
                                                        <a href="#">Food Dinner</a>
                                                        ,
                                                        <a href="#">Travel</a>
                                                    </span>
                                                    <span className='entry-comments-link'>
                                                        <a href="#">3 Comments</a>
                                                    </span>
                                                    <span className='entry-tags'>
                                                        <span className='screen-reader-text'>
                                                            <i className="fa-solid fa-tags"></i>
                                                            <a href="#">Food</a>
                                                            -
                                                            <a href="#">Drink</a>
                                                            -
                                                            <a href="#">Event</a>
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </article>
                                        <article className='post'>
                                            <div className='entry-media'>
                                                <a href="#" className='post-thumbnail hover-zoom'> <img src="https://landing.engotheme.com/html/lotus/demo/images/blog/img-4.jpg" alt="#" /></a>
                                                <span className='posted-on'>
                                                    <strong>23</strong>
                                                    JUL
                                                </span>
                                            </div>
                                            <div className='entry-header'>
                                                <h2 className='entry-title'>
                                                    <a href="#">ONE NIGHT WEDDING WITH JESSICA & ROBET</a>
                                                </h2>
                                            </div>
                                            <div className='entry-content'>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                <br />
                                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className='entry-footer'>
                                                <p className='entry-meta'>
                                                    <span className='entry-author'>
                                                        <span className='screen-reader-text'>Posted by </span>
                                                        <a href="#" className='entry-author-link'>
                                                            <span className='entry-author-name'>Jonatha Owens</span>
                                                        </a>
                                                    </span>
                                                    <span className='entry-categories'>
                                                        <a href="#">Food Dinner</a>
                                                        ,
                                                        <a href="#">Travel</a>
                                                    </span>
                                                    <span className='entry-comments-link'>
                                                        <a href="#">3 Comments</a>
                                                    </span>
                                                    <span className='entry-tags'>
                                                        <span className='screen-reader-text'>
                                                            <i className="fa-solid fa-tags"></i>
                                                            <a href="#">Food</a>
                                                            -
                                                            <a href="#">Drink</a>
                                                            -
                                                            <a href="#">Event</a>
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </article>
                                        <article className='post'>
                                            <div className='entry-media'>
                                                <a href="#" className='post-thumbnail hover-zoom'> <img src="https://landing.engotheme.com/html/lotus/demo/images/blog/img-5.jpg" alt="#" /></a>
                                                <span className='posted-on'>
                                                    <strong>23</strong>
                                                    JUL
                                                </span>
                                            </div>
                                            <div className='entry-header'>
                                                <h2 className='entry-title'>
                                                    <a href="#">FISHING WITH LOTUS HOTEL</a>
                                                </h2>
                                            </div>
                                            <div className='entry-content'>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                <br />
                                                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                            <div className='entry-footer'>
                                                <p className='entry-meta'>
                                                    <span className='entry-author'>
                                                        <span className='screen-reader-text'>Posted by </span>
                                                        <a href="#" className='entry-author-link'>
                                                            <span className='entry-author-name'>Jonatha Owens</span>
                                                        </a>
                                                    </span>
                                                    <span className='entry-categories'>
                                                        <a href="#">Food Dinner</a>
                                                        ,
                                                        <a href="#">Travel</a>
                                                    </span>
                                                    <span className='entry-comments-link'>
                                                        <a href="#">3 Comments</a>
                                                    </span>
                                                    <span className='entry-tags'>
                                                        <span className='screen-reader-text'>
                                                            <i className="fa-solid fa-tags"></i>
                                                            <a href="#">Food</a>
                                                            -
                                                            <a href="#">Drink</a>
                                                            -
                                                            <a href="#">Event</a>
                                                        </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </article>
                                        <ul className='page-navigation'>
                                            <li className='first'>
                                                <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
                                            </li>
                                            <li className='current-page'>
                                                <a href="#">1</a>
                                            </li>
                                            <li>
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">5</a>
                                            </li>
                                            <li>
                                                <a href="#">6</a>
                                            </li>
                                            <li className='last'>
                                                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog