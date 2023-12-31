import React, { useEffect, useRef, useState }  from "react";
import img from '../../images/PlusPointLogo.png';
import {AiOutlineDown} from 'react-icons/ai';
import {GiHamburgerMenu} from "react-icons/gi";
import  './Header.css';
export default function Header(){

    useEffect(()=>{},window.addEventListener("scroll",()=>{
         if( window.innerWidth > 1000 && window.pageYOffset > 10 && window.pageYOffset < 1500)
           setShowHead(false);
         else if( window.innerWidth <= 1000 && window.pageYOffset > 10 && window.pageYOffset < 600)
         setShowHead(false);
        else
        setShowHead(true);
    }))
    
    const [showHead,setShowHead]=useState(true);
    const [showUl,setShowUl]=useState(false);
    const [showMenu , setShowMenu] = useState(false);
    const [showHamMenu , setShowHamMenu] = useState(false);
    const [showHamAbout , setShowHamAbout] = useState(false);
    const [showHamMedia , setShowHamMedia] = useState(false);
    const [showHamProducts , setShowHamProducts] = useState(false);
    const show = ()=>{
        setShowHamMenu(!showHamMenu);
        setShowUl(true);
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
        <div className="main-header" id="1" style={showHead?{}:{display:"none"}}>
            <div className="left-logo">
                <img src={img} alt="" className="head-img" />
            </div>
            <div className={!showMenu ? "right" : "disp"}>
                <ul>
                    <li> <a href="/">Home</a></li>  
                    <li> <a href="ourTeam">Who we are <span> <AiOutlineDown/> </span></a>
                      <ul className="drop-down">
                          <li> <a href="">About-1</a></li>
                          <li> <a href="">About-2</a></li>
                          <li> <a href="">About-3</a></li>
                      </ul>
                    </li>
                    <li> <a href="">What we do</a></li>
                    <li> <a href="/media">Media <span> <AiOutlineDown/></span></a>
                    <ul className="drop-down">
                          <li> <a href="">Media-1</a></li>
                          <li> <a href="">Media-2</a></li>
                          <li> <a href="">Media-3</a></li>
                          <li> <a href="">Media-4</a></li>
                      </ul>
                    </li>
                    <li> <a href="">Products <span> <AiOutlineDown/> </span></a>
                    <ul className="drop-down">
                          <li> <a href="">Products-1</a></li>
                          <li> <a href="">Products-2</a></li>
                          <li> <a href="">Products-3</a></li>
                      </ul>
                    </li>
                    <li> <a href="">Blog</a></li>
                    <li className="head-contact"> <a href="" style={{color:"#fff"}}>Contact</a></li>
                </ul>
            </div>

            <div className="right-ham-menu">
                 <div className="right-ham-menu-img">
                    <GiHamburgerMenu className="ham-img" onClick={show}/>
                 </div>
            </div>
        </div>
         <div className={showHamMenu ? "right-ham-content":"right-ham-content disp-ham"} style={(showHead && showUl)?{}:{height:"0"}}>
                 <ul style={(showUl && showHead)?{}:{display:"none"}}>
                    <li><span><a href="/">Home</a></span></li>
                    <li><span><a href="/ourTeam">Who we are</a> <AiOutlineDown onClick={showAbout}/></span>
                        <ul style={showHamAbout?{height:"10rem",marginTop:"20px"}:{height:"0"}}>
                            <li><a href="">About-1</a></li>
                            <li><a href="">About-2</a></li>
                            <li><a href="">About-3</a></li>
                        </ul>
                    </li>
                    <li><span><a href="">What we do</a></span></li>
                    <li><span><a href="/media">Media</a> <AiOutlineDown onClick={showMedia}/></span>
                        <ul style={showHamMedia?{height:"15rem",marginTop:"20px"}:{height:"0"}}>
                            <li><a href="">Media-1</a></li>
                            <li><a href="">Media-2</a></li>
                            <li><a href="">Media-3</a></li>
                            <li><a href="">Media-4</a></li>
                        </ul>
                    </li>
                    <li><span><a href="">Products</a> <AiOutlineDown onClick={showProducts}/></span>
                          <ul style={showHamProducts?{height:"10rem",marginTop:"20px"}:{height:"0"}}>
                            <li><a href="">Product-1</a></li>
                            <li><a href="">Product-2</a></li>
                            <li><a href="">Product-3</a></li>
                        </ul>
                    </li>
                    <li><span><a href="">Blogs</a></span></li>
                    <li><span><a href="">Contacts</a></span></li>
                 </ul>
             </div>
        </>
    )
}