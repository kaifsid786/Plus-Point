import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PCard.css'
export default function PCard(props) {

  const navigate = useNavigate();
  const navigator = ()=>{
      switch(props.i){
        case 0: navigate("/products/mortoise");
        break;
        case 1: navigate("/products/aldrop");
        break;
        case 2: navigate("/products/pullhandles");
        break;
        case 3: navigate("/products/maindoor");
        break;
        case 4: navigate("/products/locks&latches");
        break;
        case 5: navigate("/products/hinges");
        break;
        case 6: navigate("/products/furniturelock");
        break;
        case 7: navigate("/products/decoratives");
        break;
        case 8: navigate("/products/doorAccessories");
      }

      console.log(props.i);
  }
  return (
    <>
     <div className="main-Pcard" 
      onClick={navigator}
     >
         <img src={props.img} alt="" />
         <div className="Pcard-title" style={props.i===5?{padding:"0 2rem"}:{}}>{props.title}</div>
     </div>
    </>
  )
}
