import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
