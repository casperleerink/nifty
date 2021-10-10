import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

interface CanvasProps {
  lights: React.ReactNode;
}

const MyCanvas: React.FC<CanvasProps> = ({ lights, children }) => {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <Suspense fallback={null}>
          {lights}
          <Environment background={true} preset="forest" />
          {children}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MyCanvas;
