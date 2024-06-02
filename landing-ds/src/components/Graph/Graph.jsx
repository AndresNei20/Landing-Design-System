import React, { useState } from 'react';
import './Graph.css';

export const Graph = () => {
  const [hovered, setHovered] = useState(false);

  return (

    <img 
      src={hovered ? "https://i.ibb.co/jHZRT55/Graph2.png" : "https://i.ibb.co/kS4SB9M/graph1.png"}
      className={hovered ? "graph hovered" : "graph"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      alt="graph"
    />
   
  );
};