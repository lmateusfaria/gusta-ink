import React, { useState } from 'react';
import styles from './Carousel.module.css';

/**
 * Carrossel simples para exibir imagens ou conteúdos.
 * @param {Array} items - Array de elementos (imagens ou JSX) para o carrossel.
 */
const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % items.length);
  const prev = () => setCurrent((current - 1 + items.length) % items.length);

  return (
    <div className={styles.carousel}>
      <button onClick={prev} className={styles.arrow}>&lt;</button>
      <div className={styles.item}>{items[current]}</div>
      <button onClick={next} className={styles.arrow}>&gt;</button>
    </div>
  );
};

export default Carousel;
