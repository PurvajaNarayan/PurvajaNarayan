import React from "react";
import "./Projects.css";

const Projects = () => (
  <div id="projects" className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      <div className="project-item">
        <div className="project-image">
          <img src={`${process.env.PUBLIC_URL}/utils/FinanceAdvisor.png`} alt="Real Time Finance Advisor" />
        </div>
        <div className="project-info">
          <h3 className="project-title">Real Time Finance Advisor</h3>
          <a href="https://github.com/PurvajaNarayan/FinanceAdvisor" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src={`${process.env.PUBLIC_URL}/utils/MarketRight.png`} alt="MarketRight: Predictive Lead Scoring" />
        </div>
        <div className="project-info">
          <h3 className="project-title">MarketRight: Predictive Lead Scoring</h3>
          <a href="https://github.com/PurvajaNarayan/MarketRight/tree/main" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src={`${process.env.PUBLIC_URL}/utils/EVcharging.png`} alt="EVCharging" />
        </div>
        <div className="project-info">
          <h3 className="project-title">EV Charging Station Locator and Reservation Service</h3>
          <a href="https://github.com/PurvajaNarayan/EVChargingStation" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src={`${process.env.PUBLIC_URL}/utils/MultiPersonPoseEstimator.png`} alt="Multi-Person Pose Estimator" />
        </div>
        <div className="project-info">
          <h3 className="project-title">Real Time Multi-Person Pose Estimator</h3>
          <a href="https://github.com/PurvajaNarayan/MultiPerson_Pose_Estimator" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src={`${process.env.PUBLIC_URL}/utils/EmotionDetection.png`} alt="Emotion Detection" />
        </div>
        <div className="project-info">
          <h3 className="project-title">Real-Time Emotion-Aware Music Recommender</h3>
          <a href="https://github.com/knie815/CS5100-FAI-Final-Project" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src="https://via.placeholder.com/300x200/FFA500/ffffff?text=Mobile+App" alt="Task Manager" />
        </div>
        <div className="project-info">
          <h3 className="project-title">LLM Debate</h3>
          <a href="https://github.com/yourusername/project6" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src="https://via.placeholder.com/300x200/20B2AA/ffffff?text=API+Service" alt="Weather API" />
        </div>
        <div className="project-info">
          <h3 className="project-title">Weather API</h3>
          <a href="https://github.com/yourusername/project7" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
      
      <div className="project-item">
        <div className="project-image">
          <img src="https://via.placeholder.com/300x200/DC143C/ffffff?text=Game+Dev" alt="Puzzle Game" />
        </div>
        <div className="project-info">
          <h3 className="project-title">Puzzle Game</h3>
          <a href="https://github.com/yourusername/project8" className="github-link" target="_blank" rel="noopener noreferrer">
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects; 