"use client"

import type React from "react"
import Link from "next/link"
import type { PersonalTrainingTranslations } from "@/types"
import styles from "@/styles/PTOption.module.css"

interface PTOptionProps {
  translations?: PersonalTrainingTranslations
}

const PTOption: React.FC<PTOptionProps> = ({ translations }) => {
  const title = translations?.title?.trim() || "Personal Training"

  return (
    <div className={styles.optionCard}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <ul>
          <li>✓ {translations?.privateGym?.trim() || "Private gym training"}</li>
          <li>✓ {translations?.customSchedules?.trim() || "Custom training programs"}</li>
          <li>✓ {translations?.personalCoach?.trim() || "Personal coach guidance"}</li>
          <li>✓ {translations?.nutritionalGuidance?.trim() || "Personalized nutritional guidance"}</li>
          <li>✓ {translations?.tailoredSessions?.trim() || "Sessions tailored to your needs"}</li>
        </ul>
        <Link href="/personal-training" className={styles.btnMoreInfo}>
          {translations?.moreInfo?.trim() || "More Information"}
        </Link>
      </div>
    </div>
  )
}

export default PTOption
