import React from "react";
import Header from "../../Header/Header";
import "./Product8.css";
import PreFooter from "../../PreFooter/PreFooter";
import Footer from "../../Footer/Footer";
import PBannerCard from "../PBannerCard/PBannerCard";
import img1 from "../../../images/prod-3.jpg";

export default function Product8() {
  const img = [1, 2, 3, 4];
  const img2 = [1, 2, 3, 4, 5, 6, 7, 8];

  const section = [
    {
      img: [1, 2, 3],
      title: "Cupboard Pulls",
    },
    {
      img: [1, 2, 3],
      title: "Cupboard Knocks",
    },
  ];

  return (
    <>
      <Header />
      <div className="main-product8">
        <div className="product8-topbanner">
          <div className="product8-title">Furniture Lock & Accessories</div>
        </div>
        <div className="product8-banner">
          <PBannerCard title="Cupboard Locks" />
        </div>

        {/* section1 */}
        <div className="product8-section1">
          {img.map((val) => {
            return (
              <div className="product8-section1-wrapper">
                <img src={img1} alt="" />
                <div className="product8-section1-title"></div>
              </div>
            );
          })}
        </div>

        {/* section added */}
        <div className="product8-section-added">
          <div className="product8-section-added-wrapper">
            <div className="product8-section-added-title">
              Sliding Cupboard Locks
            </div>
            <div className="product8-section-added-w">
              <div className="product8-section-added-left">
                <img src={img1} alt="" />
                <div className="product8-section-added-left-info">title</div>
              </div>
              <div className="product8-section-added-right">
                <div className="product8-section1-wrapper">
                  <img src={img1} alt="" />
                  <div className="product8-section1-title"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className="product8-section2">
          <div className="product8-banner">
            <PBannerCard title="Cupboard Locks" />
          </div>

          <div className="product8-section1">
            {img2.map((val) => {
              return (
                <div className="product8-section1-wrapper">
                  <img src={img1} alt="" />
                  <div className="product8-section1-title"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* section3 */}
        <div className="product8-section3">
          {section.map((val, i) => {
            return (
              <div className="product7-section2">
                <div className="product7-section2-title">
                  {section[i].title}
                </div>
                <div className="product7-section2-img">
                  {section[i].img.map((val) => {
                    return (
                      <div
                        className="product6-content2-img "
                        style={{
                          background: "#ECECEC",
                          justifyContent: "flex-start",
                          gap: "40px",
                        }}
                      >
                        <img src={img1} alt="" style={{ height: "80%" }} />
                        <div className="product6-content3-title">
                          Door Locks & Latches
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}
