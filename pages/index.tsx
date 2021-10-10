import type { NextPage } from "next";
import { useState } from "react";
import MyCanvas from "../components/three/Canvas";
import Lights from "../components/three/Lights";
import PosAudio from "../components/three/PosAudio";
const Home: NextPage = () => {
  const [showBtn, setShowBtn] = useState(true);
  return (
    <div className="w-full h-screen">
      {showBtn && (
        <div className="absolute inset-0 grid place-items-center">
          <button
            onClick={() => {
              setShowBtn(false);
            }}
            className="bg-gray-400 px-5 py-2 rounded-lg"
          >
            Start
          </button>
        </div>
      )}
      {!showBtn && (
        <MyCanvas lights={<Lights />}>
          <PosAudio init={!showBtn} />
        </MyCanvas>
      )}
    </div>
  );
};

export default Home;
