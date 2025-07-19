import React from "react";
import "../App.css";
import "./About.css";

const About = () => (
  <div className="side-by-side-box">
    <div className="box-image">
      <img src="/utils/ChatGPTpp.png" alt="AI generated profile" />
      <div className="text-section contact-links">
        <a href="mailto:narayana.p@northeastern.edu">💬 Email</a> 
        <a href="https://www.linkedin.com/in/purvaja-narayana/">💼 LinkedIn</a>
        <a href="https://github.com/PurvajaNarayan">🖥️ GitHub</a>
        <a href="">📄 Resume</a>
      </div>
    </div>
    <div className="box-text">
      <div className="skills-section">
        <h4 className="skills-title">👩🏻‍💻 Technical Skills</h4>
        
        <table className="skills-table">
          <tbody>
            <tr>
              <td className="category-cell"><strong>Languages</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  Python, Java, Go, C/C++, C#, JavaScript
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" width="30" alt="C"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" width="30" alt="C#"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" width="30" alt="Java"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" width="30" alt="Go"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="30" alt="JavaScript"/> */}
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="category-cell"><strong>Data Science / ML</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  Pandas, Scikit-learn, PyTorch, TensorFlow, Seaborn, OpenCV, Matplotlib
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" width="30" alt="Pandas"/>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" width="30" alt="Scikit-learn"/>
                  <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" width="30" alt="PyTorch"/>
                  <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" width="30" alt="TensorFlow"/> 
                  <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" width="30" alt="Seaborn"/>
                  <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" width="30" alt="OpenCV"/>
                  <img src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" width="30" alt="Hadoop"/> */}
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="category-cell"><strong>Back-End / Frameworks</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  Node.js, Spring, GraphQL, RestAPI
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="30" alt="Node.js"/>
                  <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" width="30" alt="Spring"/>
                  <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" width="30" alt="GraphQL"/> */}
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="category-cell"><strong>Front-End</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  React, HTML, CSS, Bootstrap
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="30" alt="HTML5"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="30" alt="CSS3"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" width="30" alt="Bootstrap"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="30" alt="React"/> */}
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="category-cell"><strong>DevOps / Cloud</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  AWS, Bash, Docker, Kubernetes, Jenkins, Linux, Git
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="30" alt="AWS"/>
                  <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" width="30" alt="Bash"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" width="30" alt="Docker"/>
                  <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" width="30" alt="Kubernetes"/>
                  <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" width="30" alt="Jenkins"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="30" alt="Linux"/>
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" width="30" alt="Git"/>
                  */}
                </div>
              </td>
            </tr>
            
            <tr>
              <td className="category-cell"><strong>Databases</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  MySQL, PostgreSQL, MongoDB, Redis, DynamoDB
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="30" alt="MySQL"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" width="30" alt="PostgreSQL"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="30" alt="MongoDB"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" width="30" alt="Redis"/> */}
                </div>
              </td>
            </tr>
            <tr>
              <td className="category-cell"><strong>Concepts</strong></td>
              <td className="icons-cell">
                <div className="tech-icons">
                  Object-Oriented Programming, Design Patterns, Microservices, Deep Learning, LLM, RAG, CI/CD, DevSecOps, Data Engineering
                  {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="30" alt="MySQL"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" width="30" alt="PostgreSQL"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="30" alt="MongoDB"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" width="30" alt="Redis"/> */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 className="skills-title">👩🏼‍🎓 Graduating in May 2026</h4>
        <h4 className="skills-title">📍 Open to work anywhere in the US</h4>
        <h4 className="skills-title">👀 Looking for Spring 2026 internship opportunities</h4>

      </div>
    </div>
  </div>
);

export default About; 