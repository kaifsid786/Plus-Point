import React, { useState }  from "react";
import img from '../../images/PlusPointBrown.png';
import {AiOutlineDown} from 'react-icons/ai';
import {GiHamburgerMenu} from "react-icons/gi";
import  './Header.css';
export default function Header(){
    const [showMenu , setShowMenu] = useState(false);
    const [showHamMenu , setShowHamMenu] = useState(false);
    const [showHamAbout , setShowHamAbout] = useState(false);
    const [showHamMedia , setShowHamMedia] = useState(false);
    const [showHamProducts , setShowHamProducts] = useState(false);
    const show = ()=>{
        setShowHamMenu(!showHamMenu);
    }
    const showAbout = ()=>{
        setShowHamAbout(!showHamAbout);
    }
    const showMedia = ()=>{
        setShowHamMedia(!showHamMedia);
    }
    const showProducts = ()=>{
        setShowHamProducts(!showHamProducts);
    }
    return(
        <>
        <div className="main-header">
            <div className="left-logo">
                <img src={img} alt="" className="head-img" />
            </div>
            <div className={!showMenu ? "right" : "disp"}>
                <ul>
                    <li>Home</li>  
                    <li>Who we are <span> <AiOutlineDown/> </span>
                      <ul className="drop-down">
                          <li>About-1</li>
                          <li>About-2</li>
                          <li>About-3</li>
                      </ul>
                    </li>
                    <li>What we do</li>
                    <li>Media <span> <AiOutlineDown/> </span>
                    <ul className="drop-down">
                          <li>Media-1</li>
                          <li>Media-2</li>
                          <li>Media-3</li>
                          <li>Media-4</li>
                      </ul>
                    </li>
                    <li>Products <span> <AiOutlineDown/> </span>
                    <ul className="drop-down">
                          <li>Products-1</li>
                          <li>Products-2</li>
                          <li>Products-3</li>
                      </ul>
                    </li>
                    <li>Blog</li>
                    <li className="head-contact">Contact</li>
                </ul>
            </div>

            <div className="right-ham-menu">
                 <div className="right-ham-menu-img">
                    <GiHamburgerMenu className="ham-img" onClick={show}/>
                 </div>
            </div>
            <div className={showHamMenu ? "right-ham-content":"right-ham-content disp-ham"}>
                 <ul>
                    <li>Home</li>  
                    <li onClick={showAbout}>Who we are <span> <AiOutlineDown/> </span>
                      <ul className="drop-down-ham"  style={showHamAbout ?{display:"flex"}:{display:"none"}}>
                        <li>About-1</li>
                        <li>About-1</li>
                        <li>About-1</li>
                      </ul>
                    </li>
                    <li>What we do</li>
                    <li onClick={showMedia}>Media <span> <AiOutlineDown/> </span>
                       <ul className="drop-down-ham"  style={showHamMedia ?{display:"flex"}:{display:"none"}}>
                          <li>Media-1</li>
                          <li>Media-1</li>
                          <li>Media-1</li>
                       </ul>
                    </li>
                    <li onClick={showProducts}>Products <span> <AiOutlineDown/> </span> 
                        <ul className="drop-down-ham"  style={showHamProducts ?{display:"flex"}:{display:"none"}}>
                            <li>Product-1</li>
                            <li>Product-1</li>
                            <li>Product-1</li>
                        </ul>
                    </li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                 </div>
        </div>
        </>
    )
}