import React from "react";
import "@styles/CardContainer/CardContainer.css";
import Box from "../Box/Box";
import mixer from "@public/mixer.svg";
import SaleCard from "../SaleCard/SaleCard";
import cardsData from "../../data/CardsData";
import Pagination from "../Pagination/Pagination";
const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card-container-top">
        <div className="card-container-message">Showing 20 - from 125</div>
        <Box title="Sort By" text="Featured" icon={mixer} />
      </div>
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <SaleCard key={index} {...card} />
        ))}
      </div>
      <div className="card-container-footer">
        <Pagination />
      </div>
    </div>
  );
};

export default CardContainer;
