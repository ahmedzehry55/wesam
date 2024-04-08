import Image from "next/image";
import { useState } from "react";
const FlipCard = ({ arrayName }) => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter((cardIndex) => cardIndex !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="guide_container_icons_div">
      {arrayName.map((item, index) => (
        <div
          key={index}
          className={`guide_container_itemdiv flip-card ${
            flippedCards.includes(index) ? "flipped" : ""
          }`}
          onClick={() => handleFlip(index)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="guide_container_itemdiv">
                <figure>
                  <Image
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    src={item.img}
                    fill
                    alt="img"
                  />
                </figure>
                <span>{item.title}</span>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="guide_container_itemdiv">
                <figure>
                  <Image
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    src={item.img}
                    fill
                    alt="img"
                  />
                </figure>
                <span>{item.title}</span>
                <span
                  style={{
                    color: "#333333",
                    fontSize: "12px",
                    width: "90%",
                    textAlign: "center",
                  }}
                >
                  {item.desc}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlipCard;
