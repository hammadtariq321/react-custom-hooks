import React, { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  function getUserCoordinates() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Something went wrong", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  useEffect(() => {
    const handlePermissionStatus = (status) => {
      if (status === "granted") {
        getUserCoordinates();
      }
    };

    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          result.addEventListener(
            "change",
            () => handlePermissionStatus(result.state),
            { once: true }
          );

          if (result.state === "granted") {
            getUserCoordinates();
          } else if (result.state === "prompt") {
            getUserCoordinates();
          }
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }, []);

  return { location };
};

export default useLocation;
