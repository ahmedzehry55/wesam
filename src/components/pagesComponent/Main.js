import React from "react";
import MainCard from "./MainCard/MainCard";
import SocNavbar from "./socNavbar/SocNavbar";
import { socnav1 } from "../../constants/constants";
function Pagescomponent({
  cardText,
  arryName,
  title,
  span,
  currntpath,
  textAlignProp,
  cardWidth,
  catdHeight,
  just,
}) {
  return (
    <div className="pagescomponent_container">
      <div
        className="pagescomponent_inner_container"
        style={{ alignItems: `${textAlignProp}` }}
      >
        <h1 className="pages_h1"> {title}</h1>
        <span className="pages_span" style={{ textAlign: `${textAlignProp}` }}>
          {span}
        </span>
        <MainCard
          itemText={cardText}
          arryName={arryName}
          pathname={currntpath}
          itemWidth={cardWidth}
          itemHeight={catdHeight}
          justitem={just}
        />
      </div>
    </div>
  );
}

export default Pagescomponent;
