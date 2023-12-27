import React, { useState } from 'react'
import Header from '../../Header/Header'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import {AiOutlineDown} from 'react-icons/ai';
import PSquare from '../PSquare/PSquare';
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-1.jpg'
import ProductPhone from '../ProductPhone/ProductPhone';

export default function Product1() {

  const [dd,setDd] = useState(true);
  const [dd1,setDd1] = useState(false);
  const [dd2,setDd2] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [clickedIndexS, setClickedIndexS] = useState(null);
  const [clickedIndexM, setClickedIndexM] = useState(null);

  const handleClick = (index) => {
   // Update the clickedIndex to the current clicked element
   setClickedIndex(index);
 };
  const handleClickS = (index) => {
   // Update the clickedIndex to the current clicked element
   setClickedIndexS(index);
 };
  const handleClickM = (index) => {
   // Update the clickedIndex to the current clicked element
   setClickedIndexM(index);
 };
 const isClicked = (index) => {
   // Check if the current element is clicked
   return index === clickedIndex;
 };
 const isClickedS = (index) => {
   // Check if the current element is clicked
   return index === clickedIndexS;
 };
 const isClickedM = (index) => {
   // Check if the current element is clicked
   return index === clickedIndexM;
 };


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
   const des1="Our mortise lock sets combine security with sophistication, offering a range of options for both commercial and residential applications. Our selection features durable materials and finishes that withstand daily use and enhance your door's aesthetics. ";
   const des2="Each set is engineered for smooth operation and reliable locking mechanisms, ensuring peace of mind. Explore our collection to find the perfect blend of function and style for your space.";
   const app=["Luxurious","Pocket Friendly","Super Friendly"];
   const style=["Classic (All time fav)","Mordern & Minimalist","Bold","Traditional"];
   const material = ["Brass","Zinc","Aluminium","Stainless Steel"];
  return (
    <>
        <Header />
        <div className='main-product1'>
            <div className="product1-banner">
                 <PBannerCard title="Mortise Lock Sets" img={pimg} des1={des1} des2={des2} />
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
                         <div className="p-afford-dropDown" style={dd?{height:`calc(${app.length} * 4rem - 1rem)`}:{height:"0"}}>
                           {
                              app.map((val,i)=>{
                                 return(
                                    <div className="p-afford-dd-wrapper" style={!dd?{display:"none"}:{}}>
                                    <span onClick={() => {handleClick(i);console.log(val)}}><PSquare st={isClicked(i) ? true : false} /></span>
                                    <div className="p-afford-dd-title">{val}</div>
                                    </div>
                                 )
                              })
                           }
                         </div>
                      </div>
                      <div className="p-afford">
                         <div className="p-afford-main">
                              <div className="p-afford-title">Style</div>
                              <span onClick={()=>{setDd1(!dd1)}} ><AiOutlineDown /></span>
                         </div>
                         <div className="p-afford-dropDown" style={dd1?{height:`calc(${style.length} * 4rem - 1rem)`}:{height:"0"}}>
                             {
                              style.map((val,i)=>{
                                 return(
                                    <div className="p-afford-dd-wrapper" style={!dd1?{display:"none"}:{}}>
                                    <span onClick={() => {handleClickS(i);console.log(val)}}><PSquare st={isClickedS(i) ? true : false} /></span>
                                    <div className="p-afford-dd-title">{val}</div>
                                    </div>
                                 )
                              })
                             }
                               
                         </div>
                      </div>
                      <div className="p-afford">
                         <div className="p-afford-main">
                              <div className="p-afford-title">Material</div>
                              <span onClick={()=>{setDd2(!dd2)}} ><AiOutlineDown /></span>
                         </div>
                         <div className="p-afford-dropDown" style={dd2?{height:`calc(${material.length} * 4rem - 1rem)`}:{height:"0"}}>
                           {
                              material.map((val,i)=>{
                                 return(
                                    <div className="p-afford-dd-wrapper" style={!dd2?{display:"none"}:{}}>
                                    <span onClick={() =>{ handleClickM(i);console.log(val)}}><PSquare st={isClickedM(i) ? true : false} /></span>
                                    <div className="p-afford-dd-title">{val}</div>
                                    </div>
                                 )
                              })
                           }
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



