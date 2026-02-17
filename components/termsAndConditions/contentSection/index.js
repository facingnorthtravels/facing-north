import React, { useState } from "react";
import classes from "./contentSection.module.css";
import { useWindowSize } from "../../../utils";
import * as emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
function ContentSection() {
  const { width } = useWindowSize();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDateWithMonthName = (date) => {
    let d = new Date();
    if (date) {
      d = new Date(date);
    }
    let month = months[d.getMonth()];
    let day = d.getDate().toString().padStart(2, "0");
    let year = d.getFullYear().toString().padStart(4, "0");
    return `${day} ${month} ${year}`;
  };
  const [startDate, setStartDate] = useState(new Date());
  // console.log(width);
  const [emailData, setEmailData] = useState({
    signature: "",
    desc: "",
    name: "",
    lname: "",
    gender: "",
    date: "Date",
    email_address: "",
    address: "",
    blood: "",
    ph_num: "",
    passport_or_id_card: "",
    nationality: "",
    birth: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
  });
  const [sendValue, setSendValue] = useState(false);
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setEmailData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(emailData);
  };
  const SendMail = () => {
    const pick_date = getDateWithMonthName(emailData.date);
    const Data = {
      signature: emailData.signature,
      desc: emailData.desc,
      name: emailData.name,
      lname: emailData.lname,
      gender: emailData.gender,
      email_address: emailData.email_address,
      ph_num: emailData.ph_num,
      address: emailData.address,
      blood: emailData.blood,
      passport_or_id_card: emailData.passport_or_id_card,
      nationality: emailData.nationality,
      birth: emailData.birth,
      date: pick_date,
      emergency_contact_name: emailData.emergency_contact_name,
      emergency_contact_number: emailData.emergency_contact_number,
      desc: emailData.desc,
      ///////////////Contact/////////////
      city: "None",
      number_people: "None",
      number_days: "None",
      pre_travel: "None",
      message: "None",
    };
    // console.log(Data);
    const Req_Data = {
      name: emailData.name,
      lname: emailData.lname,
      email_address: emailData.email_address,
      ph_num: emailData.ph_num,
    };

    const requiredFields = Object.values(Req_Data);
    const isAnyFieldEmpty = requiredFields.some((field) => !field.trim());

    if (isAnyFieldEmpty) {
      return; // Prevent form submission
    } else {
      const Service_id = "template_0xlwhho";
      const Template_id = "template_0xlwhho";
      const user_id = "l4IWOqZtHsrX8RILR";

      emailjs.send(Service_id, Template_id, Data, user_id).then(
        function (response) {
          toast.success("Message Sent Successfully!");
          setEmailData({
            signature: "",
            desc: "",
            name: "",
            lname: "",
            gender: "",
            date: "Date",
            email_address: "",
            address: "",
            blood: "",
            ph_num: "",
            passport_or_id_card: "",
            nationality: "",
            birth: "",
            emergency_contact_name: "",
            emergency_contact_number: "",
          });
        },
        function (error) {
          toast.error("Message couldn't be sent");
        }
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      {sendValue === true && (
        <div id="myModal" className={classes.modal}>
          <div className={classes.modal_content}>
            <div className={classes.details_modal_title}>
              <span
                className={classes.close}
                onClick={() => setSendValue(false)}
              >
                &times;
              </span>
              <h1>Message Sent Successfully!</h1>
            </div>
            <p>
              Thank you for reaching out to us. We'll get back to you as soon as
              possible. Have a great day!
            </p>
          </div>
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.content_container}>
          <div className={classes.section}>
            <h2 className={classes.heading}>Booking Policy</h2>

            <p className={classes.para}>
              To secure the booking for a scheduled tour, a 50% advance payment
              is required, and the remaining payment must be cleared one month
              prior to the tour's departure.
            </p>

            <p className={classes.para}>
              For customized tours, 100% must be made at the time of booking,
              unless otherwise agreed upon.
            </p>

            <p className={classes.para_bold}>
              Cancellation of the tour shall be subject to the following
              charges, unless otherwise agreed:
            </p>
            <div className={classes.para_container}>
              <p className={classes.para}>
                - If the cancellation is made two or more months prior to
                departure, a deduction of 10% of the advance payment will be
                applied to cover administrative costs.
              </p>

              <p className={classes.para}>
                - If the cancellation is made between one to two months prior to
                departure, a deduction of 50% of the advance payment will be
                applied.
              </p>

              <p className={classes.para}>
                - If the cancellation is made less than one month prior to
                departure, a deduction of 75% of the advance payment will be
                applied.
              </p>

              <p className={classes.para}>
                - If the cancellation is made less than 15 days prior to
                departure, a deduction of 100% of the advance payment will be
                applied.
              </p>

              <p className={classes.para}>
                - It is important to note that these terms and conditions are
                legally binding and may only be altered or waived in writing by
                mutual agreement between the parties involved.
              </p>
            </div>
          </div>

          <div className={classes.section}>
            <h2 className={classes.heading}>Insurance Policy</h2>

            <p className={classes.para}>
              Facing North does not assume any responsibility for providing
              travel and liability insurance, medical aid, or helicopter rescue
              coverage to participants joining our tours. As such, we advise all
              participants to secure appropriate travel insurance from a
              reliable source before embarking on our tours.
            </p>

            <p className={classes.para}>
              To ensure that participants are fully protected, we highly
              recommend investing in a comprehensive travel insurance policy
              that covers all the activities and areas included in their travel
              plans, including overseas medical costs and medical evacuation if
              necessary.
            </p>

            <p className={classes.para}>
              We recommend considering travel insurance providers such as "World
              Nomads" and "True Traveller" to obtain adequate coverage.
            </p>

            <p className={classes.para}>
              By obtaining comprehensive travel insurance, participants can have
              peace of mind knowing that they are fully protected against
              unexpected incidents that may arise during their travels with
              Facing North.
            </p>
          </div>

          <div className={classes.section}>
            <h2 className={classes.heading}>Wavier Policy</h2>
            <div className={classes.para_container}>
              <p className={classes.para}>
                This agreement serves to release Facing North from any and all
                liability for injuries and property damage that may occur during
                the tour. By signing this agreement, the undersigned party
                agrees to hold Facing North entirely free from any liability,
                including financial responsibility for injuries and property
                damage.
              </p>

              <p className={classes.para}>
                The undersigned party acknowledges the risks involved in the
                tour, including but not limited to property damage, illness
                caused by food consumption, hiking on rough terrain, and various
                activities at high altitudes. It is hereby confirmed that the
                undersigned party has appropriate travel insurance that covers
                such risks.
              </p>

              <p className={classes.para}>
                The undersigned party confirms that participation in the tour is
                voluntary and that all risks have been made clear. Additionally,
                the undersigned party does not have any conditions that increase
                the likelihood of experiencing injuries while engaging in the
                tour.
              </p>

              <p className={classes.para}>
                By signing below, the undersigned party forfeits all rights to
                bring a lawsuit against Facing North for any reason.
                Furthermore, the undersigned party acknowledges that if rented
                equipment offered by Facing North is damaged, they will be
                required to reimburse the total cost of the equipment.
              </p>

              <p className={classes.para}>
                The undersigned party agrees to make every effort to obey safety
                precautions as listed in writing and as explained verbally, and
                to ask for clarification when necessary.
              </p>

              <p className={classes.para_bold}>
                The undersigned party has been fully made aware of the following
                conditions:
              </p>

              <p className={classes.para}>
                - On an adventure trip of this nature, weather, local politics,
                transport, and other factors beyond the control of the
                organizers can result in a change of itinerary. If alterations
                are necessary, the group leader and guide will decide the best
                possible alternative in the best interests of the group.
              </p>

              <p className={classes.para}>
                - Facing North does not provide travel and liability insurance,
                medical aid, and helicopter rescue coverage. Participants are
                advised to obtain travel insurance from a reliable source before
                joining the trip.
              </p>

              <p className={classes.para}>
                - In case of any unforeseen circumstances, including but not
                limited to natural catastrophes, political or security issues,
                any additional costs incurred will be covered by the
                participants.
              </p>

              <p className={classes.para}>
                - Facing North is not responsible for personal injuries and
                accidents or the loss of any valuable item.
              </p>

              <p className={classes.para}>
                - No refunds shall be made in case a participant leaves the trip
                during the event due to any reason.
              </p>
              <p className={classes.para}>
                - All participants must follow the itinerary provided. Facing
                North will not be responsible for any mishap and will bear no
                additional costs if any participant decides to deviate from the
                given schedule.
              </p>
              <p className={classes.para}>
                - No refunds shall be made in case of a natural disaster or any
                unforeseen circumstance beyond human control.
              </p>
              <p className={classes.para}>
                - Personal weapons and drugs are strictly prohibited.
              </p>
              <p className={classes.para}>
                - Participants must behave ethically with fellow group members.
              </p>
              <p className={classes.para}>
                - It is essential to note that these terms and conditions are
                legally binding and may only be altered or waived in writing by
                mutual agreement between the parties involved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.form_container}>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.single_row}>
            <input type={"checkbox"} />
            <p className={classes.input_para}>
              {" "}
              I have read, fully understand, and agree to the above terms.
              Consider this as my digital signature
            </p>
          </div>

          <div
            // style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.single_row_inputs} input_row_single`}
          >
            <input
              placeholder="Your Signature"
              className={`${classes.signature_input} input_field`}
              name="signature"
              onChange={inputEvent}
              value={emailData?.signature}
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date); // Update the startDate state
                setEmailData((prevData) => ({
                  ...prevData,
                  date: date, // Update the date in your emailData state
                }));
              }}
              type="text"
              name="date"
              placeholder="Date"
              className={`${classes.date_input} input_field`}
              value={emailData?.date}
              id="availableFrom"
            />
          </div>

          <div className={classes.single_row}>
            <input type={"checkbox"} />
            <p className={classes.input_para}>
              {" "}
              I'm also aware that Facing North will shoot photo and video
              material for publication on their website and social media
              channels and that there is a chance that I might appear on these
              photos and videos during the tour. I hereby allow Facing North the
              right to publish photos and videos unless otherwise stated below.
            </p>
          </div>

          <div style={{ width: "100%" }} className="input_row_single">
            <textarea
              style={{ height: "150px" }}
              placeholder="Type your description here"
              className="input_field"
              name="desc"
              onChange={inputEvent}
              value={emailData?.desc}
            />
          </div>

          <h2 className={classes.heading}>Personal Information</h2>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Your Name"
              className="input_field"
              required
              name="name"
              onChange={inputEvent}
              value={emailData?.name}
            />
            <input
              placeholder="Last Name"
              className="input_field"
              required
              name="lname"
              onChange={inputEvent}
              value={emailData?.lname}
            />
          </div>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Gender"
              className="input_field"
              name="gender"
              onChange={inputEvent}
              value={emailData?.gender}
            />
            <input
              placeholder="Passport or ID Card"
              className="input_field"
              name="passport_or_id_card"
              onChange={inputEvent}
              value={emailData?.passport_or_id_card}
            />
          </div>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Nationality"
              className="input_field"
              name="nationality"
              onChange={inputEvent}
              value={emailData?.nationality}
            />
            <input
              placeholder="Date of Birth"
              className="input_field"
              name="birth"
              onChange={inputEvent}
              value={emailData?.birth}
            />
          </div>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Phone"
              className="input_field"
              required
              name="ph_num"
              onChange={inputEvent}
              value={emailData?.ph_num}
            />
            <input
              placeholder="Email"
              className="input_field"
              required
              name="email_address"
              onChange={inputEvent}
              value={emailData?.email_address}
            />
          </div>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Address"
              className="input_field"
              name="address"
              onChange={inputEvent}
              value={emailData?.address}
            />
            <input
              placeholder="Blood Group"
              className="input_field"
              name="blood"
              onChange={inputEvent}
              value={emailData?.blood}
            />
          </div>

          <div
            style={{ width: width < 1025 ? "100%" : "70%" }}
            className={`${classes.info_input_row}  input_row_single`}
          >
            <input
              placeholder="Emergency Contact Name"
              className="input_field"
              name="emergency_contact_name"
              onChange={inputEvent}
              value={emailData?.emergency_contact_name}
            />
            <input
              placeholder="Emergency Contact Number"
              className="input_field"
              name="emergency_contact_number"
              onChange={inputEvent}
              value={emailData?.emergency_contact_number}
            />
          </div>

          <button className={classes.btn} type="submit" onClick={SendMail}>
            <p>SUBMIT</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContentSection;
