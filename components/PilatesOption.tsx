"use client"

import type React from "react"
import Link from "next/link"
import type { PilatesTranslations } from "@/types"
import styles from "@/styles/PilatesOption.module.css"

interface PilatesOptionProps {
  translations?: PilatesTranslations
}

const PilatesOption: React.FC<PilatesOptionProps> = ({ translations }) => {
  return (
    <div className={styles.optionCard}>
      <h3>{translations?.title || "Pilates"}</h3>
      <div className={styles.description}>
        <ul>
          <li>✓ {translations?.studioLocation || "Pilates in our studio in Bergen op Zoom"}</li>
          <li>✓ {translations?.flexibilityBalancePosture || "Train your flexibility, balance, and correct posture"}</li>
          <li>✓ {translations?.certifiedCoach || "Your personal Pilates certified coach"}</li>
          <li>
            ✓{" "}
            {translations?.privateOrGroupOptions ||
              "Choose private lessons or a small, personal group of up to 4 people, which you can put together yourself"}
          </li>
        </ul>
        <Link href="/pilates" className={styles.btnMoreInfo}>
          {translations?.moreInfo || "More Information"}
        </Link>
      </div>
    </div>
  )
}

export default PilatesOption
