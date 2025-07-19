import React from "react";
import "./Contact.css";

const Contact = () => (
  <div id="contact" className="contact-section">
    <h2 className="contact-title">Contact</h2>
    <div className="contact-content">
      <div className="contact-intro">
        <h3>Let's Connect!</h3>
        <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.</p>
      </div>
      
      <div className="contact-cards">
        <div className="contact-card">
          <div className="card-icon">💼</div>
          <h4>LinkedIn</h4>
          <p>Connect with me professionally</p>
          <a href="https://linkedin.com/in/PurvajaNarayana" className="contact-link" target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
        
        <div className="contact-card">
          <div className="card-icon">💻</div>
          <h4>GitHub</h4>
          <p>Check out my code and projects</p>
          <a href="https://github.com/PurvajaNarayan" className="contact-link" target="_blank" rel="noopener noreferrer">
            View Repositories
          </a>
        </div>
        
        <div className="contact-card">
          <div className="card-icon">✉️</div>
          <h4>Email</h4>
          <p>Send me a message directly</p>
          <a href="mailto:narayana.p@northeastern.edu" className="contact-link">
            Send Email
          </a>
        </div>
      </div>
    
    </div>
  </div>
);

export default Contact; 