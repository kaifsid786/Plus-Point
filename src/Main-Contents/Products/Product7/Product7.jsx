import React from 'react'
import Header from '../../Header/Header'
import './Product7.css'
import PreFooter from '../../PreFooter/PreFooter';
import  Footer from '../../Footer/Footer'
import PBannerCard from '../PBannerCard/PBannerCard';
import img1 from '../../../images/prod-3.jpg'
export default function Product7() {

    const section = [
        {
           img:[1,2,3,4,5,6],
           title:"Brass Strips"
        },
        {
           img:[1,2,3,4,5,6],
           title:"Domes"
        },
        {
           img:[1,2,3,4,5,6],
           title:"Flat Domes"
        },
        {
           img:[1,2,3,4,5,6],
           title:"God statues"
        },
       ];
    const des1="Enhance the security of your storage spaces with our Cupboard Locks. Designed for discretion and efficiency, these locks provide robust protection for your valuables. ";
    const des2="Easy to install and operate, they're the perfect solution for keeping your personal items safe and secure in any home or office setting.";
  return (
    <>
      <Header />
      <div className="main-product7">
            <div className="product7-section1">
                <PBannerCard title="Decoratives" des1={des1} des2={des2} />
            </div>

            {/* section2 */}
            {
               section.map((val,i)=>{
                 return(
                <div className="product7-section2">
                <div className="product7-section2-title">{section[i].title}</div>
                <div className="product7-section2-img">
                {section[i].img.map((val)=>{
                            return(
                                <div className="product6-content2-img " style={{background:"#ECECEC",marginTop:"0",justifyContent:"flex-start",gap:"40px"}}>
                                   <img src={img1} alt="" style={{height:"80%"}} />
                                   <div className="product6-content3-title">Door Locks & Latches</div>
                                  </div>
                            )
                        })}
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
