import React from "react";
import "./CardList.css";
import CardItem from "./CardItem";

export default function CardList() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li className="intro">
              <div className="container">
                <div className="box">
                  <ul className="role">
                    <li className="intro-line-1">
                      <strong>
                        What ideas are brewing in the recesses of your mind?
                      </strong>
                    </li>
                    <li className="intro-line-2">
                      Do you daydream about an online business?
                    </li>
                    <li className="intro-line-3">
                      Are you in search of a creative home base?
                    </li>
                    <li className="intro-line-4">
                      Tell me about those ideas and let's start your next adventure.
                    </li>
                    <li className="proficiencies">
                      <h2>Proficiencies</h2>
                      <i class="fab fa-js">JavaScript </i>
                      <i class="fab fa-html5">HTML5 </i>
                      <i class="fab fa-css3-alt">CSS </i>
                      <i class="fab fa-react">React</i>
                      <i class="fab fa-node-js">Node</i>
                      <i class="fab fa-github">Github</i>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* <li className="intro">
                            <br></br>
                            <p>What ideas are brewing in the recesses of your mind?</p>
                            <p>Do you dream of running an online business during your coffee breaks?</p>
                            <p>Are you an artist in search of a creative home base?</p>
                            <p>Let's talk and start you on your next adventure!</p>

                            <p>Proficiencies: </p>
                            <i class="fab fa-js"> JavaScript  </i> <i class="fab fa-html5"> HTML5  </i> <i class="fab fa-css3-alt"> CSS  </i> <i class="fab fa-react"> React</i> <i class="fab fa-node-js"> Node</i>
                        </li> */}

            <li>
              <h3>featured_proj</h3>
              <CardItem
                src={require("../images/img-4.jpg").default}
                text="Follow my repository for this page as I build it from scratch"
                label="Portfolio"
                path="https://github.com/mqche/portfolio-v2"
              />
            </li>
            <li>
              <h3>upcoming_proj</h3>
              <CardItem
                src={require("../images/img-4.jpg").default}
                text="An app for accessing user profile data using Github's API"
                label="Github Finder"
                path="https://github.com/mqche/github-finder"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
