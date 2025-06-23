"use client"

import type React from "react"
import Link from "next/link"
import type { PersonalTrainingTranslations } from "@/types"
import styles from "@/styles/DuoTraining.module.css"

interface DuoTrainingProps {
  translations?: PersonalTrainingTranslations
}

const DuoTraining: React.FC<DuoTrainingProps> = ({ translations }) => {
  const title = translations?.title?.trim() || "Duo Training"

  return (
    <div className={styles.optionCard}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <ul>
          <li>✓ {translations?.privateGym?.trim() || "Duo training in the private gym in Bergen op Zoom"}</li>
          <li>✓ {translations?.customSchedules?.trim() || "Custom made schedules"}</li>
          <li>✓ {translations?.personalCoach?.trim() || "Your personal coach"}</li>
          <li>✓ {translations?.nutritionalGuidance?.trim() || "Personalized Nutritional Guidance"}</li>
          <li>✓ {translations?.tailoredSessions?.trim() || "Number of sessions tailored to you and for you"}</li>
        </ul>
        <Link href="/free-trial" className={styles.btnMoreInfo}>
          {translations?.moreInfo?.trim() || "More Information"}
        </Link>
      </div>
    </div>
  )
}

export default DuoTraining
