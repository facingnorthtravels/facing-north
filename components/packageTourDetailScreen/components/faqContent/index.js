import React, { useState } from "react";
import classes from "./faqContent.module.css";
import Faq from "react-faq-component";

function TourFaq({ FaqData, itineraryData }) {
  const [rowsOption, setRowsOption] = useState(null);

  if (rowsOption?.[0]) {
    rowsOption[0]?.expand()
  }


  const AnswerSection = ({
    content,
    itirnerary_img,
    premiumHotel,
    deluxeHotel,
    activities,
    hotel,
  }) => {
    return (
      <div className={classes.answer_section}>
        <div className={classes.day_card}>
          <div className={classes.day_image_wrap}>
            <img
              src={itirnerary_img}
              alt="Itinerary day"
              className={classes.day_image}
            />
            <div className={classes.day_fade} />
          </div>
          <div className={classes.day_body}>
            <p className={classes.day_desc}>{content}</p>
            <div className={classes.day_details}>
              {hotel ? (
                <div className={classes.day_detail_row}>
                  <span className={classes.day_detail_label}>Overnight</span>
                  <span className={classes.day_detail_value}>{hotel}</span>
                </div>
              ) : null}
              {premiumHotel ? (
                <div className={classes.day_detail_row}>
                  <span className={classes.day_detail_label}>Premium Hotel</span>
                  <span className={classes.day_detail_value}>{premiumHotel}</span>
                </div>
              ) : null}
              {deluxeHotel ? (
                <div className={classes.day_detail_row}>
                  <span className={classes.day_detail_label}>Deluxe Hotel</span>
                  <span className={classes.day_detail_value}>{deluxeHotel}</span>
                </div>
              ) : null}
              {activities ? (
                <div className={classes.day_detail_row}>
                  <span className={classes.day_detail_label}>Activities</span>
                  <span className={classes.day_detail_value}>{activities}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const data = {
    rows: FaqData
      ? FaqData?.map((e) => ({
        title: `Day ${e.id + 1}: ${e?.title} `,
        content: (
          <AnswerSection
            content={`${e?.description}`}
            itirnerary_img={`${e?.iternaries_img}`}
            premiumHotel={e?.premiumHotel ? e?.premiumHotel : null}
            deluxeHotel={e?.deluxeHotel ? e?.deluxeHotel : null}
            activities={e?.activities ? e?.activities : null}
            hotel={e?.hotel ? e?.hotel : null}
          />
        ),
      }))
      : [],
  };
  const config = {
    animate: true,
    tabFocus: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: <div className={classes.plus}>+</div>,
    collapseIcon: <div className={classes.minus}>‾</div>,
  };

  const handleExpandAll = () => {
    if (!rowsOption?.length) return;
    rowsOption.forEach((row) => {
      if (typeof row?.expand === "function") row.expand();
    });
  };

  const handleCollapseAll = () => {
    if (!rowsOption?.length) return;
    rowsOption.forEach((row) => {
      if (typeof row?.close === "function") row.close();
      else if (typeof row?.collapse === "function") row.collapse();
    });
  };
  return (
    <div className={classes.container}>
      {/* <div className={classes.content_container}> */}
      <div className={classes.expandContainer}>
        <button type="button" onClick={handleExpandAll}>
          <span>
            EXPAND ALL <span className={classes.detailLabel}>ITINERARY DAYS</span>
          </span>
          <span className={classes.plus}>+</span>  
        </button>
        <button type="button" onClick={handleCollapseAll}>
          <span>
            COLLAPSE ALL <span className={classes.detailLabel}>ITINERARY DAYS</span>
          </span>
          <span className={classes.minus}>‾</span>
        </button>
      </div>
      <Faq
        styles={{
          titleTextColor: "#176060",
          rowTitleColor: "#176060",
          bgColor: "transparent",
          // height:"unset",
        }}
        config={config}
        data={data}
        getRowOptions={(val) => setRowsOption(val)}
      />
      {/* </div> */}
    </div>
  );
}

export default TourFaq;
