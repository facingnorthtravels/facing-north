import React from "react";
import classes from "./teamCard.module.css";
// import team from "../../../../../public/assets/about-page-assets/team.png";

function TeamCard({ member }) {
  return (
    <div className={classes.card_body}>
      <div className={classes.img_container}>
        <img src={member?.img} alt="team" />
      </div>
      <div className={classes.content_container}>
        <h2>{member?.name}</h2>
        <p className={classes.founder_text}>{member?.title}</p>
        <p className={classes.description}>{member?.para}</p>
      </div>
    </div>
  );
}

export default TeamCard;
