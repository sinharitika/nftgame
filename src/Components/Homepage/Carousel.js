import { Carousel } from "bootstrap";
import {Link} from 'react-router-dom';

function Slider(){

    return(
    <>

<OwlCarousel className='owl-theme hero owl-dot' loop margin={1} nav id="hero" items={1} autoplay={true}>
                            <div class='item hero__slide' style={{backgroundImage:"url('/images/banner1.jpg')"}}>
                                <h1 class="hero__title">Exclusive digital asset</h1>
                                <p class="hero__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                <div class="hero__btns">
                                    <Link to="/item" class="hero__btn hero__btn--clr">More details</Link>
                                    <Link to="/item" class="hero__btn">Place a bid</Link>
                                </div>
                            </div>
                            <div class='item hero__slide' style={{backgroundImage:"url('/images/banner3.jpg')"}}>
                                <h2 class="hero__title">Discover, collect, and sell extraordinary NFTs</h2>
                                <p class="hero__text">Securely buy and sell unique digital collectibles. <br />Lowest transaction costs across all NFT markets guaranteed.</p>
                                <div class="hero__btns">
                                    <Link to="/collectibles" class="hero__btn hero__btn--clr">Explore</Link>
                                    <Link to="/signin" class="hero__btn">Create</Link>
                                </div>
                            </div>
                            <div class='item hero__slide' style={{backgroundImage:"url('/images/banner1.jpg')"}}>
                            <h2 class="hero__title">Crystal Cloud  – NFT Marketplace <br />HTML Template</h2>
                                <p class="hero__text">Digital marketplace for crypto collectibles and non-fungible tokens. <br />Buy, sell, and discover exclusive digital assets.</p>
                                <div class="hero__btns">
                                    <Link to="/collectibles" class="hero__btn hero__btn--clr">Explore</Link>
                                    <Link to="/signin" class="hero__btn">Create</Link>
                                </div>
                            </div>
                        </OwlCarousel>


</>

);


}   

export default Slider;