import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
interface LightsProps {}

const Lights: React.FC<LightsProps> = ({}) => {
  const lightRef: any = useRef();
  return (
    <>
      <ambientLight intensity={0.01} color={"#fff"} />
      <pointLight position={[0, 0, 9]} ref={lightRef} color={"#fff"} />
    </>
  );
};

export default Lights;
