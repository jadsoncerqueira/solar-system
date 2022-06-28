import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline, classe } = this.props;
    return (
      <h2 className={ classe }>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
  classe: PropTypes.string,
};

Title.defaultProps = {
  headline: '',
  classe: '',
};

export default Title;
