import React from 'react';
import { Link } from 'react-router-dom';

function Latest(){

	return(
	
		<>

<div class="row latestones">
                                <div class="col-lg-12">
                                <center><h2 class="wow fadeInUp headings glitch" data-wow-delay=".75s">Latest Ones</h2></center>
                                </div>
                                <div id="collection-carousel-alt" class="owl-carousel wow fadeIn">

                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-1.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-1.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Abstraction</h4></Link>
                                                <span>ERC-192</span>
                                            </div>
                                        </div>
                                    
                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-2.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-2.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Patternlicious</h4></Link>
                                                <span>ERC-61</span>
                                            </div>
                                        </div>
                                    
                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-3.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-3.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Skecthify</h4></Link>
                                                <span>ERC-126</span>
                                            </div>
                                        </div>
                                    
                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-4.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-4.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Cartoonism</h4></Link>
                                                <span>ERC-73</span>
                                            </div>
                                        </div>
                                    
                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-5.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-5.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Virtuland</h4></Link>
                                                <span>ERC-85</span>
                                            </div>
                                        </div>
                                    
                                        <div class="nft_coll style-2">
                                            <div class="nft_wrap">
                                                <Link to="/collection"><img src="images/collections/coll-6.jpg" class="lazy img-fluid" alt="" /></Link>
                                            </div>
                                            <div class="nft_coll_pp">
                                                <Link to="/collection"><img class="lazy" src="images/author/author-6.jpg" alt="" /></Link>
                                                <i class="fa fa-check"></i>
                                            </div>
                                            <div class="nft_coll_info">
                                                <Link to="/collection"><h4>Papercut</h4></Link>
                                                <span>ERC-42</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>


</>

);


}

export default Latest;