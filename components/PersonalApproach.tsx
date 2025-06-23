"use client"

import type React from "react"
import Link from "next/link"
import type { BaseTranslations } from "@/types"
import styles from "@/styles/PersonalApproach.module.css"

interface PersonalApproachProps {
  image: string
  translations?: BaseTranslations
}

const PersonalApproach: React.FC<PersonalApproachProps> = ({ image, translations }) => {
  return (
    <div className={styles.personalApproach}>
      <div className={styles.textSection}>
        <h2>{translations?.title || "Train at your level."}</h2>
        <p>{translations?.description || "At DurmusGym we believe in a personal approach..."}</p>
        <Link href="/method" className={styles.btn}>
          {translations?.button || "Discover Working Method"}
        </Link>
      </div>
      <div
        className={styles.imageSection}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  )
}

export default PersonalApproach
