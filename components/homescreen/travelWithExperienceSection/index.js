import classes from "./travelWithExperienceSection.module.css";
import Image from "next/image";
import Link from "next/link";

function TravelWithExperienceSection() {
  return (
    <div className={classes.container}>
      <div className={classes.content_wrapper}>
        {/* Left Column - Content */}
        <div className={classes.left_column}>
          <div className={classes.content_section}>
            <div>
            <h2 className={classes.main_heading}>Travel with experience</h2>
            <p className={classes.intro_paragraph}>
              Our community trips connect you with locals who know their destination best. From hidden gems to cultural tips.
            </p>
            </div>
            {/* Features List */}
            <div className={classes.features_list}>
              {/* Feature 1 */}
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

              {/* Feature 2 */}
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

              {/* Feature 3 */}
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

            {/* Buttons */}
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

        {/* Right Column - Single Image */}
        <div className={classes.right_column}>
            <div className={classes.single_image_container}>
            <Image
              src="/assets/travel_with_experience/travels_imge.png"
              alt="Travel experience"
              fill
              className={classes.single_image}
            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TravelWithExperienceSection;
