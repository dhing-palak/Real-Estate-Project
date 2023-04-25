import React, { useState, useEffect } from "react";
import { newgallary } from "../../api/api";

export default function NewGallary() {
  const { propertyData, setPropertyData } = useState([]);
  const getPropertyData = async () => {
    try {
      const res = await newgallary();
      const responseData = await res.json();
      setPropertyData((propertyData) => ({
        ...propertyData,
        responseData,
      }));
    } catch (err) {
      console.error("Error while fetching ", err.message);
    }
  };

  useEffect(() => {
    getPropertyData();
  }, []);
  return (
    <>
      <div>Hello </div>
      {console.log(propertyData)}
    </>
  );
}
