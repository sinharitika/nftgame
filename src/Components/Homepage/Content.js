import React from 'react';
import { Link } from 'react-router-dom';

function Content(){

	return(
	
		<>

{/* content section  */}

<div class="container service contentsec">
  <div class="row centercontent">
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
   
    <div class="col-xl-6">
      <img src="/images/planet.png" alt="service" />
    </div>
  </div>
  
</div>



{/* content section ends  */}

</>

);


}

export default Content;