import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './MissionCard.css';

class Missions extends Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title classe="titulo" headline="Missões" />
        <ul className="missionList">
          { missions.map((elem) => (
            <li key={ elem.name }>
              <MissionCard
                name={ elem.name }
                year={ elem.year }
                country={ elem.country }
                destination={ elem.destination }
              />
            </li>)) }
        </ul>
      </div>
    );
  }
}

export default Missions;
