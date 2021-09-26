import React from "react";
import "./CardList.css";
import CardItem from "./CardItem";
import CardIntro from "./CardIntro";

export default function CardList() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
           
              <CardIntro />
                 
              <CardItem
                src={require("../images/img-4.jpg").default}
                text="Reservation app to create, edit, and track reservations"
                label="Restaurant Reservation"
                path="https://github.com/mqche/restaurant-reservation-app"
                proj="featured_proj"
              />
           
            
              <CardItem
                src={require("../images/img-4.jpg").default}
                text="Follow my repository for this page as I build it from scratch"
                label="Portfolio"
                path="https://github.com/mqche/portfolio-v2"
                proj="upcoming_proj"
              />
            
          </ul>
        </div>
      </div>
    </div>
  );
}
