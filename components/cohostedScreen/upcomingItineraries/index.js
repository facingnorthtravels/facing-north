import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./upcomingItineraries.module.css";

function UpcomingItineraries({ profile }) {
  const itinerarySections = profile?.upcomingItineraries || [];

  if (itinerarySections.length === 0) {
    return null;
  }

  return (
    <>
        <div  className={classes.itineraries_section}>
      {itinerarySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={classes.container}>
            <h2>{section.sectionTitle}</h2>
            
            <div className={classes.itineraries_grid}>
              {section.itineraries && section.itineraries.map((itinerary) => (
                <div key={itinerary.id} className={classes.itinerary_card}>
                  <div className={classes.card_image}>
                    <Image
                      src={itinerary.image}
                      alt={itinerary.title}
                      width={496}
                      height={192}
                      className={classes.image}
                    />
                  </div>
                  
                  <div className={classes.card_content}>
                    <h3>{itinerary.title}</h3>
                    
                    <div className={classes.details}>
                      <div className={classes.detail_item}>
                        <Image
                          src="/assets/cohosted_profile/svgs/Vector-3.svg"
                          alt="Date"
                          width={12}
                          height={14}
                          className={classes.detail_icon}
                        />
                        <span>{itinerary.date}</span>
                      </div>
                      
                      <div className={classes.detail_item}>
                        <Image
                          src="/assets/cohosted_profile/svgs/Vector-4.svg"
                          alt="Travelers"
                          width={16}
                          height={14}
                          className={classes.detail_icon}
                        />
                        <span>{itinerary.travelers}</span>
                      </div>
                  
                      <div className={classes.rating_item}>
                        <div className={classes.stars}>
                          {Array.from({ length: 5 }, (_, index) => (
                            <Image
                              key={index}
                              src={index < Math.floor(itinerary.rating) ? "/assets/cohosted_profile/svgs/star_filled.svg" : "/assets/cohosted_profile/svgs/star_empty.svg"}
                              alt="Star"
                              width={14}
                              height={14}
                              className={classes.star}
                            />
                          ))}
                        </div>
                        <span className={classes.rating_text}>
                          {itinerary.rating} ({itinerary.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <Link href={`${itinerary.link}?host=${profile?.id}` || "#"}>
                      <button className={classes.view_button}>
                        View Itinerary
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      ))}
      </div>
    </>
  );
}

export default UpcomingItineraries;
