import React from 'react'
import './ProductMain.css'
import Header from '../../Header/Header'
import PCard from '../PCard/PCard'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import img1 from '../../../images/prod-1.jpg'
import img2 from '../../../images/prod-2.jpg'
import img3 from '../../../images/prod-3.jpg'
import img4 from '../../../images/prod-4.png'
import img5 from '../../../images/prod-5.jpg'
import img6 from '../../../images/prod-6.png'
import img7 from '../../../images/prod-7.jpg'
import img8 from '../../../images/prod-8.jpg'
import img9 from '../../../images/prod-9.jpg'
export default function ProductMain() {

    const img=[img1,img2,img3,img4,img5,img6,img7,img8,img9];
    const title=["Mortise Lock Set","Aldrop Door Kits","Pull Handles","Main Door Lock Sets","Door Locks & Latches",`Door Hinges & Control system`,`Furniture Lock & Accessories`,"Decoratives","Door Accessories"];

  return (
    <>
       <Header />
       <div className="productMain">
              <div className="productMain-banner">
                   <div className="productMain-banner-title">Discover the Plus Point Difference</div>
              </div>
              <div className="productMain-info">
                   <div className="productMain-title">End to End Hardware Solution</div>
                   <div className="productMain-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              <div className="productMain-images">
                 {img.map((val,i)=>{
                    return <PCard img={val} title={title[i]} i={i} />
                 })}
              </div>
       </div>
       <PreFooter />
       <Footer />
    </>
  )
}
