import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { FaLaptopCode } from "react-icons/fa";

import { filterOptions, portfolioData } from "./utils";
import './styles.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaLaptopCode size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option, key) => (
            <li key={option.id}>{option.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
            {
              portfolioData.map((item)=>(
                <div key={item.sectionId} className="portfolio__content__cards__item">
                  <div className="portfolio__content__cards__item__img-wrapper">
                    <a>
                      <img src={item.image} alt="project"/>
                    </a>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
