import React from "react";
import "./Experience.css";

const Experience = () => (
  <div id="experience" className="experience-section">
    <h2 className="experience-title">Experience</h2>
    <div className="experience-grid">
      <div className="experience-item">
        <div className="experience-content">
          <div className="experience-left">
            <div className="experience-header">
              <span className="date-range">Jun 2025 - Sept 2025</span>
              <h3 className="job-title">AI Innovator Intern @ <span className="company">Chewy</span></h3>
            </div>
            <ul className="experience-details">
              <li>Engineered and warehoused ~3M rows and 250 columns of pet, clinic and product data from multiple sources using GraphQL, transforming raw datasets into a uniform, machine-understandable format optimized for downstream processing and analysis.</li>
              <li>Developed a ML model using aggregated data to predict the likelihood of veterinary approval for incoming prescriptions, based on unique characteristics, enhancing decision confidence for both vets and admin staff.</li>
              <li>Built a Knowledge Graph from aggregated data to support LLM decision-making via RAG, leveraging Amazon Titan for vector embeddings and Amazon Neptune for graph construction and querying.</li>
              <li>Developed full-stack web applications using modern technologies</li>
              <li>Created responsive and interactive user interfaces</li>
              <li>Collaborated with design teams on creative projects</li>
            </ul>
          </div>
          <div className="experience-right">
            <h4 className="tech-stack-title">Tech Stack</h4>
            <div className="tech-stack">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="30"/>
              <img src="https://images.icon-icons.com/3912/PNG/512/graphql_logo_icon_248148.png" width="30" alt="GraphQL"/>
              <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-snowflake-icon-download-image_1147140.jpg" width="30" alt="Snowflake"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="30" alt="AWS"/>

              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="30"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="30"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" alt="PyTorch" width="30"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="experience-item">
        <div className="experience-content">
          <div className="experience-left">
            <div className="experience-header">
              <span className="date-range">Apr 2023 - Aug 2024</span>
              <h3 className="job-title">Software Development Engineer @ <span className="company">Mercedes Benz Research and Development India</span></h3>
            </div>
            <ul className="experience-details">
            <li>Engineered a <i>microservices architecture</i> and migrated application <i>data to AWS</i>, achieving a 15ms speed improvement and €5,000 in savings.</li>
            <li>Migrated 60% of the <i>application codebase to Java 11 and Spring Boot 3.3</i> from legacy Java 5. </li>
              <li>Adapted latest unit testing approaches using Junit and Selenium to increase <i>code coverage by 23%</i>, while also developing an AI peer programming tool that reduced unit test creation time by 80%, allowing test automation. </li>
              <li>Improved the <i>DevSecOps score to 80%</i> by resolving critical bugs across all environments, maintaining well-documented code, and actively participating in code reviews and sprint planning.</li>
              <li>Created an AI-powered solution using LLM to monitor production environments and CI/CD pipelines, <i>reducing failure detection time by 60%</i>. </li>
              <li>Enabled automated testing, solution suggestions, and failure report generation, improving issue resolution efficiency by 25%.  </li>
            </ul>
          </div>
          <div className="experience-right">
            <h4 className="tech-stack-title">Tech Stack</h4>
            <div className="tech-stack">
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="30"/>
              <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width="30" alt="Spring"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" width="30" alt="Docker"/>
              <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" width="30" alt="Kubernetes"/>
              <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" width="30" alt="Jenkins"/>
              <img src="https://avatars.githubusercontent.com/u/874086?s=280&v=4" width="30" alt="JUnit"/>
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="30" alt="AWS"/>
              <img src="https://w7.pngwing.com/pngs/992/738/png-transparent-jira-hd-logo-thumbnail.png" width="30" alt="Jira"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/2048px-ChatGPT-Logo.svg.png" width="30" alt="ChatGPT"/>
              <img src="https://code.kx.com/insights/1.0/microservices/img/microservice_icon.png" width="30" alt="Microservices"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience; 