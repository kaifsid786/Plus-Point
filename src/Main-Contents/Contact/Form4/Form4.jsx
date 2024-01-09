import React, { useRef, useState, useEffect } from "react";
import resImg from "../../../images/contRes.png";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationImg from "../../../images/location.png";
import getCoordinatesFromAddress from "../fetchData";

export default function Form4() {
  const ref = useRef();
  const map = useRef();
  const [centre, setCentre] = useState({ lat: 28.5692, lng: 77.2886 });
  const [showRes, setShowRes] = useState(false);
  const [marker, setMarker] = useState([]);

  useEffect(() => {
    // Access the Leaflet map instance using a ref
    const mapObj = map.current;

    // Check if the map instance exists
    if (mapObj) {
      // Set the new center
      mapObj.panTo(centre);
    }
  }, [centre]);

  const handleSearch = () => {
    setMarker([]);
    var result = dummyData.find((elm) => {
      return elm.pin === ref.current.value;
    });

    if (result != undefined) {
      setShowRes(true);
      fetchAndSetData(result.pin);
      result.geoCode.map((elm) => {
        fetchAndSetMarker(elm);
      });
    } else setShowRes(false);
  };

  const fetchAndSetMarker = async (addr) => {
    try {
      const data = await getCoordinatesFromAddress(addr);
      setMarker((prevArray) => [...prevArray, data]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchAndSetData = async (pin) => {
    try {
      const data = await getCoordinatesFromAddress(pin);
      // console.log(data);
      setCentre(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const dummyData = [
    {
      pin: "Delhi",
      geoCode: ["Okhla Vihar", "Noida Sector 10", "Batla House"],
    },
    {
      pin: "Gorakhpur",
      geoCode: [
        "Deen Dayal Upadhyaya Gorakhpur University",
        "Gorakhpur Railway Station",
      ],
    },
  ];

  const Zoom = 10;
  const customIcon = new Icon({
    iconUrl: locationImg,
    iconSize: [38, 38],
  });

  return (
    <div className="formMapContainer">
      <div className="form3-map-left">
        <div className="form3-map-title">Dealer Locator</div>
        <div className="form3-map-search">
          <input type="text" placeholder="Enter City" ref={ref} />
          <button className="map-btn" onClick={handleSearch}>
            Find
          </button>
        </div>
        {showRes ? (
          marker.map((elm) => {
            return (
              <div className="form3-map-result">
                <div className="map-res-left">
                  <img src={resImg} alt="" />
                </div>
                <div className="map-res-right">
                  <div className="map-res-title">Mr. XYZ CHANDRA</div>
                  <div className="map-res-info">Lorem Ipsum Lorem Ipsum</div>
                  <div className="map-res-ph">
                    {" "}
                    <span>
                      <BsTelephone />
                    </span>{" "}
                    +91 7819927621
                  </div>
                  <div className="map-res-mail">
                    {" "}
                    <span>
                      {" "}
                      <TfiEmail />{" "}
                    </span>
                    Xyzchandra@gmail.com
                  </div>
                  <div className="map-res-adr">
                    {" "}
                    <span>
                      {" "}
                      <CiLocationOn />{" "}
                    </span>
                    Sector 19 block A, Noida
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="form3-map-result">No Result Found</div>
        )}
      </div>
      <div className="form3-map-right">
        {/* <img src={mapImg} alt="" /> */}
        <MapContainer center={centre} zoom={Zoom} ref={map}>
          <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {marker.length != 0 ? (
            marker.map((val) => {
              return <Marker position={val} icon={customIcon} />;
            })
          ) : (
            <Marker position={centre} icon={customIcon} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
