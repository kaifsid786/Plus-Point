import React from 'react'
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import HomeCard from './HomeCard/HomeCard';
import HomeAccordian from './HomeAccordian/HomeAccordian';
import HomePhAccord from './HomePhAccord/HomePhAccord';
import HomeUSP from './HomeUSP/HomeUSP';
import HomeMedia from './HomeMedia/HomeMedia';
import HomeTest from './HomeTest/HomeTest';
import HomeNews from './HomeNews/HomeNews';
import './Home.css';
import homeMain from '../../images/home-main.png';
import trust from '../../images/home-1.png'
import progression from '../../images/progression.png'
import quality from '../../images/quality.png'
export default function Home() {
  return (
    <>
         <div className="main-home">
            <Header />
            <div className="home-top-banner">
                    <img src={homeMain} alt="" />
            </div>
            <div className="home-banner">
                 <h1>WELCOME TO PLUSPOINT <br />
                 <span>Your One Stop Hardware Solution.</span> </h1>

                 <h2>Carrying forward a legacy of more than 80 years, 
                    we have inherited the art, quality & sheer craftsmanship of hardware creation.</h2>

                 <h3>We mix our special touch with new ideas to get the best of old and new.</h3>

                 <h4>This journey of revolutionising hardware began from Aligarh, 
                    and now we envision to represent India on the globe.</h4>
            </div>
            <div className="home-content">
                    <div className="home-content-1">
                        <div className="home-content-1-wp">
                            <h1>Values that define us</h1>
                         <div className="home-content-1-wrapper">
                             <HomeCard img={trust} title={"Trust:"} info={"Trust is priceless. Our efforts and precision behind each of our products makes you stay rest assured and at peace."} />
                             <HomeCard img={progression} title={"Progression:"} info={"We have a constant hunger of always being better at what we do, to always strive for more."}/>
                             <HomeCard img={quality} title={"Quality:"} info={"Products that showcase immense durability, exceptional reliability, are our hallmark."} />
                         </div>
                        </div>  
                    </div>
                    <div className="home-content-2">
                        <HomeAccordian />
                        <HomePhAccord />
                    </div>
                    <div className="home-content-3">
                           <HomeUSP />
                    </div>
                    <div className="home-content-4">
                        <HomeMedia />
                    </div>
                    <div className="home-content-5">
                        <HomeNews />
                    </div>
                    <div className="home-content-6">
                        <HomeTest />
                    </div>
            </div>
            <PreFooter />
            <Footer />
         </div>
    </>
  )
}
