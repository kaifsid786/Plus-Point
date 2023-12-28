import React, { useState } from 'react'
import Header from '../../Header/Header'
import './Product2.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import {AiOutlineDown} from 'react-icons/ai';
import { FaRegSquare } from "react-icons/fa";
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-2.jpg'
import ProductPhone from '../ProductPhone/ProductPhone';
export default function Product2() {

  const [dd,setDd] = useState(true);
  const [dd1,setDd1] = useState(false);
  const [dd2,setDd2] = useState(false);

  const section = [
   {
      img:[1,2,3,4,5],
      title:"By Application",
      info:"Info here"
   },
   {
      img:[1,2,3],
      title:"By Type",
      info:"Info here"
   },
  ];

  const img3=["30%","30%","30%","30%","30%","30%","30%","30%","30%"];
  const des1="Enhance your doors with our premium Aldrop door kits, meticulously designed for strength and elegance. Crafted from the finest materials, our aldrops provide a secure fit for your doors, complementing both traditional and contemporary decor. ";
  const des2="Each kit is a testament to superior craftsmanship, providing effortless installation and enduring performance. Discover the perfect match for your home or office, and elevate the functionality and aesthetic of your entrance with our distinguished collection.";

  return (
    <>
        <Header />
        <div className='main-product1'>
            <div className="product1-banner">
                 <PBannerCard title="Aldrop Door Kits" img={pimg} des1={des1} des2={des2} />
            </div>

              {/* sections */}
            {
               section.map((val,i)=>{
                  return(
                     <div className="product1-section1">
                     <div className="product1-section1-title">{section[i].title}</div>
                     <div className="product1-section1-info" style={{fontSize:"1.5rem"}}>{section[i].info}</div>
                     <div className="product1-section1-img-wrapper">
                        {section[i].img.map((val,i)=>{
                           return(
                             <div className="product1-section1-img-wrapper-w">
                               <img src={img1} alt="" />
                               <p>Title</p>
                             </div>
                           )
                        })}
                     </div>
                  </div>
                  )
               })
            }


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
                     {img3.map((val)=>{
                         return(
                              <img src={img1} alt=""/>
                         )
                     })}
                </div>
            </div>

            <div className="product1-mob-section3" style={window.innerWidth>500?{display:"none"}:{}}>
                <ProductPhone imgArr={img3} img={img1} />
            </div>

        </div>
        <PreFooter />
        <Footer />
    </>
  )
}
