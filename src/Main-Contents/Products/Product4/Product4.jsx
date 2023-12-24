import React from 'react'
import Header from '../../Header/Header'
import './Product4.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
import pimg from '../../../images/prod-4.png'
export default function Product4() {

  const img=["32%","32%","32%"];

  const des1="Merging robust security with striking design, each lock set offers a seamless blend of form and function. Tailored for homeowners who seek the utmost in safety without compromising on elegance, our door pull lock sets serve as the cornerstone of a welcoming yet fortified home. Delve into our collection where each piece promises to deliver unrivaled durability & convenience.";
  const des2="Embrace regal elegance with our Queen lock sets, designed to bestow a touch of majesty to your doorways. These lock sets are crafted with precision, offering not only unwavering security but also a luxurious charm befitting of its name";
  const des3="Discover the seamless integration of style and security with our Door Pull with Main Door Lock. This compact set is the perfect combination for a sleek, secure entryway.";
  const des4="Revolutionize your doorway's security with our robust Mortise Lock Sets, crafted to offer unmatched durability and a sleek finish. These lock sets are not just about safety; they're a statement of style that stands the test of time.";

  const section = [
   {
      img:[1,2,3],
      title:"Door Pull Lock Sets",
      des:des1
   },
   {
      img:[1,2,3],
      title:"Queen Lock Sets",
      des:des2
   },
  ];

  return (
    <>
      <Header />
      <div className="main-product4">
          <div className="product4-topbanner">
                 <div className="product4-title">Main Door Lock Sets</div>
          </div>

          {/* sections */}
          {
            section.map((val,i)=>{
               return(
                <div className="product4-section2" style={i%2==0?{background:"white"}:{}}>
                <div className="product4-section2-wrapper">
                  <PBannerCard state={i%2===0?undefined:"true"} title={section[i].title} des1={section[i].des}/>
                  <div className="product4-section1-title" style={{marginBottom:"-2rem"}}>Designs</div>
                 <div className="product4-section1-wrapper">
                      {img.map((val)=>{
                   return(
                     <div className="product4-section1-img">
                          <img src={img1} alt="" />
                          <div className="product4-section1-img-title">Lorem ipsum dolor sit</div>
                          <div className="product4-colors">
                              <div className="product4-color" style={{background:"#F9A964"}}></div>
                              <div className="product4-color" style={{background:"#B76E2E"}}></div>
                              <div className="product4-color" style={{background:"#000"}}></div>
                              <div className="product4-color" style={{background:"#D9D9D9"}}></div>
                          </div>
                     </div>
                      )
                    })}
                 </div>
                </div>
             </div>
               )
            })
          }


          {/* section3 */}
          <div className="product4-section3">
              <div className="main-pbannercard" style={{height:"40rem"}}>
                     <div className="pbannercard-left" >
                        <div className="pbannercard-left-title" style={{textAlign:"left"}}>Door pull with <br /> Main door lock</div>
                        <div className="pbannercard-left-info">{des3} </div>
                         <div className="product4-section3-btns">
                             <div className="product4-section3-btn">
                               <div className="product4-section3-btn-title">Door Pulls</div>
                               <button>Explore</button>
                             </div>
                             <div className="product4-section3-btn">
                               <div className="product4-section3-btn-title">Main Door Locks</div>
                               <button>Explore</button>
                             </div>
                         </div>
                     </div>

                     <div className="pbannercard-right">
                       <img src={img1} alt="" />
                      </div>
               </div>
          </div>

          {/* section4 */}
           <div className="product4-section4">
            <div className="main-pbannercard" style={{height:"38rem"}}>
                     <div className="pbannercard-left" >
                        <div className="pbannercard-left-title" style={{textAlign:"left"}}>Door pull with <br /> Main door lock</div>
                        <div className="pbannercard-left-info">
                           {des4}
                         </div>
                         <div className="product4-section3-btns">
                             <div className="product4-section3-btn">
                               <button>Explore</button>
                         </div>
                     </div>
                    </div>
                     <div className="pbannercard-right">
                       <img src={img1} alt="" />
                      </div>
           </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  )
}
