import React from "react";

export const Map = () => {
  const mapData = {
    title: "MAP",
    address: "19 Grosvenor Road, Southall, London UB2 4BP",
    description: "Our office located in the heart of Southall, London.",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9933.26578536729!2d-0.3762324845324567!3d51.505486048683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672f0a58262b5%3A0x5afc0120c5364b55!2s19%20Grosvenor%20Rd%2C%20Southall%2C%20London%20UB2%204BP%2C%20UK!5e0!3m2!1sen!2sca!4v1695844212947!5m2!1sen!2sca",
  };

  return (
    <div
      id="map"
      className="text-center map-section"
      style={{ width: "100%", paddingBottom: "1rem" }}  // Ensure container takes full width
    >
      <div className="container" style={{ width: "100%" }}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{mapData.title}</h2>
          <p>{mapData.description}</p>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <iframe
              src={mapData.iframeSrc}
              width="100%"  // Ensure iframe takes full width of its container
              height="450px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={mapData.title}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
