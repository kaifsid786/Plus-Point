import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./Slider.css";



gsap.registerPlugin(ScrollTrigger);

export default function Slider() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="Slider" ref={component}>
     
      <div ref={slider} className="container-slide">
        <div className="slide1 panel">
          <div className="s-left">
            <h1 className="history-year">
              1942
              <br />
              Building a Legacy:
            </h1>
            <span>
              In a small workshop,{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                our extraordinary journey began.
              </span>{" "}
              Fueled by the passion and dedication of two brothers, we crafted{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                locks and hardware
              </span>{" "}
              , laying the foundation of our extraordinary legacy.
            </span>
          </div>
          <div className="s-right">
            <div className="s-img">
              <img
                width="100%"
                src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="slide1 panel">
          <div className="s-left">
            <h1 className="history-year">
              1942
              <br />
              Building a Legacy:
            </h1>
            <span>
              In a small workshop,{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                our extraordinary journey began.
              </span>{" "}
              Fueled by the passion and dedication of two brothers, we crafted{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                locks and hardware
              </span>{" "}
              , laying the foundation of our extraordinary legacy.
            </span>
          </div>
          <div className="s-right">
            <div className="s-img">
              <img
                width="100%"
                src="https://s3-alpha-sig.figma.com/img/2d3a/fa2b/e2d0abcab555643a6eed240782fbb9e3?Expires=1696809600&Signature=lxwYrzDghSSzql-m8U3jVY248xiNa08X4ogEmOoBnShR8-WT-Ur-vPSZo8lJCtutYPHEA2LqNmPf9uNlAhlWe1r4t9cwyVmxCH2~JDU4Wm-3SbUdWWp~qmFC3MphSESF6HZPW-kuQE4hG96CoxjtS-12ozq1PbiUOQMKwUnJJ~hGi4ptPTrFsDLiMXONNtVWJTExUJXOaDs66daiWI7i1YZfN5C1ofrBb3EwFFO41mYWtb8WCPQ1b~ubu3x9vjy7EccirZEAQ2L9y9yQya9kzjrL2ZGd1oDtTB7~wiu5fUusw5oYlYc25kQ7CYq4l39GX6gqL4ab6fblK~Ubqwu2eA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="slide1 panel">
          <div className="s-left">
            <h1 className="history-year">
              1942
              <br />
              Building a Legacy:
            </h1>
            <span>
              In a small workshop,{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                our extraordinary journey began.
              </span>{" "}
              Fueled by the passion and dedication of two brothers, we crafted{" "}
              <span style={{ color: "#1F1F1F", fontWeight: "600" }}>
                locks and hardware
              </span>{" "}
              , laying the foundation of our extraordinary legacy.
            </span>
          </div>
          <div className="s-right">
            <div className="s-img">
              <img
                width="100%"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
