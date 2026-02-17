import React, { useState } from "react";
import classes from "./contact.module.css";
import email from "../../public/assets/contact_us_assets/email.svg";
import phone from "../../public/assets/contact_us_assets/phone.svg";
import whatsapp from "../../public/assets/contact_us_assets/whatsapp.svg";
// import location from "../../public/assets/contact_us_assets/location-pin.png";
import Image from "next/image";
import * as emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Head from "next/head";
function Contact() {
  const [emailData, setEmailData] = useState({
    name: "",
    email_address: "",
    ph_num: "",
    city: "",
    number_people: "",
    number_days: "",
    pre_travel: "",
    message: "",
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
    const Data = {
      name: emailData.name || "None",
      email_address: emailData.email_address,
      ph_num: emailData.ph_num,
      city: emailData.city,
      number_people: emailData.number_people,
      number_days: emailData.number_days,
      pre_travel: emailData.pre_travel,
      message: emailData.message,
      ///////////////Terms & Condition/////////////
      gender: "None",
      passport_or_id_card: "None",

      nationality: "None",
      birth: "None",

      address: "None",
      blood: "None",
      emergency_contact_name: "None",
      emergency_contact_number: "None",

      signature: "None",

      date: "None",

      desc: "None",
    };

    const requiredFields = Object.values(Data);
    const isAnyFieldEmpty = requiredFields.some((field) => !field.trim());

    if (isAnyFieldEmpty) {
      return; // Prevent form submission
    } else {
      const Service_id = "template_0xlwhho";
      const Template_id = "template_0xlwhho";
      const user_id = "l4IWOqZtHsrX8RILR";
      emailjs.send(Service_id, Template_id, Data, user_id).then(
        function (response) {
          // setSendValue(true);
          toast.success("Message Sent Successfully!");
          setEmailData({
            name: "",
            email_address: "",
            ph_num: "",
            city: "",
            number_people: "",
            number_days: "",
            pre_travel: "",
            message: "",
          });
        },

        function (error) {
          toast.error("Message couldn't be sent");
        }
      );
    }
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>Contact Us | Facing North</title>
        <meta
          name="description"
          content="Have questions or need trip advice? Contact our team and start planning your unforgettable Northern Pakistan adventure today."
        />
      </Head>
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
      <div className={classes.hero_banner_container}>
        <div className={classes.overlay} />
        <h2>Find an unforgettable experience in Pakistan</h2>
        <p>
          Looking for a memorable travel experience? Let us help you plan your
          next adventure in Pakistan. Contact us for personalized travel
          recommendations and itinerary planning.
        </p>
      </div>
      <div className={classes.second_section}>
        <h3>
          Don't miss out on your dream trip to Pakistan! Provide us with your
          information today, and one of our representatives will be in touch
          with personalized travel recommendations and itinerary planning to
          make your dream a reality.
        </h3>
      </div>

      <div className={classes.third_section}>
        <div
          style={{ backgroundColor: "transparent" }}
          className={classes.overlay}
        />
        <div className={classes.form_container}>
          <div className={classes.form_content}>
            <div className={classes.left_panel}>
              {/* <h2 className={classes.heading}>Hunza</h2> */}
              {/* <p style={{ marginTop: "60px" }}>
                Looking for a memorable travel experience? Let us help you plan
                your next adventure in Pakistan. Contact us for personalized
                travel recommendations and itinerary planning.
              </p>
              <p style={{ marginBottom: "20px" }}>
                Don't miss out on your dream trip to Pakistan! Provide us with
                your information today, and one of our representatives will be
                in touch with personalized travel recommendations and itinerary
                planning to make your dream a reality.
              </p> */}
              {/* <div className={classes.info_content}>
                <Image src={location} width={17} height={22} />
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et finibus urna.{" "}
                </div>
              </div> */}
              <a href="mailto: info@facingnorthtravels.com" className={classes.info_content}>
                {" "}
                <Image src={email.src} width={17} height={22} alt="Email" />
                <div>info@facingnorthtravels.com</div>
              </a>
              <a href="tel: +447435782146" className={classes.info_content}>
                <Image src={phone.src} width={17} height={22} alt="Phone" />
                <div>+44 7435 782146</div>
              </a>
              <a href="tel: +923367772152" className={classes.info_content}>
                <Image src={whatsapp.src} width={17} height={22} alt="WhatsApp" />
                +92 3367772152
              </a>
            </div>
            <form className={classes.right_panel} onSubmit={onSubmit}>
              <h2 className={classes.heading}>Inquiry Form</h2>
              <div className={`${classes.info_input_row}  input_row_single`}>
                <input
                  required
                  placeholder="Your name"
                  className="input_field"
                  name="name"
                  onChange={inputEvent}
                  value={emailData?.name}
                />
                <input
                  required
                  placeholder="Your email"
                  className="input_field"
                  name="email_address"
                  onChange={inputEvent}
                  value={emailData?.email_address}
                />
              </div>

              <div className={`${classes.info_input_row}  input_row_single`}>
                <input
                  required
                  placeholder="Enter phone"
                  className="input_field"
                  name="ph_num"
                  onChange={inputEvent}
                  value={emailData?.ph_num}
                />
                <input
                  required
                  placeholder="Enter Your City"
                  className="input_field"
                  name="city"
                  onChange={inputEvent}
                  value={emailData?.city}
                />
              </div>

              <div className={`${classes.info_input_row}  input_row_single`}>
                <input
                  required
                  placeholder="Number of People"
                  className="input_field"
                  name="number_people"
                  onChange={inputEvent}
                  value={emailData?.number_people}
                />
                <input
                  required
                  placeholder="Number of Days"
                  className="input_field"
                  name="number_days"
                  onChange={inputEvent}
                  value={emailData?.number_days}
                />
              </div>

              <div className={`${classes.info_input_row}  input_row_single`}>
                <input
                  required
                  placeholder="Preference of Travel"
                  className="input_field"
                  name="pre_travel"
                  onChange={inputEvent}
                  value={emailData?.pre_travel}
                />
              </div>

              <div className={`${classes.info_input_row}  input_row_single`}>
                <textarea
                  placeholder="Type your message"
                  className="input_field"
                  required
                  name="message"
                  onChange={inputEvent}
                  value={emailData?.message}
                  style={{ resize: "none", height: "100px" }}
                />
              </div>

              <button className={classes.btn} type="submit" onClick={SendMail}>
                <p>SUBMIT</p>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <div className={classes.contact_info_section}>
        <h3>Discover our Homeland</h3>
        <div className={classes.contact_us_row}>
          <p className={classes.contact_us_text}>
            Ready to explore Pakistan? Let us help you plan the perfect trip.
            Contact us now for personalized travel recommendations and itinerary
            planning.
          </p>
          <div className={classes.btn}>
            <p>Contact Us</p>
          </div>
        </div>
        <div className={classes.contact_info_row}>
          <div className={classes.single_info_row}>
            <img src={phone.src} />
            <p className={classes.contact_text}>03115596785</p>
          </div>
          <div className={classes.single_info_row}>
            <img src={email.src} />
            <p className={classes.contact_text}>info@abcd.com</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
