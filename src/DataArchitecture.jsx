import React from 'react';
import './DataArchitecture.css';

const DataArchitecture = () => {
  return (
    <div className="architecture-container">
      {/* Cloud Platforms */}
      <div className="cloud-platforms">
        <div className="cloud-pill aws">AWS</div>
        <div className="cloud-pill azure">Azure</div>
        <div className="cloud-pill gcp">GCP</div>
      </div>

      <div className="architecture-grid">
        {/* Data Sources */}
        <div className="column data-sources">
          <h4 className="column-title">DATA SOURCES</h4>
          
          <div className="node source-node">
            <h5>Event Streams</h5>
            <p>Kafka • Event Hub</p>
          </div>
          
          <div className="node source-node">
            <h5>Object Storage</h5>
            <p>S3 • ADLS • GCS</p>
          </div>
          
          <div className="node source-node">
            <h5>Relational DB</h5>
            <p>Postgres • Oracle • MySQL</p>
          </div>
          
          <div className="node source-node">
            <h5>SaaS / Files</h5>
            <p>REST APIs • SFTP • CDC</p>
          </div>
        </div>

        {/* Connections (Left) - Simplified as visual lines via CSS for static display or simple SVG */}
        <div className="column connections">
          <svg className="conn-svg">
             {/* Lines can be drawn dynamically or hardcoded, using flex layout makes direct SVG lines tricky without absolute positioning. We'll use absolute positioned lines in CSS or simple dots. */}
          </svg>
        </div>

        {/* Processing Layer */}
        <div className="column processing-layer">
          <h4 className="column-title">PROCESSING LAYER</h4>
          
          <div className="node process-node">
            <h5>Batch & Stream</h5>
            <p>Spark • Flink • Dataflow</p>
          </div>
          
          <div className="node process-node">
            <h5>Transform</h5>
            <p>ADF • GLUE • BigQuery</p>
          </div>
          
          <div className="node process-node">
            <h5>AI / ML Ops</h5>
            <p>SageMaker • AzureML • Vertex</p>
          </div>
        </div>

        {/* Connections (Right) */}
        <div className="column connections">
           {/* SVG connections */}
        </div>

        {/* Destinations */}
        <div className="column destinations">
          <h4 className="column-title">DESTINATIONS</h4>
          
          <div className="node dest-node">
            <h5>Data Warehouse</h5>
            <p>Redshift • Synapse • BigQuery</p>
          </div>
          
          <div className="node dest-node">
            <h5>BI & Analytics</h5>
            <p>Power BI • Tableau • Looker</p>
          </div>
          
          <div className="node dest-node">
            <h5>Data Products</h5>
            <p>APIs • Delta Share • Catalog</p>
          </div>
          
          <div className="node dest-node">
            <h5>ML Endpoints</h5>
            <p>SageMaker • AML • Vertex AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataArchitecture;
