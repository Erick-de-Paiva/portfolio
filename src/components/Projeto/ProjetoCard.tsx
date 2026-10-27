'use client';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './ProjetoCard.module.css';

export interface ProjetoProps {
  title: string;
  description: React.ReactNode;
  features?: React.ReactNode[];
  technologies: string[];
  images: string[];
  githubUrl?: string;
  category?: string;
}

export default function ProjetoCard({
  title,
  description,
  features = [],
  technologies = [],
  images = [],
  githubUrl,
  category,
}: ProjetoProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <a 
          href={selectedImage} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.imageLink}
          title="Clique para ver a imagem em tamanho real"
        >
          <img src={selectedImage} alt={title} className={styles.image} />
          <span className={styles.zoomHint}>🔍 Ver imagem completa</span>
        </a>
      </div>

      {images.length > 1 && (
        <div className={styles.thumbnailContainer}>
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`${styles.thumbnailBtn} ${
                selectedImage === img ? styles.activeThumbnail : ''
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`${title} screenshot ${idx + 1}`} />
            </button>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {category && <span className={styles.categoryBadge}>{category}</span>}
        </div>

        <p className={styles.description}>{description}</p>

        {features.length > 0 && (
          <div className={styles.featuresSection}>
            <span className={styles.featuresTitle}>Principais recursos:</span>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {technologies.length > 0 && (
          <div className={styles.techTags}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {githubUrl && (
          <div className={styles.actions}>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
              <FaGithub size={18} />
              <span>Código</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
