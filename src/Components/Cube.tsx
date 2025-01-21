import { useFrame } from "@react-three/fiber";
import React from "react";
import { BufferAttribute, BufferGeometry } from "three";

type CubeProps = {
  vertices: number[];
};

const Cube: React.FC<CubeProps> = ({ vertices }) => {
  const myMesh = React.useRef<any>();
  const g = new BufferGeometry();
  const positionNumComponents = 3;
  g.setAttribute(
    'position',
    new BufferAttribute(new Float32Array(vertices), positionNumComponents));

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime() * 0.3;
    myMesh.current.rotation.y = clock.getElapsedTime() * 0.3;
  })

  return (
      <mesh ref={myMesh} geometry={g}>
        <meshPhongMaterial />
      </mesh>
  );
}

export default Cube;