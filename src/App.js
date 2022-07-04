import React from "react";
import MainInfo from "./components/MainInfo";
import Description from "./components/Description";
import Footer from "./components/Footer";
import FaceImage from "./components/FaceImage";

export default function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <div className="allContent">
          <FaceImage />
          <MainInfo />
          <Description />
          <Footer />
        </div>
      </div>
    </div>
  );
}
