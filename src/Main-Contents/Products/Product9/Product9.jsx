import React from 'react'
import Header from '../../Header/Header'
import './Product9.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
export default function Product9() {

  const section1 = [
    {
       img:[1,2],
       title:"Designs"
    },
    {
       img:[1],
       title:"Gate Hooks"
    },
    {
       img:[1,2],
       title:"Body Datch"
    },
   ];
  const section2 = [
    {
       img:[1,2],
       title:"Door Knocker"
    },
    {
       img:[1,2,3,4],
       title:"Door Stoper"
    },
    {
       img:[1,2],
       title:"Door Chain"
    },
   ];
   
    const img3=[1,2,3];
    const img4=[1,2,3,4];

  return (
    <>
        <Header />
        <div className="main-product9">
              <div className="product4-topbanner">
                  <div className="product4-title">Door Accessories</div>
              </div>

              {/* sections */}
              { 
                section1.map((val,i)=>{
                  return(
                    <div className="product9-section1">
                    <div className="product4-section1">
                    <div className="product4-section1-title">{section1[i].title}</div>
                    <div className="product4-section1-wrapper">
                         {section1[i].img.map((val)=>{
                            return(
                            <div className="product4-section1-img" style={{width:"calc(50% - 30px)",height:"30rem"}}>
                             <img src={img1} alt="" style={{height:"80%"}} />
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


            {/* section4 */}
            <div className="product9-section4">
                 <div className="product9-section4-wrapper">
                      <div className="product9-section4-title">Coat Hooks</div>
                      <div className="product9-section4-wrap" style={{marginBottom:"-1rem",marginTop:"2rem"}}>
                           <div className="product9-section4-wrap-left">Zinc</div>
                           <div className="product9-section4-wrap-right">
                               {
                                img3.map((val)=>{
                                    return(
                                        <img src={img1} alt="" />
                                    )
                                })
                               }
                           </div>
                      </div>
                      <div className="product9-section4-wrap">
                           <div className="product9-section4-wrap-left" style={{marginTop:"30px"}}>Steel</div>
                           <div className="product9-section4-wrap-right">
                               {
                                img4.map((val)=>{
                                    return(
                                        <img src={img1} alt="" style={{marginTop:"30px"}} />
                                    )
                                })
                               }
                           </div>
                      </div>
                 </div>
            </div>

            {/* sections'*/}
            { 
                section2.map((val,i)=>{
                  return(
                    <div className="product9-section1">
                    <div className="product4-section1">
                    <div className="product4-section1-title">{section2[i].title}</div>
                    <div className="product4-section1-wrapper">
                         {section2[i].img.map((val)=>{
                            return(
                            <div className="product4-section1-img" style={{width:"calc(50% - 30px)",height:"30rem"}}>
                             <img src={img1} alt="" style={{height:"80%"}} />
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
            

        </div>
        <PreFooter />
        <Footer />
    </>
  )
}
