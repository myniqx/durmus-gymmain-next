"use client"
import React, { useContext } from "react";
import {  useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/languageContext";
import "../styles/Navbar.css";
import Link from "next/link";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useContext(LanguageContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="/">
          <img src="/logo.png" alt="DurmusGym Logo" className="navbar-logo" />
        </Link>
        <Link href="/" className="brand-name">DurmusGym</Link>
      </div>

      <ul className="navbar-links">
        <li className={isActive("/personal-training")}>
          <Link href="/personal-training">{t("navbar.personalTraining")}</Link>
        </li>
        <li className={isActive("/pilates")}>
          <Link href="/pilates">{t("navbar.pilates")}</Link>
        </li>
        <li className={isActive("/diet")}>
          <Link href="/diet">{t("navbar.diet")}</Link>
        </li>
        <li className={isActive("/about")}>
          <Link href="/about">{t("navbar.about")}</Link>
        </li>
        <li className={isActive("/method")}>
          <Link href="/method">{t("navbar.method")}</Link>
        </li>
        <li className={isActive("/contact")}>
          <Link href="/contact">{t("navbar.contact")}</Link>
        </li>
        <li className={isActive("/yoga")}>
          <Link href="/yoga">{t("navbar.yoga")}</Link>
        </li>
        <li className={isActive("/free-trial") + " cta"}>
          <Link href="/free-trial-page">{t("navbar.freeTrial")}</Link>
        </li>
        <li className={isActive("/login")}>
          <Link href="/login">{t("navbar.login")}</Link>
        </li>

        {/* Language Switcher */}
        <li className="language-switcher">
          <button
            className={i18n.language === "en" ? "active" : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
          <button
            className={i18n.language === "nl" ? "active" : ""}
            onClick={() => changeLanguage("nl")}
          >
            NL
          </button>
          <button
            className={i18n.language === "tr" ? "active" : ""}
            onClick={() => changeLanguage("tr")}
          >
            TR
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
