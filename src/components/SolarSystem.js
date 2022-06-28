import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title classe="system" headline="Planetas" />
        <ul className="planetList">
          { Planets.map((elem) => (
            <li key={ elem.name }>
              <PlanetCard planetName={ elem.name } planetImage={ elem.image } />
            </li>)) }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
