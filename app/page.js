import React from "react";

export default function Home() {
  const powerBIUrl =
    "https://app.powerbi.com/view?r=eyJrIjoiM2VkNTMzYzMtNTg0My00ZDg2LWIyMjktNTUyZGVhNzFlNDJmIiwidCI6IjNmMDE5MmQwLTViZDItNDQzZS1hYzdmLWYyYjczZDIwODgyYyIsImMiOjR9";
  const figmaUrl =
    "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/UefEITYn4Jb7Mdlc2FVPBW/ContronX?scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=22-529&starting-point-node-id=22%3A529";

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <section className="section">
        <h2>Figma Design</h2>
        <div className="iframe-wrapper">
          <iframe title="Figma Design" className="iframe-content" src={figmaUrl} allowFullScreen />
        </div>
      </section>

      <section className="section">
        <h2>Power BI Dashboard</h2>
        <div className="iframe-wrapper">
          <iframe
            title="Power BI Dashboard"
            className="iframe-content"
            src={powerBIUrl}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}
