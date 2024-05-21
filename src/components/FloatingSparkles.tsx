import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei';

export const FloatingSparkles = () => {
  return (
    <Canvas>
      <group scale={10}>
        <Sparkles size={10} opacity={0.8} />
      </group>
    </Canvas>
  );
};
