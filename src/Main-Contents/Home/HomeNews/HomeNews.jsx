import React from 'react'
import './HomeNews.css';
import homeNews1 from '../../../images/homeNews-1.png';
import homeNews2 from '../../../images/homeNews-2.png';
import homeNews3 from '../../../images/homeNews-3.png';
import {motion}  from 'framer-motion';
export default function HomeNews(props) {
  return (
    <>
      <div className="main-homeNews xyz">
          <motion.div
          initial={props.anim?{y:"5rem",opacity:0}:{}}
          whileInView={{y:"0",opacity:1}}
          transition={{
            duration:1,
          }}
           className="homeNews-title">
           Blogs
          </motion.div>
          <motion.div
            initial={props.anim?{y:"5rem",opacity:0}:{}}
            whileInView={{y:"0",opacity:1}}
            transition={{
              duration:1,
            }}
           className="homeNews-para">
          Here, we lay the foundation of something special. The precision & quality of our motion.div
          ersified range of products is down to our brilliant manufacturing unit.
          </motion.div>
          <div className="homeNews-contents">
                <div className="homeNews-content">
                    <img src={homeNews1} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
                <div className="homeNews-content">
                    <img src={homeNews2} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
                <div className="homeNews-content">
                    <img src={homeNews3} alt="" />
                     <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p> 
                </div>
          </div>
      </div>
    </>
  )
}
