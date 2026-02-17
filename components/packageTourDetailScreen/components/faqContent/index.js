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
  }) => {
    return (
      <>
        <div className={classes.answer_section}>
          <div className={classes.para_section}>
            <img
              src={itirnerary_img}
              alt="itirnerary_img"
              width="300px"
              height="250px"
              style={{ objectFit: "cover" }}
            />
            <div>
              <p>{content}</p>
              {premiumHotel ? (
                <p>
                  <b>Premium Hotel:</b> {premiumHotel}
                </p>
              ) : (
                ""
              )}
              {deluxeHotel ? (
                <p>
                  <b>Deluxe Hotel:</b> {deluxeHotel}
                </p>
              ) : (
                ""
              )}
              {activities ? (
                <p>
                  <b>Activities:</b> {activities}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </>
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
