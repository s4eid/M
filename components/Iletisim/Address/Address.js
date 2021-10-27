import React from "react";
import address from "./address.module.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
export default function Address() {
  return (
    <div className={address.mainContainer}>
      <div className={address.titleContainer}>
        <div className={address.line}></div>
        <div className={address.mapTitle}>
          <FontAwesomeIcon className={address.icon} icon={faMapMarkerAlt} />
          <h1>Address</h1>
        </div>
        <div className={address.line}></div>
      </div>
      <p>esentepe map yildiz sok no:7 kat:2</p>
      <div className={address.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAP,
          }}
          defaultCenter={{ lat: 59.95, lng: 30.33 }}
          defaultZoom={10}
        ></GoogleMapReact>
      </div>
    </div>
  );
}
