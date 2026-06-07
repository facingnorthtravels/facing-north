import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
import logo from "../../public/assets/navbar-assets/logo-white.png";
import logo_green from "../../public/assets/navbar-assets/logo-green.png";
import Link from "next/link";
import SlidingPanel, { PanelType } from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import menu from "../../public/assets/navbar-assets/menu.svg";
import menu_green from "../../public/assets/navbar-assets/menu_green.svg";

const DESTINATIONS_MENU = [
  {
    name: "Pakistan",
    tagline: "Karakoram peaks · Silk routes · Sufi heartland",
    image: "/assets/IMAGES/Home/find-true-north/hunza-1.jpg",
    options: [
      { label: "Journey Around Karakoram", meta: "11 days · May → Oct", href: "/package-tour/journey-around-karakoram-paki-10" },
      { label: "Exploring Swat Valley, Kalam & Islamabad", meta: "8 days · All year", href: "/package-tour/swat-valley-pk-09" },
      { label: "Traversing the Wonders of the Hindukush", meta: "10 days · Apr → Oct", href: "/package-tour/wonders-of-hindukush" },
      { label: "An Escape to Hunza", meta: "9 days · May → Oct", href: "/package-tour/journey-to-silk-route-pk23-01" },
    ],
  },
  {
    name: "Kazakhstan",
    tagline: "Endless steppes · Alpine lakes · Nomad culture",
    image: "/assets/IMAGES/Home/find-true-north/sk-1.jpg",
    comingSoon: true,
  },
  {
    name: "Kyrgyzstan",
    tagline: "Pamir valleys · Yurt camps · Horseback journeys",
    image: "/assets/IMAGES/Home/find-true-north/hunza-3.jpg",
    comingSoon: true,
  },
  {
    name: "Uzbekistan",
    tagline: "Silk Route · Samarkand domes · Walled cities",
    image: "/assets/IMAGES/Home/find-true-north/lah-1.jpg",
    comingSoon: true,
  },
];

function Navbar() {
  const router = useRouter();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);
  const [panelSize, setPanelSize] = useState(60);
  const [panelType, setPanelType] = useState("left");
  const [destOpen, setDestOpen] = useState(false);
  const [activeDestCountry, setActiveDestCountry] = useState(DESTINATIONS_MENU[0]);

  let listener = null;

  const [currentPage, setCurrentPage] = useState([]);

  const whiteBgLinks = ["/payment/checkout", "/payment/success", "/payment/failure", "/blogs/[id]"];

  useEffect(() => {
    if (router.pathname) {
      const page = router.pathname.split("/");
      setCurrentPage(page);
    }
  }, [router.pathname]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document !== null) {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 10) {
          if (backgroundColor !== "opaque") {
            setBackgroundColor("opaque");
          }
        } else {
          if (backgroundColor !== "transparent") {
            setBackgroundColor("transparent");
          }
        }
      }
    });
    if (whiteBgLinks.includes(router.pathname)) {
      setBackgroundColor("opaque");
    }
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [backgroundColor]);

  // console.log("backgroundColor: ", backgroundColor);
  return (
    <>
      <SlidingPanel
        type={"left"}
        isOpen={openPanel}
        backdropClicked={() => setOpenPanel(false)}
        size={panelSize}
        panelClassName="additional-class"
        panelContainerClassName=""
        noBackdrop={noBackdrop}
      >
        <div className={classes.panel_container}>
          <h1
            onClick={() => setOpenPanel(false)}
            // src={backgroundColor === "opaque" ? menu_green.src : menu.src}
            style={{
              position: "absolute",
              left: "4.6%",
              top: "15px",
              color: "white",
            }}
            className={classes.menu_icon}
          >
            ×
          </h1>
          <img
            src={logo.src}
            style={{ width: "100px", marginTop: "30px", marginBottom: "10px" }}
          />
          <p
            onClick={() => {
              router.push("/");
              setOpenPanel(false);
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/about");
              setOpenPanel(false);
            }}
          >
            About
          </p>
          {/* <p
            onClick={() => {
              router.push("/faq");
              setOpenPanel(false);
            }}
          >
            Faq
          </p> */}
          <p
            onClick={() => {
              router.push("/services");
              setOpenPanel(false);
            }}
          >
            Curated Adventures
          </p>
          <p
            onClick={() => {
              router.push("/package-tour");
              setOpenPanel(false);
            }}
          >
            {/* Bespoke Adventures */}
            Plan My Trip
          </p>
          <p
            onClick={() => {
              router.push("/destinations");
              setOpenPanel(false);
            }}
          >
            Destinations
          </p>
           <p
            onClick={() => {
              router.push("/community-trips");
              setOpenPanel(false);
            }}
          >
            Community Trips
          </p>
          {/* <p
            onClick={() => {
              router.push("/blogs");
              setOpenPanel(false);
            }}
          >
            Blog
          </p>
          <p
            onClick={() => {
              router.push("/contact-form");
              setOpenPanel(false);
            }}
          >
            Contact
          </p> */}
        </div>
      </SlidingPanel>
      <div
        className={
          isNavbarVisisbleFromTop
            ? classes.navbar_body_opaque
            : backgroundColor === "opaque"
            ? classes.navbar_body_opaque
            : classes.navbar_body
        }
      >
        <div className={classes.nav_content}>
          <img
            onClick={() => setOpenPanel(true)}
            src={backgroundColor === "opaque" ? menu_green.src : menu.src}
            className={classes.menu_icon}
          />
          <div className={classes.left_panel}>
            <Link href={"/"}>
              <img
                className={classes.logo}
                src={backgroundColor === "opaque" ? logo_green.src : logo.src}
              />
            </Link>
          </div>
          <div className={classes.center_panel}>
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Curated Adventures" },
              { href: "/destinations", label: "Destinations", hasDropdown: true },
              { href: "/community-trips", label: "Community Trips" },
            ].map((item) => {
              const isActive = router.pathname === item.href ||
                (item.href !== "/" && router.pathname.startsWith(item.href));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className={classes.dest_wrap}
                    onMouseEnter={() => setDestOpen(true)}
                    onMouseLeave={() => setDestOpen(false)}
                  >
                    <Link href={item.href}>
                      <p className={`${isActive ? classes.nav_link_active : ""} ${classes.dest_trigger}`}>
                        {item.label}
                        <span className={`${classes.dest_caret} ${destOpen ? classes.dest_caret_open : ""}`}>
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </p>
                    </Link>
                    {destOpen && (
                      <div className={classes.dest_dropdown}>
                        <div className={classes.dest_dropdown_inner}>
                          <div className={classes.dest_countries}>
                            <p className={classes.dest_eyebrow}>
                              <span className={classes.dest_eyebrow_line} />
                              Countries
                            </p>
                            <div className={classes.dest_country_list}>
                              {DESTINATIONS_MENU.map((c, idx) => (
                                <button
                                  type="button"
                                  key={c.name}
                                  onMouseEnter={() => setActiveDestCountry(c)}
                                  className={`${classes.dest_country_item} ${activeDestCountry.name === c.name ? classes.dest_country_active : ""}`}
                                >
                                  <span className={classes.dest_country_num}>
                                    {String(idx + 1).padStart(2, "0")}
                                  </span>
                                  <span className={classes.dest_country_name}>{c.name}</span>
                                </button>
                              ))}
                            </div>
                            <Link
                              href="/destinations"
                              className={classes.dest_view_all}
                              onClick={() => setDestOpen(false)}
                            >
                              View all destinations
                              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </div>

                          <div
                            className={classes.dest_feature}
                            style={{ backgroundImage: `url(${activeDestCountry.image})` }}
                          >
                            <div className={classes.dest_feature_overlay} />
                            <div className={classes.dest_feature_content}>
                              <p className={classes.dest_feature_eyebrow}>
                                {activeDestCountry.comingSoon ? "Launching Soon" : "Featured Itineraries"}
                              </p>
                              <h3 className={classes.dest_feature_title}>{activeDestCountry.name}</h3>
                              <p className={classes.dest_feature_tagline}>{activeDestCountry.tagline}</p>

                              {activeDestCountry.comingSoon ? (
                                <p className={classes.dest_feature_coming}>
                                  Curated itineraries for {activeDestCountry.name} are on their way.
                                </p>
                              ) : (
                                <ul className={classes.dest_feature_list}>
                                  {activeDestCountry.options?.map((opt) => (
                                    <li key={opt.href} className={classes.dest_feature_item}>
                                      <Link
                                        href={opt.href}
                                        onClick={() => setDestOpen(false)}
                                        className={classes.dest_feature_link}
                                      >
                                        <span className={classes.dest_feature_dash} />
                                        <span className={classes.dest_feature_text}>
                                          <span className={classes.dest_feature_label}>{opt.label}</span>
                                          <span className={classes.dest_feature_meta}>{opt.meta}</span>
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link href={item.href} key={item.href}>
                  <p className={isActive ? classes.nav_link_active : ""}>
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className={classes.right_panel}>
            <Link href={"/package-tour"} className={classes.cta_pill}>
              Plan My Trip
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
