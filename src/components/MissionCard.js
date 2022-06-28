import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="missionCard" data-testid="mission-card">
        <div className="missionName"><p data-testid="mission-name">{name}</p></div>
        <div className="missionInfo">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

export default MissionCard;
