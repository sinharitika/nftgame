import React from 'react';
import {Link} from 'react-router-dom';


function Hotcollection(){

return(
<>

<section id="section-collections" class="pt30 pb30">
                <div class="container">
                            
                            <div class="row wow fadeIn"> 
                                <div class="col-lg-12">
                                <center><h2 class="wow fadeInUp headings glitch" data-wow-delay=".75s">Hot Collections</h2></center>
                                </div>

                                <div id="items-carousel" class="owl-carousel wow fadeIn">
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="de_countdown" data-year="2021" data-month="9" data-day="20" data-hour="8"></div>
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-1.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-1.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Sunny Day</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.08 ETH<span>1/20</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>50</span>
                                                </div>                            
                                            </div> 
                                        </div>
                                    </div>                 
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-10.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-2.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Blue Planet</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.06 ETH<span>1/22</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>80</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="de_countdown id-color" data-year="2021" data-month="9" data-day="14" data-hour="8"></div>
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-11.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-3.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Finally Free</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.05 ETH<span>1/11</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>97</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-12.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-4.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Work From Home</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.02 ETH<span>1/15</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>73</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-9.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items/anim-4.webp" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>The Truth</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.06 ETH<span>1/20</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>26</span>
                                                </div>                                 
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="de_countdown id-color" data-year="2021" data-month="9" data-day="30" data-hour="8"></div>
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-2.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-5.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Running Puppets</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.03 ETH<span>1/24</span>
                                                </div>    
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>45</span>
                                                </div>                                  
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-3.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items-alt/static-6.jpg" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Green Frogman</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.09 ETH<span>1/25</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>76</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>
                                    {/* <!-- nft item begin --> */}
                                    <div class="d-item">
                                        <div class="nft__item style-2">
                                            <div class="de_countdown id-color" data-year="2021" data-month="9" data-day="29" data-hour="8"></div>
                                            <div class="author_list_pp">
                                                <Link to="/author">                                    
                                                    <img class="lazy" src="images/author/author-4.jpg" alt="" />
                                                    <i class="fa fa-check"></i>
                                                </Link>
                                            </div>
                                            <div class="nft__item_wrap">
                                               <Link to="/item-details">
                                                    <img src="images/items/anim-5.webp" class="lazy nft__item_preview" alt="" />
                                                </Link>
                                            </div>
                                            <div class="nft__item_info">
                                               <Link to="/item-details">
                                                    <h4>Loop Donut</h4>
                                                </Link>
                                                <div class="nft__item_price">
                                                    0.09 ETH<span>1/14</span>
                                                </div>
                                                <div class="nft__item_action">
                                                    <Link to="/">Place a bid</Link>
                                                </div>
                                                <div class="nft__item_like">
                                                    <i class="fa fa-heart"></i><span>94</span>
                                                </div>                                 
                                            </div> 
                                        </div>
                                    </div>                                    
                                </div>                                
                            </div>

                            <div class="spacer-single"></div>
                            </div>
    </section>
</>

);


}   

export default Hotcollection;