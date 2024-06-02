import React, { useState } from 'react';
import './Graph.css';

export const Graph = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "../../../../public/graph2.svg" : "../../../../public/graph.svg"}
      className={hovered ? "graph hovered" : "graph"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="graph"
    />
   
  );
};