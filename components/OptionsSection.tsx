"use client"

import type React from "react"
import PTOption from "@/components/PTOption"
import DuoTraining from "@/components/DuoTraining"
import PilatesOption from "@/components/PilatesOption"
import type { HomePageTranslations } from "@/types"
import styles from "@/styles/OptionsSection.module.css"

interface OptionsSectionProps {
  translations?: HomePageTranslations["options"]
}

const OptionsSection: React.FC<OptionsSectionProps> = ({ translations }) => {
  return (
    <div className={styles.optionsSection}>
      <PTOption translations={translations?.personalTraining} />
      <DuoTraining translations={translations?.duoTraining} />
      <PilatesOption translations={translations?.pilates} />
    </div>
  )
}

export default OptionsSection
