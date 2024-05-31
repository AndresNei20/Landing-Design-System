import React, { useState } from 'react';
import './Graph.css';

export const Graph = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "src/assets/graph2.svg" : "src/assets/graph.svg"}
      className={hovered ? "graph hovered" : "graph"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="graph"
    />
   
  );
};