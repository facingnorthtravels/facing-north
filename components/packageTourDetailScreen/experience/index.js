import React from "react";
import classes from "./experience.module.css";
const Experience = ({ data }) => {
  return (
    <div
      className={classes.experience_container}
      // style={
      //   data?.img
      //     ? {
      //         background: `url(${data?.img.src})`,
      //         backgroundSize: "cover",
      //         backgroundPosition: "center",
      //       }
      //     : {}
      // }
    >
      <div className={classes.experience_text}>
        <h3>What you will experience</h3>
        {data ? (
          <ul>
            {data?.experience_points.map((e) => {
              return <li>• {e}</li>;
            })}
          </ul>
        ) : (
          <ul>
            <li>• Dawn and dusks in Karakoram and Himalayas</li>
            <li>• Heritage of Hunza</li>
            <li>• Bonfire BBQ with traditional music and dance</li>
            <li>
              • Brightening moon at Karimabad and all the way to the Atabad lake
            </li>
            <li>• Serenity of Atabad and Borith Lake</li>
            <li>• Culture diversity of Hunza</li>
            <li>
              • Some of the most delicious food country has to offer from
              northern region
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Experience;
