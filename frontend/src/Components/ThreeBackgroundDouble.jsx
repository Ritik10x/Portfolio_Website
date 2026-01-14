import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const DoubleLayerShape = () => {
  const outerRef = useRef();
  const innerRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    outerRef.current.rotation.x += 0.0015;
    outerRef.current.rotation.y += 0.001;
    innerRef.current.rotation.x -= 0.001;
    innerRef.current.rotation.y -= 0.0015;

    // mouse interaction
    outerRef.current.rotation.y += mouse.x * 0.02;
    outerRef.current.rotation.x += mouse.y * 0.02;
  });

  return (
    <>
      <mesh ref={outerRef}>
        <torusKnotGeometry args={[1.4, 0.35, 120, 16]} />
        <meshStandardMaterial wireframe transparent opacity={0.12} color="black" />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <meshStandardMaterial wireframe transparent opacity={0.08} color="black" />
      </mesh>
    </>
  );
};

const ThreeBackgroundDouble = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <DoubleLayerShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackgroundDouble;
