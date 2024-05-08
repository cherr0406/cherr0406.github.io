"use client";
import Link from "next/link";
import styles from "./components.module.css";
import { SITE_MAP } from "../data/const";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const [sectionPositions, setSectionPositions] = useState([{}]);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const sectionPositions = Array.from(sections).map((section) => section.offsetTop);
    if (sectionPositions.length === 0) return;
    sectionPositions[0] = 0;
    setSectionPositions(sectionPositions);

    const handleScroll = () => {
      let currentIndex = undefined;
      for (let i = 0; i < sectionPositions.length - 1; i++) {
        if (window.scrollY >= sectionPositions[i] && window.scrollY < sectionPositions[i + 1]) {
          currentIndex = i;
          break;
        }
      }
      setCurrentSection(currentIndex === undefined ? sectionPositions.length - 1 : currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={styles.openBtn + (isNavOpen ? ` ${styles.open}` : "")} onClick={toggleNav}>
        MENU
      </div>
      <nav id="nav" className={styles.nav + (isNavOpen ? ` ${styles.open}` : "")}>
        <div className={styles.hangingLine}></div>
        {Object.values(SITE_MAP).map((site, index) => (
          <>
            <Link href={site.path} key={index}>
              <div
                className={styles.navLink + (currentSection === index ? ` ${styles.active}` : "")}
              >
                {site.name}
              </div>
            </Link>
            <div
              className={
                styles.navLine +
                (index == Object.values(SITE_MAP).length - 1 ? ` ${styles.last}` : "")
              }
              key={index}
            ></div>
          </>
        ))}
        <div className={`${styles.navLink} ${styles.closeBtn}`} onClick={closeNav}>
          CLOSE
        </div>
      </nav>
    </>
  );
}
