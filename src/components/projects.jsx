import React from 'react';
import { projects } from './projects-info';
import '../project.css';

function Projects() {
  return (
    <div>
      <div className="card_container">
        <ul className="grid-container">
          {projects.map((cards) => (
            <li className="project-container" key={cards.id}>
              <h2 className="title">{cards.project}</h2>
              <span className="discript">{cards.description}</span>
              <div className="seperator">
                <p>
                  <span className="tech">Technology: </span>
                  <span className="technology">{cards.developed_in}</span>
                  <span className="technology">{cards.developed_in2}</span>
                </p>
                <p>
                  <span className="pair">Pair_Programmed: </span>
                  <span className="pair_program">{cards.Pair_Programmed}</span>
                </p>
                <p>
                  <span className="api">API: </span>
                  <span className="api">{cards.API}</span>
                </p>
                <a href={cards.Repo}><button type="button" className="site">Live Demo</button></a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
