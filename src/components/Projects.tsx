import React from 'react';
// Import the icons
import stateMachineIcon from '../assets/Advanced_state_machine.png';
import milvusIcon from '../assets/milvus.png';
import ragIcon from '../assets/rag_pipeline.png';
import inferenceIcon from '../assets/fast_inference_deployment.png';

const Projects: React.FC = () => {
  // Data structure for projects (optional but recommended)
  const projects = [
    {
      title: 'Advanced State Machines with PostgreSQL',
      description: 'Description of the project, challenges, and outcomes. Highlight complexity and impact.',
      icon: stateMachineIcon
    },
    {
      title: 'Milvus Vector Database Implementation',
      description: 'Details about the Milvus deployment, use case (e.g., semantic search, recommendation), and results.',
      icon: milvusIcon
    },
    {
      title: 'RAG Pipeline Development',
      description: 'Explain the RAG pipeline architecture, its purpose, and the technologies involved.',
      icon: ragIcon
    },
    {
      title: 'Fast Inference Model Deployment',
      description: 'Describe the model, the deployment strategy for fast inference, and performance metrics.',
      icon: inferenceIcon
    }
    // Add more projects here
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Icon Container */}
              {project.icon && (
                <div className="project-icon-container">
                  <img src={project.icon} alt={`${project.title} icon`} className="project-icon" />
                </div>
              )}
              {/* Text Content Container */}
              <div className="project-text-content">
                <h3>{project.title}</h3>
                {/* Description wrapped for hover effect */}
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
              {/* Links/Tech Stack could go here or inside text-content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 