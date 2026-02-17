import React, { useState } from "react";
import classes from "./internationalFlightSection.module.css";

function InternationalFlightSection({ flightData }) {
  // First country dropdown open by default
  const [openCountries, setOpenCountries] = useState([0]);

  if (!flightData || !flightData.routes || flightData.routes.length === 0) {
    return null;
  }

  const toggleCountry = (index) => {
    setOpenCountries((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const isCountryOpen = (index) => openCountries.includes(index);

  return (
    <div className={classes.container}>
      <div className={classes.content_wrapper}>
        <div className={classes.heading_container}>
          <p>International Flight Schedule</p>
        </div>

        <div className={classes.accordion_wrapper}>
          {flightData.routes.map((route, index) => (
            <div 
              key={index} 
              className={`${classes.accordion_item} ${isCountryOpen(index) ? classes.open : ""}`}
            >
              <button
                className={classes.accordion_header}
                onClick={() => toggleCountry(index)}
                aria-expanded={isCountryOpen(index)}
              >
                <div className={classes.header_left}>
                  <span className={classes.country_flag}>
                    {route.country === "UNITED STATES" && "US"}
                    {route.country === "UNITED KINGDOM" && "GB"}
                    {route.country === "GERMANY" && "DE"}
                    {route.country === "CANADA" && "CA"}
                  </span>
                  <span className={classes.country_name}>{route.country}</span>
                  <span className={classes.city_count}>{route.cities.length} {route.cities.length === 1 ? "route" : "routes"}</span>
                </div>
                <span className={classes.accordion_icon}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={isCountryOpen(index) ? classes.icon_rotate : ""}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div className={classes.accordion_content}>
                <div className={classes.cities_container}>
                  {route.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className={classes.city_card}>
                      <div className={classes.city_header}>
                        <div className={classes.route_info}>
                          <span className={classes.city_name}>{city.from}</span>
                          <span className={classes.arrow}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </span>
                          <span className={classes.destination}>Islamabad</span>
                        </div>
                        {city.airline && (
                          <span className={classes.airline_badge}>{city.airline}</span>
                        )}
                      </div>
                      
                      {city.flights && city.flights.length > 0 && (
                        <div className={classes.flights_table}>
                          <div className={classes.table_header}>
                            <span>Flight</span>
                            <span>Date</span>
                            <span>Route</span>
                            <span>Time</span>
                          </div>
                          {city.flights.map((flight, flightIndex) => (
                            <div key={flightIndex} className={classes.flight_row}>
                              <span className={classes.flight_code}>{flight.code}</span>
                              <span className={classes.flight_date}>{flight.date}</span>
                              <span className={classes.flight_route}>{flight.route}</span>
                              <span className={classes.flight_time}>{flight.time}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {city.price && (
                        <div className={classes.price_tag}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v12M9 9h6M9 15h6"/>
                          </svg>
                          <span>{city.price}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InternationalFlightSection;
