import React from "react";
import footer from "./footer.module.css";
import Image from "next/image";
import GoogleMapReact from "google-map-react";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer({ children }) {
  return (
    <>
      {children}
      <div className={footer.mainContiner}>
        <div className={footer.container}>
          <div className={footer.copyRight}>
            <Image
              loading="lazy"
              src="/NuzemF.svg"
              alt="logo"
              layout="intrinsic"
              width={100}
              height={100}
            />
            <div className={footer.copyText}>
              <p>Copyright 2021 © All Rights Reserved. nuzem.com</p>
            </div>
          </div>
          <div className={footer.icons}>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div className={footer.mapContainer}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_MAP,
              }}
              defaultCenter={{ lat: 59.95, lng: 30.33 }}
              defaultZoom={10}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
}
