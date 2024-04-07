import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Accordion = ({ arrayName, navId }) => {
  var dayss = arrayName.cites[navId].days;
  const [activeIndexes, setActiveIndexes] = useState(
    dayss.map((_, index) => index) // Set the initial active indexes to an array containing all indices
  );

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div>
      {dayss.map((item, index) => (
        <div key={index}>
          <li className="program_data_container_Itinerary_li">
            <span>{item.day}</span>
            <div className="acLineCont " onClick={() => handleClick(index)}>
              <div className="acLine"></div>
              <div className="acBorder">
                {activeIndexes.includes(index) && (
                  <div className="acBack"></div>
                )}
              </div>
            </div>

            <div className="program_data_container_Itinerary_li_LeftSide">
              <div className="program_data_container_Itinerary_li_LeftSide_text">
                <div style={{ cursor: "pointer", fontSize: "12px" }}>
                  <h3>{item.title}</h3>
                </div>
                {activeIndexes.includes(index) && <p>{item.desc}</p>}
              </div>
              <div
                className="program_data_container_Itinerary_li_LeftSide_icon"
                onClick={() => handleClick(index)}
              >
                {activeIndexes.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
