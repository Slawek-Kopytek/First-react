import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>Interesting things I want to check out</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImage={this.props.titleImage}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle='Animals' />
          <Column columnTitle='Plants' />
          <Column columnTitle='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
