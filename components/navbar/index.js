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

function Navbar() {
  const router = useRouter();
  const [openPanel, setOpenPanel] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [isNavbarVisisbleFromTop, setIsNavbarVisibleFromTop] = useState(false);
  const [noBackdrop, setNoBackdrop] = useState(false);
  const [panelSize, setPanelSize] = useState(60);
  const [panelType, setPanelType] = useState("left");

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
        {/* <img
            onClick={() => setOpenPanel(true)}
            src={backgroundColor === "opaque" ? menu_green.src : menu.src}
            className={classes.menu_icon}
          /> */}
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
          <div className={classes.right_panel}>
            <Link href={"/about"}>
              <p>About</p>
            </Link>
            {/* <Link href={"/faq"}>
              <p>Faq</p>
            </Link> */}

            {/* <p>ABOUT</p> */}
            <Link href={"/services"}>
              <p>Curated Adventures</p>
            </Link>

            <Link href={"/package-tour"}>
              {/* <p>Bespoke Adventures</p> */}
              <p>Plan My Trip</p>
            </Link>

            <Link href={"/destinations"}>
              <p>Destinations</p>
            </Link>

            <Link href={"/community-trips"}>
              <p>Community Trips</p>
            </Link>
            {/* <Link href={"/blogs"}>
              <p>Blog</p>
            </Link>
            <Link href={"/contact-form"}>
              <p>Contact</p>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
