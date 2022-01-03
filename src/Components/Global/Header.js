
import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

return(

    <>

{/* <!-- header begin --> */}
<header class="transparent scroll-dark">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="de-flex sm-pt10">
                    <div class="de-flex-col">
                        <div class="de-flex-col">
                            {/* <!-- logo begin --> */}
                            <div id="logo">
                                <Link to="/">
                                    <img alt="" src="images/logo-main.png" />
                                </Link>
                            </div>
                            {/* <!-- logo close --> */}
                        </div>
                        <div class="de-flex-col">
                            <input id="quick_search" class="xs-hide style-2" name="quick_search" placeholder="search item here..." type="text" />
                        </div>
                    </div>
                    <div class="de-flex-col header-col-mid">
                        {/* <!-- mainmenu begin --> */}
                        <ul id="mainmenu">
                            <li>
                            <Link to="/">Home<span></span></Link>
                                <ul>
                                    <li><a href="03_grey-index.html">Homepage 1</a></li>
                                    <li><a href="03_grey-index-2.html">Homepage 2</a></li>
                                    <li><a href="03_grey-index-3.html">Homepage 3</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="03_grey-explore.html">Explore<span></span></a>
                                <ul>
                                    <li><Link to="/explore">Explore</Link></li>
                                    <li><Link to="/collection">Collections</Link></li>
                                    <li><Link to="/item-details">Item Details</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="03_grey-author.html">Author<span></span></a>
                                <ul>
                                    <li><Link to="/author">Author</Link></li>
                                    <li><Link to="/wallet">Wallet</Link></li>
                                    <li><Link to="/create">Create</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </li>                                    
                            <li>
                            <Link to="/activity">Activity<span></span></Link>
                            </li>
                        </ul>
                        {/* <!-- mainmenu close --> */}
                        <div class="menu_side_area">
                        <Link to="/wallet" class="btn-main"><i class="icon_wallet_alt"></i><span>Connect Wallet</span></Link>
                            <span id="menu-btn"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
{/* <!-- header close --> */}

</>

);


}

export default Header;
