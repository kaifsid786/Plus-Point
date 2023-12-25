import React,{useState} from 'react'
import Header from '../../Header/Header'
import './Product6.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import ProductPhone from '../ProductPhone/ProductPhone';
import {AiOutlineDown} from 'react-icons/ai';
import { FaRegSquare } from "react-icons/fa";
export default function Product6() {
 
    const img=[1,2,3];
    const img2=[1,2,3,4,5,6];
    const img3=[1,2,3,4,5];
    const img4=[1,2,3,4,5,6,7,8];
    const img5=[1,2,3,4,5,6,7,8,9];
    const [dd,setDd] = useState(true);
    const [dd1,setDd1] = useState(false);
    const [dd2,setDd2] = useState(false);

  return (
    <>
      <Header />
       <div className="main-product6">
               <div className="product6-topbanner">
                   <div className="product6-title">Door Locks & Latches</div>
                </div>
                <div className="product6-content1">
                    <div className="product6-content1-title">Padlock</div>
                    <div className="product6-content1-info">
                    Secure your space with our durable Padlocks, a versatile choice in our Door Locks and Latches range, designed for resilience and ease of use in any setting.
                    </div>
                </div>

                {/* content2 */}
                <div className="product6-content2">
                   {img.map((val)=>{
                    return(
                        <div className="product6-content2-img">
                            <img src={img1} alt="" />
                            <div className="product6-content2-title">Door Locks & Latches</div>
                        </div>
                    )
                   })}
                </div>

                {/* content3 */}
                <div className="product6-content3">
                    <div className="product6-content3-wrapper">
                        {img2.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"2rem",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>
                    <div className="product6-content3-btn">See More</div>
                </div>

                {/* content4 */}
                <div className="product6-content4">
                   <div className="product6-content1">
                      <div className="product6-content1-title">Lock Cylindes</div>
                      <div className="product6-content1-info">
                      A key component in our Door Locks and Latches lineup, engineered for superior lock integrity and seamless functionality.
                      </div>
                    </div>

                    <div className="product6-content4-wrapper">
                       {img3.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"2rem",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>

                    <div className="product6-content4-style">
                         <div className="product6-content4-style-wrapper">
                              <div className="product6-content4-style-title">Available in 8 exquisite finishes :</div>
                              <div className="product6-content4-img">
                                 {img4.map((val)=>{
                                    return(
                                        <img src={img1} alt="" style={{width:"12%",height:"13rem",objectFit:"cover"}} />
                                    )
                                 })}
                              </div>
                         </div>
                    </div>
                </div>

                {/* content5 */}
                <div className="product6-content5">
                   <div className="product6-content1">
                      <div className="product6-content1-title">Denlock</div>
                      <div className="product6-content1-info">
                      Introducing Denlock, our latest innovation in door security, seamlessly blending advanced technology with user-friendly design
                      </div>
                    </div>

                    <div className="product6-content4-wrapper">
                       {img.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>
                    <div className="product6-line">
                        <div className="product6-line-style"></div>
                    </div>
                </div>

                {/* content6 */}
                <div className="product6-content6">
                   <div className="product6-content1">
                      <div className="product6-content1-title">Mortise Latch</div>
                      <div className="product6-content1-info">
                       Explore the precision of our Mortise Latch, a subtle yet powerful component in door functionality. Crafted for discrete integration, it offers a smooth, reliable latching mechanism that quietly underpins the security of your doorway
                      </div>
                    </div>

                    <div className="product6-content4-wrapper">
                       {img.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>
                    <div className="product6-line">
                        <div className="product6-line-style"></div>
                    </div>
                </div>

                {/* content7 */}
                <div className="product6-content7">
                     <PBannerCard title="Denlock" />
                     <div className="product6-content4-wrapper" style={{padding:"0"}}>
                       {img.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>
                </div>

                {/* content8 */}
                <div className="product6-content4">
                   <div className="product6-content1">
                      <div className="product6-content1-title">Lock Cylindes</div>
                      <div className="product6-content1-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                      </div>
                    </div>

                    <div className="product6-content4-wrapper">
                       {img3.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"2rem",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
                    </div>

                    <div className="product6-content4-style">
                         <div className="product6-content4-style-wrapper">
                              <div className="product6-content4-style-title">Available in 8 exquisite finishes :</div>
                              <div className="product6-content4-img">
                                 {img4.map((val)=>{
                                    return(
                                        <img src={img1} alt="" style={{width:"12%",height:"13rem",objectFit:"cover"}} />
                                    )
                                 })}
                              </div>
                         </div>
                    </div>
                </div>

                {/* content9 */}
                <div className="product6-content9">
                    <PBannerCard title="Main Door Locks"/>
                </div>

                <div className="product1-section3" style={window.innerWidth<=500?{display:"none"}:{}}>
                <div className="product1-section3-left">
                      <div className="p-afford">
                         <div className="p-afford-main">
                              <div className="p-afford-title">Affordability</div>
                              <span onClick={()=>{setDd(!dd)}} ><AiOutlineDown /></span>
                         </div>
                         <div className="p-afford-dropDown" style={dd?{height:"10rem"}:{height:"0"}}>
                                <div className="p-afford-dd-wrapper" style={!dd?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Luxurious</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Pocket Friendly</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Super Friendly</div>
                                </div>
                         </div>
                      </div>
                      <div className="p-afford">
                         <div className="p-afford-main">
                              <div className="p-afford-title">Style</div>
                              <span onClick={()=>{setDd1(!dd1)}} ><AiOutlineDown /></span>
                         </div>
                         <div className="p-afford-dropDown" style={dd1?{height:"15rem"}:{height:"0"}}>
                                <div className="p-afford-dd-wrapper" style={!dd1?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Classic (All time fav)</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd1?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Mordern & Minimalist</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd1?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Bold</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd1?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Traditional</div>
                                </div>
                         </div>
                      </div>
                      <div className="p-afford">
                         <div className="p-afford-main"> 
                              <div className="p-afford-title">Material</div>
                              <span onClick={()=>{setDd2(!dd2)}} ><AiOutlineDown /></span>
                         </div>
                         <div className="p-afford-dropDown" style={dd2?{height:"15rem"}:{height:"0"}}>
                                <div className="p-afford-dd-wrapper" style={!dd2?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Brass</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd2?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Zinc</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd2?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Aluminium</div>
                                </div>
                                <div className="p-afford-dd-wrapper" style={!dd2?{display:"none"}:{}}>
                                   <span><FaRegSquare /></span>
                                   <div className="p-afford-dd-title">Stainless Steel</div>
                                </div>
                         </div>
                      </div>
                </div>

                <div className="product1-section3-right">
                     {img5.map((val)=>{
                         return(
                              <img src={img1} alt=""/>
                         )
                     })}
                </div>
            </div>

            <div className="product1-mob-section3" style={window.innerWidth>500?{display:"none"}:{}}>
                <ProductPhone imgArr={img5} img={img1} />
            </div>
       </div>
       <PreFooter />
       <Footer />
    </>
  )
}
