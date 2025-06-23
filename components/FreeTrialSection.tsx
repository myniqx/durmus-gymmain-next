"use client"

import type React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/LanguageProvider"
import styles from "@/styles/FreeTrialPage.module.css"

type FreeTrialSectionProps = {}

const FreeTrialSection: React.FC<FreeTrialSectionProps> = () => {
  const { selectedLang } = useLanguage()

  const translations = {
    title:
      selectedLang === "en"
        ? "Start Your Free Trial Now"
        : selectedLang === "nl"
          ? "Begin nu je gratis proefperiode"
          : "Ücretsiz Deneme Döneminize Şimdi Başlayın",
    option12: selectedLang === "en" ? "12 Months" : selectedLang === "nl" ? "12 Maanden" : "12 Ay",
    optionMonthly: selectedLang === "en" ? "Monthly" : selectedLang === "nl" ? "Per Maand" : "Aylık",
    optionLifetime: selectedLang === "en" ? "Lifetime" : selectedLang === "nl" ? "Levenslang" : "Ömür Boyu",
    bestDeal: selectedLang === "en" ? "Best Deal" : selectedLang === "nl" ? "Beste deal" : "En İyi Fırsat",
    saveAmount: selectedLang === "en" ? "Save €180" : selectedLang === "nl" ? "Bespaar 180 euro" : "180 € Tasarruf",
    noDiscount: selectedLang === "en" ? "No Discount" : selectedLang === "nl" ? "Geen korting" : "İndirim Yok",
    lifetimeAccess:
      selectedLang === "en" ? "Lifetime Access" : selectedLang === "nl" ? "Toegang voor het leven" : "Ömür Boyu Erişim",
    oneTime: selectedLang === "en" ? "one-time" : selectedLang === "nl" ? "eenmalig" : "tek seferlik",
    annualNote:
      selectedLang === "en"
        ? "*You pay €179.88 one-time for the whole year."
        : selectedLang === "nl"
          ? "*Je betaalt €179,88 éénmalig voor het hele jaar."
          : "*Tüm yıl için 179,88 € tek seferlik ödeme yaparsınız.",
    monthlyNote:
      selectedLang === "en"
        ? "Pay monthly. Cancel anytime."
        : selectedLang === "nl"
          ? "Betaal per maand. Maandelijks opzegbaar."
          : "Aylık ödeme. İstediğiniz zaman iptal edebilirsiniz.",
    lifetimeNote:
      selectedLang === "en"
        ? "One-time payment, lifetime access."
        : selectedLang === "nl"
          ? "Eenmalig bedrag, levenslange toegang."
          : "Tek seferlik ödeme, ömür boyu erişim.",
    cta:
      selectedLang === "en"
        ? "Try it now free for 4 days 👉"
        : selectedLang === "nl"
          ? "Probeer het nu 4 dagen gratis 👉"
          : "Şimdi 4 gün ücretsiz deneyin 👉",
    features: {
      access12:
        selectedLang === "en" ? "12 months access" : selectedLang === "nl" ? "12 maanden toegang" : "12 ay erişim",
      accessMonthly:
        selectedLang === "en" ? "Monthly access" : selectedLang === "nl" ? "Maandelijkse toegang" : "Aylık erişim",
      accessLifetime:
        selectedLang === "en" ? "Lifetime access" : selectedLang === "nl" ? "Levenslange toegang" : "Ömür boyu erişim",
      tv: "Durmus TV",
      courses: selectedLang === "en" ? "Courses" : selectedLang === "nl" ? "Cursussen" : "Kurslar",
      library:
        selectedLang === "en"
          ? "Practice Library"
          : selectedLang === "nl"
            ? "Oefenbibliotheek"
            : "Uygulama Kütüphanesi",
    },
  }

  return (
    <section className={styles.freeTrialContainer} id="free-trial">
      <h1 className={styles.title}>{translations.title}</h1>
      <div className={styles.plansGrid}>
        {/* 12 Months Plan */}
        <div className={`${styles.planCard} ${styles.bestDeal}`}>
          <div className={styles.planHeader}>
            <h2>{translations.option12}</h2>
            <span className={styles.badge}>{translations.bestDeal}</span>
            <div className={styles.subBadge}>{translations.saveAmount}</div>
          </div>
          <div className={styles.price}>
            14.99<span>/month*</span>
          </div>
          <ul className={styles.features}>
            <li>✔ {translations.features.access12}</li>
            <li>✔ {translations.features.tv}</li>
            <li>✔ {translations.features.courses}</li>
            <li>✔ {translations.features.library}</li>
          </ul>
          <p className={styles.note}>{translations.annualNote}</p>
          <Link href="/purchase/12months" className={styles.btnTrial}>
            {translations.cta}
          </Link>
        </div>

        {/* Monthly Plan */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h2>{translations.optionMonthly}</h2>
            <span className={`${styles.badge} ${styles.gray}`}>{translations.noDiscount}</span>
          </div>
          <div className={styles.price}>
            29.99<span>/month</span>
          </div>
          <ul className={styles.features}>
            <li>✔ {translations.features.accessMonthly}</li>
            <li>✔ {translations.features.tv}</li>
            <li>✔ {translations.features.courses}</li>
            <li>✔ {translations.features.library}</li>
          </ul>
          <p className={styles.note}>{translations.monthlyNote}</p>
          <Link href="/purchase/monthly" className={styles.btnTrial}>
            {translations.cta}
          </Link>
        </div>

        {/* Lifetime Plan */}
        <div className={styles.planCard}>
          <div className={styles.planHeader}>
            <h2>{translations.optionLifetime}</h2>
            <span className={`${styles.badge} ${styles.gray}`}>{translations.lifetimeAccess}</span>
          </div>
          <div className={styles.price}>
            599<span> {translations.oneTime}</span>
          </div>
          <ul className={styles.features}>
            <li>✔ {translations.features.accessLifetime}</li>
            <li>✔ {translations.features.tv}</li>
            <li>✔ {translations.features.courses}</li>
            <li>✔ {translations.features.library}</li>
          </ul>
          <p className={styles.note}>{translations.lifetimeNote}</p>
          <Link href="/purchase/lifetime" className={styles.btnTrial}>
            {translations.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FreeTrialSection
