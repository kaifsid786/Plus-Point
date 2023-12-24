import React, { useState } from 'react'
import Header from '../../Header/Header'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import {AiOutlineDown} from 'react-icons/ai';
import { FaRegSquare } from "react-icons/fa";
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-1.jpg'
import ProductPhone from '../ProductPhone/ProductPhone';
export default function Product1() {

  const [dd,setDd] = useState(true);
  const [dd1,setDd1] = useState(false);
  const [dd2,setDd2] = useState(false);
  const section = [
   {
      img:[1,2,3,4,5],
      title:"By Application"
   },
   {
      img:[1,2,3],
      title:"By Type"
   },
  ];
  const img3=["30%","30%","30%","30%","30%","30%","30%","30%","30%"];
  const des1="Step up the character of your entryways with our artistic collection of pull handles. These pieces aren't just door furniture; they're expressions of style that greet every guest with a touch of personal flair. ";
  const des2="From sleek, minimalist designs to bold, sculptural statements, our pull handles are curated to cater to the discerning tastes of those who appreciate the finer details in life. Add a signature touch to your doors and draw in a sense of sophistication that resonates throughout your space.";
  return (
    <>
        <Header />
        <div className='main-product1'>
            <div className="product1-banner">
                 <PBannerCard title="Door Pull Handles" img={pimg} des1={des1} des2={des2} />
            </div>

            {/* sections */}
            {
               section.map((val,i)=>{
                  return(
                     <div className="product1-section1">
                       <div className="product1-section1-title">{section[i].title}</div>
                       <div className="product1-section1-img-wrapper">
                          {section[i].img.map((val,i)=>{
                             return(
                              <img src={img1} alt="" />
                             )
                          })}
                       </div>
                    </div>
                  )
               })
            }
 
             {/* section3 */}
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



