import React, { useState } from "react";
import classes from "./visitorModal.module.css";
import * as emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VisitorModal = ({ isOpen, onClose, onPermanentDismiss }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    desiredJourney: "",
    budget: "",
    source: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow digits
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const Data = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        additionalInfo: `
          Desired Journey: ${formData.desiredJourney}
          Budget: ${formData.budget}
          Source: ${formData.source}
        `,
        confirmName: formData.fullName, 
        confirmEmail: formData.email,
        confirmPhone: formData.phone,
    };

    const Template_id = "template_ysgp6fi";
    const Service_id = "service_7zg1ogr";
    const user_id = "l4IWOqZtHsrX8RILR";

    try {
      await emailjs.send(Service_id, Template_id, Data, user_id);
      toast.success("Thank you! We'll be in touch soon.");
      onPermanentDismiss();
      
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        desiredJourney: "",
        budget: "",
        source: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose} aria-label="Close modal">
           <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={classes.header}>
          <h2 className={classes.title}>Plan Your Dream Trip</h2>
          <p className={classes.subtitle}>
            Tell us a bit about your travel plans and we'll help you curate the perfect experience.
          </p>
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          {/* Row 1: Full Name - Phone */}
          <div className={classes.row}>
            <div className={classes.inputGroup}>
              <label className={classes.label} htmlFor="fullName">Name *</label>
              <input
                className={classes.input}
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </div>
            <div className={classes.inputGroup}>
              <label className={classes.label} htmlFor="phone">Phone *</label>
              <input
                className={classes.input}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Row 2: Email - Budget */}
          <div className={classes.row}>
            <div className={classes.inputGroup}>
              <label className={classes.label} htmlFor="email">Email *</label>
              <input
                className={classes.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </div>
            <div className={classes.inputGroup}>
              <label className={classes.label} htmlFor="budget">Budget (Per Person) *</label>
              <input
                className={classes.input}
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                placeholder="e.g. $2000"
              />
            </div>
          </div>

          {/* Row 3: Desired Journey */}
          <div className={classes.inputGroup}>
            <label className={classes.label} htmlFor="desiredJourney">Desired Journey *</label>
            <input
              className={classes.input}
              type="text"
              id="desiredJourney"
              name="desiredJourney"
              value={formData.desiredJourney}
              onChange={handleChange}
              required
              placeholder="e.g. Northern Pakistan Adventure, Cultural Tour..."
            />
          </div>

          {/* Row 4: Where did you come from */}
          <div className={classes.inputGroup}>
            <label className={classes.label} htmlFor="source">Where did you come from? (Optional)</label>
            <input
              className={classes.input}
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="Facebook, Google, Instagram, etc."
            />
          </div>

          <div className={classes.buttonContainer}>
            <button 
                type="submit" 
                className={classes.submitButton}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Start My Journey"}
            </button>
            
            <button 
                type="button" 
                className={classes.neverShowButton}
                onClick={onPermanentDismiss}
            >
                Don't show this again
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitorModal;
