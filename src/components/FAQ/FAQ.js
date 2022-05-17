import React from 'react';
import styles from './FAQ.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQContent } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContent.title} image={FAQContent.image} />
    <h2 className={styles.subtitle}>{FAQContent.subtitle}</h2>
    <p>{FAQContent.text}</p>
  </Container>
);

export default FAQ;