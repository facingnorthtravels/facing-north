
import Head from "next/head";
import classes from "./community-trips.module.css";
import HeroSection from "../../components/cohosted/HeroSection";
import AboutSection from "../../components/cohosted/AboutSection";
import FeaturedToursSection from "../../components/cohosted/FeaturedToursSection";
import WhyJoinSection from "../../components/cohosted/WhyJoinSection";
import HowItWorksSection from "../../components/cohosted/HowItWorksSection";
import BookingSection from "../../components/cohosted/BookingSection";
import TravelerInfoSection from "../../components/cohosted/TravelerInfoSection";
import GallerySection from "../../components/cohosted/GallerySection";
import NewsletterSection from "../../components/cohosted/NewsletterSection";
import PartnerSection from "../../components/cohosted/PartnerSection";

export default function CohostedTrips() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Community Trips - Explore Pakistan with Your Favorite Creators | Facing North</title>
        <meta
          name="description"
          content="Join exclusive, small-group adventures community by world-renowned content creators and influencers. Explore Pakistan with expert planning and local experience."
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <FeaturedToursSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <BookingSection />
      <TravelerInfoSection />
      <GallerySection />
      <NewsletterSection />
      <PartnerSection />
    </div>
  );
}