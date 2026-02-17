import React from "react";
import classes from "./whatsincluded.module.css";
import Image from "next/image";
import dinner from "../../../public/assets/package_tour_assets/dinner.png";
import jeep from "../../../public/assets/package_tour_assets/jeep-2.png";
import accommodation from "../../../public/assets/package_tour_assets/accommodation.png";
import check from "../../../public/assets/package_tour_assets/check.png";
import group from "../../../public/assets/package_tour_assets/group.png";
import best_employee from "../../../public/assets/package_tour_assets/best-employee.png";
import tickets from "../../../public/assets/package_tour_assets/tickets.png";
import speed from "../../../public/assets/package_tour_assets/speed.png";
import bonfire from "../../../public/assets/package_tour_assets/1_Bonfire.svg";
import entry_tickets from "../../../public/assets/package_tour_assets/1_Entry tickets.svg";
import souvenirs from "../../../public/assets/package_tour_assets/1_Souvenirs.svg";
import musical_night from "../../../public/assets/package_tour_assets/1_musical night.svg";

const WhatsIncluded = ({ itineraryData, includeData, notIncluded }) => {
  return (
    <div
      className={classes.whats_included_section}
      //   style={{ marginBottom: "100px" }}
    >
      <h2 className={classes.title}>What's Included</h2>
      <div className={classes.Includes_cards_container}>
        <div className={classes.Includes_card}>
          <Image src={dinner} width={42} height={35} alt="Meal" />
          <h5>MEAL</h5>
          <div>
            {/* <p>{includeData?.meal?.breakfasts || "21"}x Breakfasts</p>
            <p>{includeData?.meal?.lunches || "21"} x Lunches</p>
            <p>{includeData?.meal?.lunches || "20"} x Dinners</p> */}
            {/* {includeData?.deluxe?.meals && (
              <p>Deluxe:{includeData?.deluxe?.meals}</p>
            )} */}
            {includeData?.premium?.meals ? (
              <p>{includeData?.premium?.meals}</p>
            ) : (
              <p>3 Meals/Daily</p>
            )}
          </div>
        </div>
        <div className={classes.Includes_card}>
          <Image src={jeep} height={35} alt="Transport" />
          <h5>Transport</h5>
          {/* <p>
            {includeData?.transport ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
          </p> */}
          {/* {includeData?.deluxe?.transportation && (
            <p>Deluxe:{includeData?.deluxe?.transportation}</p>
          )} */}
          {includeData?.premium?.transportation ? (
            <p>{includeData?.premium?.transportation}</p>
          ): (
            <p>Toyota Coaster & 4x4 Jeeps</p>
          )}
        </div>
        <div className={classes.Includes_card}>
          <Image src={group} width={42} height={35} alt="Group size" />
          <h5>Group size</h5>
          {/* <p>Maximum: {includeData?.group_size || "21"}</p> */}
          {/* {includeData?.deluxe?.groupSizeMin &&
            includeData?.deluxe?.groupSizeMax && (
              <p>
                Deluxe:{includeData?.deluxe?.groupSizeMin} - {""}
                {includeData?.deluxe?.groupSizeMax}
              </p>
            )} */}
          {includeData?.premium?.groupSizeMin &&
            includeData?.premium?.groupSizeMax ? (
              <p>
                {includeData?.premium?.groupSizeMin} - {""}
                {includeData?.premium?.groupSizeMax}
              </p>
            ) : (
              <p>8 - 12 pax</p>
            )}
        </div>
        <div className={`${classes.Includes_card} ${classes.end_card}`}>
          <Image src={best_employee} width={42} height={35} alt="Expert team" />
          <h5>expert team</h5>
          <p>
            {includeData?.expert_team ||
              "Trained English speaking guide and resident director"}
          </p>
        </div>
        <div className={`${classes.Includes_card2} ${classes.end_card}`}>
          <Image src={accommodation} width={42} height={35} alt="Accommodation" />
          <h5>ACCOMMODATION</h5>
          <p>
            {includeData?.accommodation ||
              "All accommodation as outlined in the itinerary. We’ll make sure room sharing is matched by gender unless otherwise requested"}
          </p>
        </div>
        <div className={classes.Includes_card2}>
          <Image src={tickets} width={42} height={35} alt="Entrance fees" />
          <h5>ENTRANCE FEES</h5>
          <p>
            {includeData?.entery_fees ||
              "entrance fees for sights mentioned in the itinerary"}
          </p>
        </div>
        <div className={classes.Includes_card2}>
          <Image src={speed} width={42} height={35} alt="Fitness rating" />
          <h5>FITNESS RATING</h5>
          <p>{includeData?.fitness_rating || "Moderate"}</p>
        </div>
        <div className={classes.Includes_card2}>
          <Image src={check} width={42} height={35} alt="Book with confidence" />
          <h5>BOOK WITH CONFIDENCE</h5>
          <p>
            {includeData?.with_confidence ||
              "All Flexible booking conditions regarding transfer and cancellations"}
          </p>
        </div>
        {/* ///////////////////Next Line////////////////// */}

        <div className={`${classes.Includes_card3} ${classes.end_card}`}>
          <Image src={bonfire} width={60} height={50} alt="Bonfire" />
          <h5>Bonfire</h5>
          <p>
            1x Bonfire Night
            {/* {includeData?.bonfire ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."} */}
          </p>
        </div>
        <div className={classes.Includes_card3}>
          <Image src={musical_night} width={60} height={50} alt="Traditional musical night" />
          <h5>Tradtional musical night </h5>
          <p>
            1x Tradtional musical night
            {/* {includeData?.tradtional  ||
              "All accommodation as outlined in the itinerary"} */}
          </p>
        </div>
        <div className={classes.Includes_card3}>
          <Image src={souvenirs} width={60} height={50} alt="Souvenirs" />
          <h5>Souvenirs</h5>
          <p>
            1x Souvenirs
             {/* {includeData?.souvenirs ||
              "entrance fees for sights mentioned in the itinerary"} */}
          </p> 
        </div>
        <div className={classes.Includes_card3}>
          <Image src={entry_tickets} width={60} height={50} alt="Entry tickets" />
          <h5>Entry tickets</h5>
          <p>
            All Inclusive
            {/* {includeData?.tickets ||
              "All Flexible booking conditions regarding transfer and cancellations"} */}
          </p>
        </div>
        {/* ///////////////////Next Line////////////////// */}
      </div>
      {notIncluded?.length > 0 && (
        <div className={classes.whats_not_included}>
          <p>Please note, the following are NOT INCLUDED in our trip:</p>
          <div className={classes.not_included_list}>
            {notIncluded?.map((e, i) => {
              return <p key={`notIncluded${i}`}>• {e} </p>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsIncluded;
