import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
interface PosAudioProps {
  init: boolean;
}

const PosAudio: React.FC<PosAudioProps> = ({}) => {
  // const [analyser, setAnalyser] = useState<THREE.AudioAnalyser | null>(null);
  const mesh = useRef<THREE.Mesh>();
  const state = useThree();
  useEffect(() => {
    //add listener
    const listener = new THREE.AudioListener();
    state.camera.add(listener);

    // create the PositionalAudio object (passing in the listener)
    const sound = new THREE.PositionalAudio(listener);
    sound.setDirectionalCone(180, 260, 0.1);
    // load a sound and set it as the PositionalAudio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("audio/viktor-test.mp3", function (buffer) {
      sound.setBuffer(buffer);
      sound.setRefDistance(1);
      sound.loop = true;
      sound.play();
    });

    mesh.current?.add(sound);
    // setAnalyser(new THREE.AudioAnalyser(sound, 32));
  }, []);

  // useFrame((state) => {
  //   if (analyser) {
  //     const vol = analyser.getAverageFrequency();
  //     console.log(vol);
  //     mesh.current?.scale.set(vol, vol, vol);
  //   }
  // });

  return (
    <>
      <mesh ref={mesh} position={[0, 0, 0.1]} scale={0.3}>
        <sphereBufferGeometry />
        <meshStandardMaterial metalness={1} roughness={0} />
        {/* <PositionalAudio url="/audio/viktor-test.mp3" distance={1} loop /> */}
      </mesh>
      <mesh position={[0, 0, -0.5]}>
        <boxBufferGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial
          metalness={0.5}
          roughness={0}
          transparent={true}
          opacity={0.5}
          color="#ff9999"
        />
      </mesh>
    </>
  );
};

export default PosAudio;
