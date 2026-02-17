import React, { useState } from "react";
import classes from "../../pages/community-trips/community-trips.module.css";
import * as emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const TravelerInfoSection = () => {
  const router = useRouter();
  const initialFormData = {
    numberOfTravelers: "",
    fullName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    address: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.numberOfTravelers) {
      newErrors.numberOfTravelers = "Number of travelers is required";
    } else if (formData.numberOfTravelers < 1) {
      newErrors.numberOfTravelers = "Must be at least 1 traveler";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMail = async () => {
    const Data = {
      name: formData.fullName,
      email_address: formData.email,
      ph_num: formData.phone,
      number_people: formData.numberOfTravelers,
      gender: formData.gender,
      birth: formData.dateOfBirth,
      city: formData.city,
      country: formData.country,
      address: formData.address,
    };

    const Template_id = "template_0xlwhho";
    const Service_id = "service_7zg1ogr";
    const user_id = "l4IWOqZtHsrX8RILR";
    try {
      await emailjs.send(Service_id, Template_id, Data, user_id).then(
        function (response) {
          setFormData(initialFormData);
          toast.success("Submitted successfully!");
        },
        function (error) {
          toast.error("Booking couldn't be sent");
        }
      );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully with data:", formData);
      sendMail();
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <section id="traveler-info" className={classes.travelerInfoSection}>
      <div className={classes.sectionContent}>
        <div className={classes.sectionHeader}>
          <h2>Traveler Information</h2>
          <div className={classes.sectionDescription}>
            <p>
              Please provide your information to help us plan your perfect
              adventure. All fields are required to ensure we can contact you
              and prepare for your journey.
            </p>
          </div>
        </div>

        <form className={classes.travelerForm} onSubmit={handleSubmit}>
          <div className={classes.formGrid}>
            {/* Number of Travelers */}
            <div className={classes.formGroup}>
              <label htmlFor="numberOfTravelers">
                Number of Travelers <span className={classes.required}>*</span>
              </label>
              <input
                type="number"
                id="numberOfTravelers"
                min="1"
                value={formData.numberOfTravelers}
                onChange={(e) =>
                  handleChange("numberOfTravelers", e.target.value)
                }
                className={errors.numberOfTravelers ? classes.inputError : ""}
                placeholder="e.g., 2"
              />
              {errors.numberOfTravelers && (
                <span className={classes.errorMessage}>
                  {errors.numberOfTravelers}
                </span>
              )}
            </div>

            {/* Full Name */}
            <div className={classes.formGroup}>
              <label htmlFor="fullName">
                Full Name <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={errors.fullName ? classes.inputError : ""}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <span className={classes.errorMessage}>{errors.fullName}</span>
              )}
            </div>

            {/* Gender */}
            <div className={classes.formGroup}>
              <label htmlFor="gender">
                Gender <span className={classes.required}>*</span>
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className={errors.gender ? classes.inputError : ""}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.gender && (
                <span className={classes.errorMessage}>{errors.gender}</span>
              )}
            </div>

            {/* Date of Birth */}
            <div className={classes.formGroup}>
              <label htmlFor="dateOfBirth">
                Date of Birth <span className={classes.required}>*</span>
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? classes.inputError : ""}
                max={new Date().toISOString().split("T")[0]}
              />
              {errors.dateOfBirth && (
                <span className={classes.errorMessage}>
                  {errors.dateOfBirth}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className={classes.formGroup}>
              <label htmlFor="phone">
                Phone <span className={classes.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={errors.phone ? classes.inputError : ""}
                placeholder="+92 300 1234567"
              />
              {errors.phone && (
                <span className={classes.errorMessage}>{errors.phone}</span>
              )}
            </div>

            {/* Email */}
            <div className={classes.formGroup}>
              <label htmlFor="email">
                Email <span className={classes.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? classes.inputError : ""}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <span className={classes.errorMessage}>{errors.email}</span>
              )}
            </div>

            {/* Country */}
            <div className={classes.formGroup}>
              <label htmlFor="country">
                Country <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className={errors.country ? classes.inputError : ""}
                placeholder="Pakistan"
              />
              {errors.country && (
                <span className={classes.errorMessage}>{errors.country}</span>
              )}
            </div>

            {/* City */}
            <div className={classes.formGroup}>
              <label htmlFor="city">
                City <span className={classes.required}>*</span>
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className={errors.city ? classes.inputError : ""}
                placeholder="Islamabad"
              />
              {errors.city && (
                <span className={classes.errorMessage}>{errors.city}</span>
              )}
            </div>
          </div>

          {/* Address - Full Width */}
          <div className={classes.formGroupFull}>
            <label htmlFor="address">
              Address <span className={classes.required}>*</span>
            </label>
            <textarea
              id="address"
              rows="3"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={errors.address ? classes.inputError : ""}
              placeholder="Enter your complete address"
            />
            {errors.address && (
              <span className={classes.errorMessage}>{errors.address}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className={classes.formActions}>
            <button type="submit" className={classes.primaryButton}>
              Submit Information
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TravelerInfoSection;
