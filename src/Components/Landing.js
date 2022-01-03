
import React from 'react';
import Header from './Global/Header';
import {Link} from 'react-router-dom';
import Token from './Homepage/Token';
import Roadmap from './Homepage/Roadmap';
import Hotcollection from './Homepage/Hotcollection';
import Footer from './Global/Footer';
import Content from './Homepage/Content';
import Latest from './Homepage/Latest';
import Contentleft from './Homepage/Contentleft';

function Landing(){

return(
<>

<Header />

{/* <!-- content begin --> */}
        <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" class="pt20 pb20 vh-100" data-bgimage="url(images/back.jpg) bottom">
                <div id="particles-js"></div>
                <div class="v-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="spacer-single"></div>
                                <h6 class="wow fadeInUp" data-wow-delay=".5s"><span class="text-uppercase id-color-2">Nft Gaming Zone</span></h6>
                                <div class="spacer-10"></div>
                                <h1 class="wow fadeInUp typing-demo" data-wow-delay=".75s">Create, sell and collect digital items.</h1>
                                <p class="wow fadeInUp lead" data-wow-delay="1s">
                                Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
                                <div class="spacer-10"></div>
                                <Link to= "/explore" class="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</Link>                                
                                <div class="row">
                                    <div class="spacer-single"></div>
                                    <div class="row">
                                            <div class="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30" data-wow-delay="1.1s">
                                                <div class="de_count text-left">
                                                    <h3><span>94215</span></h3>
                                                    <h5 class="id-color">Collectibles</h5>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30" data-wow-delay="1.4s">
                                                <div class="de_count text-left">
                                                    <h3><span>27</span>k</h3>
                                                    <h5 class="id-color">Auctions</h5>
                                                </div>
                                            </div>

                                            <div class="col-lg-4 col-md-6 col-sm-4 wow fadeInRight mb30" data-wow-delay="1.7s">
                                                <div class="de_count text-left">
                                                    <h3><span>4</span>k</h3>
                                                    <h5 class="id-color">NFT Artist</h5>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-6 xs-hide">
                                <img src="images/secbanner.gif" class="img-fluid floating" data-wow-delay=".75s" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            {/* <!-- section begin --> */}
            <section aria-label="section" class="no-bottom">
                <div class="container">
                    <div class="row">
                    <center><h2 class="wow fadeInUp headings glitch" data-wow-delay=".75s">Partners</h2></center>
                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                        <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/1.png" alt="" class="mb20" />
                                <h4>Metamask</h4>
                            </Link>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                            <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/2.png" alt="" class="mb20" />
                                <h4>Bitski</h4>
                            </Link>
                        </div>       

                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                        <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/3.png" alt="" class="mb20" />
                                <h4>Fortmatic</h4>
                            </Link>
                        </div>    

                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                        <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/4.png" alt="" class="mb20" />
                                <h4>Wallet Connect</h4>
                            </Link>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                        <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/5.png" alt="" class="mb20" />
                                <h4>Coinbase Wallet</h4>
                            </Link>
                        </div>

                        <div class="col-lg-2 col-sm-4 col-6 mb30">
                        <Link to= "/login" class="box-url style-2">
                                <img src="images/wallet/6.png" alt="" class="mb20" />
                                <h4>Arkane</h4>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

<Hotcollection />
<Token />
<Content />
<Latest />

<div class="container service contentsec">
  <div class="row">
	  {/* <!-- title --> */}
	  <div class="col contentonly">
          <br />
     <center> <img src="/images/dragon.webp" alt="service" /> </center>
					<div class="main__title">
						<h2> List your NFTs on Crystal Cloud</h2>
						<p class="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.

						Crystal Cloud is the premier marketplace for Nifties, which are digital
						items you can truly own. Digital Items have existed for a long time, but
						never like this. <br /><br />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.

						Crystal Cloud is the premier marketplace for Nifties, which are digital
						items you can truly own. Digital Items have existed for a long time, but
						never like this.
						</p><br />
						<Link to="/collectibles" class="btn-main">View More</Link>
					</div>
				</div>
				{/* <!-- end title --> */}
   
  
  </div>
  
</div>
<Contentleft />

<Roadmap />


<Footer />
</>

);


}   

export default Landing;
