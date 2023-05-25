import React from "react";
import useLocation from "../hooks/useLocation";

const LocationHook = () => {
  const { location } = useLocation()
  console.log("🚀 ~ file: LocationHook.jsx:6 ~ LocationHook ~ location:", location)
  return (
    <>
     <p>📍{location?.latitude}</p>
     <p>📌{location?.longitude}</p>
    </>
  );
};

export default LocationHook;
