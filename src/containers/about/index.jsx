import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import {
  DiAndroid,
  DiJava,
  DiHtml5,
  DiJavascript1,
  DiPython,

} from "react-icons/di";
import { SiKotlin } from "react-icons/si";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Edward Lale",
  },
  {
    label: "Email",
    value: "edwardlale1984@gmail.com",
  },
  {
    label: "Location",
    value: "Kansas",
  },
  {
    label: "Phone Number",
    value: "620-899-8589",
  },
];

const About = () => {
  const aboutSummery =
    "Highly motivated full stack software designer seeking a full-time junior developer role in a competitive and learning rich environment where I can grow my skills and demonstrate my ability to bring a creative edge to an already established product. I will bring 3 years of experience including multiple languages in multiple platforms and am currently finishing my bachelor’s degree in software development.  I would love to join your team and be a part of enhancing the user experience.";
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.0}
            delay={0.2}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{aboutSummery}</p>
          </Animate>

          <Animate
            play
            duration={1.0}
            delay={0.2}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.0}
            delay={0.2}
            start={{
              transform: "translateY(600px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJava size={80} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJavascript1 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiPython size={70} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiHtml5 size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiKotlin size={50} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
          /</Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
