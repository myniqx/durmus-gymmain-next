"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import useTranslation from "../hooks/useTranslation";
import { fetchImages } from "../services/mediaService";
import { CATEGORIES } from "../constants/categories";
import "../styles/Pilates.css";

const Pilates = () => {
  const { translations, isLoading } = useTranslation("pilatesPage");
  const [pilatesImage, setPilatesImage] = useState(null);
  const [isImagesLoading, setIsImagesLoading] = useState(true);

  useEffect(() => {
    const getPilatesImage = async () => {
      try {
        const [image] = await fetchImages(CATEGORIES.PILATES);
        setPilatesImage(image);
      } catch (error) {
        console.error("Error fetching pilates image:", error);
      } finally {
        setIsImagesLoading(false);
      }
    };

    getPilatesImage();
  }, []);

  if (isLoading) return <div>Loading translations...</div>;
  if (!translations)
    return <div>No translations available for Pilates page.</div>;

  return (
    <div>
      <div className="pilates-container">
        <div className="hero-section">
          <div className="image-content">
            {isImagesLoading ? (
              <p>Loading image...</p>
            ) : (
              pilatesImage && (
                <img
                  src={pilatesImage?.src?.original}
                  alt={pilatesImage?.alt || "Pilates at KoepelGym"}
                  className="hero-image"
                />
              )
            )}
          </div>
          <div className="text-content">
            <h1>{translations.title}</h1>
            <p>{translations.subtitle}</p>
            <p>{translations.description}</p>
            <p>{translations.description2}</p>
            <p>{translations.description3}</p>
            <p>{translations.description4}</p>
            <p>{translations.priceInfo}</p>
            <Link href="/free-trial" className="cta-button">
              {translations.freeTrialText || "Free Trial Lesson"}
            </Link>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h2>{translations.tryForFree}</h2>
        <p>
          {translations.description4 ||
            "Pilates is the perfect way to build strength without heavy weights, improve your posture, and reduce stress."}
        </p>

        <form className="trial-form">
          <div className="form-group">
            <label htmlFor="name">{translations.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={translations.placeholderName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{translations.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={translations.placeholderEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{translations.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={translations.placeholderPhone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comments">{translations.comments}</label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              placeholder={translations.placeholderComments}
            ></textarea>
          </div>
          <button type="submit" className="send-button">
            {translations.sendButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pilates;
