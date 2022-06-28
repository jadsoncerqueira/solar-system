import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  Planet = (pla) => `Planeta ${pla}`;

  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetCard" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img
          className="imagemPlaneta"
          src={ planetImage }
          alt={ this.Planet(planetName) }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

export default PlanetCard;
