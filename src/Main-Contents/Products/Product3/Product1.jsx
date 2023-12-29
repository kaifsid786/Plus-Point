import React, { useState } from "react";
import Header from "../../Header/Header";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import { AiOutlineDown } from "react-icons/ai";
import PSquare from "../PSquare/PSquare";
import img1 from "../../../images/prod-3.jpg";
import pimg from "../../../images/prod-1.jpg";
import ProductPhone from "../ProductPhone/ProductPhone";
export default function Product1() {
  const [dd, setDd] = useState(true);
  const [dd1, setDd1] = useState(false);
  const [dd2, setDd2] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState([]);

  const handleComponentClick = (index) => {
    const isSelected = selectedComponents.includes(index);
    if (isSelected) {
      setSelectedComponents((prevSelected) =>
        prevSelected.filter((item) => item !== index)
      );
    } else {
      setSelectedComponents((prevSelected) => [...prevSelected, index]);
    }
  };

  const section = [
    {
      img: [1, 2, 3, 4, 5],
      title: "By Application",
      info: "Info here",
    },
    {
      img: [1, 2, 3],
      title: "By Type",
      info: "Info here",
    },
  ];
  const img3 = ["30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%", "30%"];
  const des1 =
    "Our mortise lock sets combine security with sophistication, offering a range of options for both commercial and residential applications. Our selection features durable materials and finishes that withstand daily use and enhance your door's aesthetics. ";
  const des2 =
    "Each set is engineered for smooth operation and reliable locking mechanisms, ensuring peace of mind. Explore our collection to find the perfect blend of function and style for your space.";
  const app = ["Luxurious", "Pocket Friendly", "Super Friendly"];
  const style = [
    "Classic (All time fav)",
    "Mordern & Minimalist",
    "Bold",
    "Traditional",
  ];
  const material = ["Brass", "Zinc", "Aluminium", "Stainless Steel"];

  return (
    <>
      <Header />
      <div className="main-product1">
        <div className="product1-banner">
          <PBannerCard
            title="Mortise Lock Sets"
            img={pimg}
            des1={des1}
            des2={des2}
          />
        </div>

        {/* sections */}
        {section.map((val, i) => {
          return (
            <div className="product1-section1">
              <div className="product1-section1-title">{section[i].title}</div>
              <div
                className="product1-section1-info"
                style={{ fontSize: "1.5rem" }}
              >
                {section[i].info}
              </div>
              <div className="product1-section1-img-wrapper">
                {section[i].img.map((val, i) => {
                  return (
                    <div className="product1-section1-img-wrapper-w">
                      <img src={img1} alt="" />
                      <p>Title</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* section3 */}
        <div
          className="product1-section3"
          style={window.innerWidth <= 500 ? { display: "none" } : {}}
        >
          <div className="product1-section3-left">
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Affordability</div>
                <span
                  onClick={() => {
                    setDd(!dd);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd
                    ? { height: `calc(${app.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {app.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd ? { display: "none" } : {}}
                    >
                      <span
                        onClick={() => {
                          handleComponentClick(`${i}A`);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(`${i}A`) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Style</div>
                <span
                  onClick={() => {
                    setDd1(!dd1);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd1
                    ? { height: `calc(${style.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {style.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd1 ? { display: "none" } : {}}
                    >
                      <span
                        onClick={() => {
                          handleComponentClick(`${i}S`);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(`${i}S`) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-afford">
              <div className="p-afford-main">
                <div className="p-afford-title">Material</div>
                <span
                  onClick={() => {
                    setDd2(!dd2);
                  }}
                >
                  <AiOutlineDown />
                </span>
              </div>
              <div
                className="p-afford-dropDown"
                style={
                  dd2
                    ? { height: `calc(${material.length} * 4rem - 1rem)` }
                    : { height: "0" }
                }
              >
                {material.map((val, i) => {
                  return (
                    <div
                      className="p-afford-dd-wrapper"
                      style={!dd2 ? { display: "none" } : {}}
                    >
                      <span
                        onClick={() => {
                          handleComponentClick(`${i}M`);
                        }}
                      >
                        <PSquare
                          st={
                            selectedComponents.includes(`${i}M`) ? true : false
                          }
                        />
                      </span>
                      <div className="p-afford-dd-title">{val}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="product1-section3-right">
            {img3.map((val) => {
              return <img src={img1} alt="" />;
            })}
          </div>
        </div>

        <div
          className="product1-mob-section3"
          style={window.innerWidth > 500 ? { display: "none" } : {}}
        >
          <ProductPhone imgArr={img3} img={img1} />
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
