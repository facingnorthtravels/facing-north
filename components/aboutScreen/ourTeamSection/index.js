import React, { useEffect, useState } from "react";
import classes from "./ourTeamSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TeamCard from "./components/teamCard";
import Next from "../../../components/reactSlickButtons/next";
import Prev from "../../../components/reactSlickButtons/prev";
import { team } from "../../../data/team";
import AOS from "aos";
import "aos/dist/aos.css";

function OurTeamSection() {
  const [ourTeam, setOurTeam] = useState([]);

  useEffect(() => {
    if (team?.length > 0) {
      setOurTeam(team);
    }
  }, [team]);

  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration
      easing: "ease-out", // Animation easing (ease, ease-in, ease-out, ease-in-out)
      once: true, // Only trigger the animation once
      // mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <Next bottom={"-80px"} />,
    prevArrow: <Prev bottom={"-80px"} />,
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}>Our Team</p>
      <div className="our_team_slider">
        <Slider arrows={true} {...settings}>
          {ourTeam?.map((member, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={`ourTeam-${index}`}
            >
              <TeamCard key={`ourTeamCard-${index}`} member={member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default OurTeamSection;
