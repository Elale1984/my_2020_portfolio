import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {FaLaptopCode} from 'react-icons/fa'

const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<FaLaptopCode size={40} />}
        />
      </section>
    )
}
export default Portfolio;