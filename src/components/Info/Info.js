import React from 'react';
import styles from './Info.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { InfoContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={InfoContent.title} image={InfoContent.image} />
    <h2 className={styles.subtitle}>{InfoContent.subtitle}</h2>
    <p>{InfoContent.text}</p>
  </Container>
);

export default Info;