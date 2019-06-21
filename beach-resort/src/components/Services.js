import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio corrupti debitis excepturi, maiores exercitationem commodi vel dolorum nam placeat fuga. Reiciendis nemo non, velit sit delectus quasi. Sit, consequuntur!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio corrupti debitis excepturi, maiores exercitationem commodi vel dolorum nam placeat fuga. Reiciendis nemo non, velit sit delectus quasi. Sit, consequuntur!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio corrupti debitis excepturi, maiores exercitationem commodi vel dolorum nam placeat fuga. Reiciendis nemo non, velit sit delectus quasi. Sit, consequuntur!"
      },
      {
        icon: <FaBeer />,
        title: "Strong As Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odio corrupti debitis excepturi, maiores exercitationem commodi vel dolorum nam placeat fuga. Reiciendis nemo non, velit sit delectus quasi. Sit, consequuntur!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
