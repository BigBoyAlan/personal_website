import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-card">
        <h3>Advanced State Machines with PostgreSQL</h3>
        <p>Description of the project, challenges, and outcomes. Highlight complexity and impact.</p>
        {/* Add tech stack, link to repo/demo if available */}
      </div>
      <div className="project-card">
        <h3>Milvus Vector Database Implementation</h3>
        <p>Details about the Milvus deployment, use case (e.g., semantic search, recommendation), and results.</p>
        {/* Add tech stack, link to repo/demo if available */}
      </div>
      <div className="project-card">
        <h3>RAG Pipeline Development</h3>
        <p>Explain the RAG pipeline architecture, its purpose, and the technologies involved.</p>
        {/* Add tech stack, link to repo/demo if available */}
      </div>
      <div className="project-card">
        <h3>Fast Inference Model Deployment</h3>
        <p>Describe the model, the deployment strategy for fast inference, and performance metrics.</p>
        {/* Add tech stack, link to repo/demo if available */}
      </div>
      {/* Add more project cards as needed */}
    </section>
  );
};

export default Projects; 