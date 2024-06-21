"use client";
import { useEffect, useState } from "react";
import { Pages } from "./Navlinks";
import styles from "./navbar.module.css";
import React, { memo } from "react";

import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";

function NavBar() {
  const [width, setWidth] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Create resize listener
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={styles.container}>
      <Image
        src={"/auth/logo.svg"}
        width={180.76}
        height={40}
        alt="Logo"
        className={styles.logo}
      ></Image>
      {width > 750 ? (
        <Pages setMenuOpen={setMenuOpen} />
      ) : (
        <div className={styles.menu}>
          <div
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <IoCloseCircleOutline
                style={{ color: "#000", width: "24px", height: "24px" }}
              />
            ) : (
              <FaHamburger
                style={{ color: "#000", width: "24px", height: "24px" }}
              />
            )}
          </div>

          {menuOpen ? <Pages setMenuOpen={setMenuOpen} /> : null}
        </div>
      )}
      <Pages setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default memo(NavBar);
