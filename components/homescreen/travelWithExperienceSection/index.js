import { useState } from "react";
import classes from "./travelWithExperienceSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllCohostedProfiles } from "../../../data/cohosted-profiles";
import { getSpecialistProfileBySlug } from "../../../data/specialist-profiles";

// Najma is a Travel Specialist (not a cohost) — build a card entry for her
// that matches the carousel's shape and links to her specialist profile.
function buildNajmaCard() {
  const najma = getSpecialistProfileBySlug("najma-mehmood-pakistan");
  if (!najma) return null;
  return {
    id: najma.specialist_slug,
    name: najma.specialist_name,
    title: najma.specialisation_type
      ? `${najma.specialisation_type} Specialist`
      : "Travel Specialist",
    profileImage: najma.specialist_photo,
    href: `/specialist-profile/${najma.specialist_slug}`,
    category: "Women-Led",
    upcomingCount: (najma.itineraries || []).length,
  };
}

function deriveCategory(profile) {
  const t = (profile?.title || "").toLowerCase();
  if (t.includes("wellness")) return "Wellness";
  if (t.includes("food")) return "Food";
  if (t.includes("fashion")) return "Fashion";
  if (t.includes("photograph")) return "Travel";
  if (t.includes("outdoor")) return "Travel";
  return "Travel";
}

function countUpcomingTrips(profile) {
  if (!profile?.upcomingItineraries) return 0;
  return profile.upcomingItineraries.reduce(
    (sum, s) => sum + (s.itineraries?.length || 0),
    0
  );
}

function TravelWithExperienceSection() {
  const cohosts = getAllCohostedProfiles();
  const najmaCard = buildNajmaCard();
  // Najma first, then the existing cohosts
  const profiles = najmaCard ? [najmaCard, ...cohosts] : cohosts;
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const current = profiles[index];

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + profiles.length) % profiles.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % profiles.length);
  };

  // Najma's card carries its own category/count/href; cohosts derive theirs
  const category = current?.category || deriveCategory(current);
  const upcomingCount =
    current?.upcomingCount != null
      ? current.upcomingCount
      : countUpcomingTrips(current);
  const cardHref = current?.href || `/cohosted-profile/${current.id}`;

  return (
    <div className={classes.container}>
      <div className={classes.content_wrapper}>
        <div className={classes.left_column}>
          <div className={classes.content_section}>
            <div>
              <h2 className={classes.main_heading}>Travel with experience</h2>
              <p className={classes.intro_paragraph}>
                Our community trips connect you with locals who know their destination best. From hidden gems to cultural tips.
              </p>
            </div>
            <div className={classes.features_list}>
              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>
                  <Image
                    src="/assets/travel_with_experience/hostedBySvg.png"
                    alt="Hosted by trusted locals"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={classes.feature_content}>
                  <h3 className={classes.feature_title}>Hosted by trusted locals</h3>
                  <p className={classes.feature_description}>
                    Stays carefully managed by trusted local hosts.
                  </p>
                </div>
              </div>

              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>
                  <Image
                    src="/assets/travel_with_experience/recommendationSvg.png"
                    alt="Insider recommendations"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={classes.feature_content}>
                  <h3 className={classes.feature_title}>Insider recommendations</h3>
                  <p className={classes.feature_description}>
                    Exclusive tips and guides from locals just for you.
                  </p>
                </div>
              </div>

              <div className={classes.feature_item}>
                <div className={classes.feature_icon}>
                  <Image
                    src="/assets/travel_with_experience/comunitysvg.png"
                    alt="Community-focused experiences"
                    width={24}
                    height={24}
                  />
                </div>
                <div className={classes.feature_content}>
                  <h3 className={classes.feature_title}>Community-focused experiences</h3>
                  <p className={classes.feature_description}>
                    Connecting you to authentic, community-driven stays.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.buttons_container}>
              <Link href="/community-trips" className={classes.primary_button}>
                Book A Community Trip
              </Link>
              <Link href="/faq" className={classes.secondary_button}>
                View FAQs
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.right_column}>
          <div
            className={classes.creator_card}
            onClick={() => router.push(cardHref)}
          >
            <img
              src={current.profileImage}
              alt={current.name}
              className={classes.creator_image}
            />
            <div className={classes.overlay} />
            <span className={classes.category_badge}>{category}</span>

            <div className={classes.info_container}>
              <h3 className={classes.creator_name}>{current.name}</h3>
              <p className={classes.creator_title}>{current.title}</p>
              <div className={classes.indicators}>
                <div className={classes.single_indicator}>
                  <span className={classes.indicator_label}>Upcoming trips</span>
                  <span className={classes.indicator_value}>{upcomingCount}</span>
                </div>
                <div className={classes.single_indicator}>
                  <span className={classes.indicator_label}>Category</span>
                  <span className={classes.indicator_value}>{category}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Previous creator"
              className={`${classes.nav_btn} ${classes.nav_prev}`}
              onClick={prev}
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next creator"
              className={`${classes.nav_btn} ${classes.nav_next}`}
              onClick={next}
            >
              &#8250;
            </button>

            <div className={classes.dots}>
              {profiles.map((_, i) => (
                <span
                  key={i}
                  className={`${classes.dot} ${i === index ? classes.dot_active : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIndex(i);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelWithExperienceSection;
