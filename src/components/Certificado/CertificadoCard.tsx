import React from 'react';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import styles from './CertificadoCard.module.css';

export interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  technologies?: string[];
  credentialUrl?: string;
  imageUrl?: string;
}

export default function CertificadoCard({
  title,
  issuer,
  date,
  hours,
  technologies = [],
  credentialUrl,
  imageUrl,
}: CertificateProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.imageLink}
            title="Clique para ver a imagem do certificado em tamanho real"
          >
            <img src={imageUrl} alt={title} className={styles.image} />
          </a>
        ) : (
          <div className={styles.placeholderIcon}>
            <FaAward size={40} />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.issuer}>{issuer}</span>
          <span className={styles.date}>
            {date} {hours && `• ${hours}`}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        {technologies.length > 0 && (
          <div className={styles.techTags}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <span>Verificar Credencial</span>
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>
    </div>
  );
}
