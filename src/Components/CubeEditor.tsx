import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import Cube from './Cube';
import InputPanel from './InputPanel';
import { CubeDimensions } from '../Types/CubeDimensions';

const CubeEditor: React.FC = () => {
  const [dimensions, setDimensions] = useState<CubeDimensions>({ width: 3, height: 3, depth: 3 });
  const [vertices, setVertices] = useState<number[]>([0, 0, 0, 1, 0, 0, 0, 1, 0]);

  const updateCube = () => {
    fetch(`${import.meta.env.VITE_API_URL}/cube`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dimensions),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data)) {
          setVertices(data);
        } else {
          console.error('Invalid vertices data:', data);
        }
      })
      .catch((error) => console.error('Error updating cube dimensions:', error));
  };

  useEffect(() => {
    updateCube();
  }, [dimensions]);

  return (
    <>
      <Canvas>
        <Cube vertices={vertices} />
        <ambientLight intensity={0.1} />
      </Canvas>
      <InputPanel onInputChanged={setDimensions}/>
    </>
  );
};

export default CubeEditor;
