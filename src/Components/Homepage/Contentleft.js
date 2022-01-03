import React from 'react';
import { Link } from 'react-router-dom';

function Contentleft(){

	return(
	
		<>

{/* content section  */}

<div class="container service contentsec nfts">
  <div class="row centercontent">

  <div class="col-xl-6">
      <img src="/images/nfts.webp" alt="service" className='nfts' />
    </div>
	  {/* <!-- title --> */}
	  <div class="col-xl-6 contentonly">
					<div class="main__title">
						<h2> List your NFTs on Crystal Cloud</h2>
						<p class="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.<br /><br />

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



{/* content section ends  */}

</>

);


}

export default Contentleft;