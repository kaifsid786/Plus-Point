import React from 'react'
import Header from '../../Header/Header'
import './Product5.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-5.jpg'
export default function Product5() {
  const img=[1,2,3,4];
  const des1="Explore the dependable functionality of our Butt Hinges, a staple in our Door Hinges collection. These hinges offer a seamless blend of strength and smooth motion, making them ideal for a variety of door types. ";
  const des2="Crafted for durability and ease of installation, they provide a reliable pivot point for your doors, ensuring long-lasting performance and a classic aesthetic.";
  return (
    <>
        <Header />
        <div className="main-product5">
                <div className="product5-topbanner">
                   <div className="product5-title">Door Hinges & Control system</div>
                </div>
                <div className="product5-midbanner">
                  <div className="product5-midbanner-title">Door Hinges</div>
                  <div className="midbanner-line"></div>
                </div>
                <div className="product5-banner" style={window.innerWidth<=900?{display:"none"}:{}}>
                   <PBannerCard title="Butt Hinges" img={pimg} des1={des1} des2={des2} />
                </div>

                <div className="product5-colors" style={window.innerWidth<=900?{display:"none"}:{}}>
                   <div className="product5-colors-wrapper">
                    <div className="product5-color-title">Available Color</div>
                    <div className="product5-color-wrapper">
                      <div className="product5-color" style={{background:"#F9A964"}}></div>
                      <div className="product5-color" style={{background:"#B76E2E"}}></div>
                      <div className="product5-color" style={{background:"#000"}}></div>
                      <div className="product5-color" style={{background:"#C8C8C8"}}></div>
                    </div>
                   </div>
                </div>

                {/* mobile section banner */}
                <div className="product5-mob-banner" style={window.innerWidth<=900?{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"30px"}:{display:"none"}}>
                   <img src={pimg} alt="" style={{width:"100%"}} />
                   <div className="product5-colors" style={{width:"100%"}}>
                   <div className="product5-colors-wrapper">
                    <div className="product5-color-title">Available Color</div>
                    <div className="product5-color-wrapper">
                      <div className="product5-color" style={{background:"#F9A964"}}></div>
                      <div className="product5-color" style={{background:"#B76E2E"}}></div>
                      <div className="product5-color" style={{background:"#000"}}></div>
                      <div className="product5-color" style={{background:"#C8C8C8"}}></div>
                    </div>
                   </div>
                </div>
                <h3 style={{fontSize:"2rem"}}>Door Pull Lock Sets</h3>
                 <p style={{width:"100%",fontSize:"1rem",textAlign:"left"}}>
                    {des1} <br /> <br /> {des2}
                 </p>
                </div>

                {/* section1 */}
                <div className="product5-section1">
                   <div className="product5-section1-title">Door Closure</div>
                   <div className="product5-section1-wrapper">
                      <div className="product5-section1-left">
                         <img src={img1} alt="" />
                         
                      </div>
                      <div className="product5-section1-right">
                          {img.map((val)=>{
                            return(
                              <img src={img1} alt="" />
                            )
                          })}
                      </div>
                   </div>
                </div>
        </div>
        <PreFooter />
        <Footer />
    </>

  )
}
