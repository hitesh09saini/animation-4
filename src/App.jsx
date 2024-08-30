import React from "react";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import { OrbitControls, ScrollControls } from "@react-three/drei";
const App = () => {
  return (
    <div className="h-screen flex justify-center items-center relative bg-[#8F00E3]">
      <div className=" w-[100vw] text-[#6dfc00]  rubik-mono-one-regular text-[250px] absolute top-0  font-bold">
        <div className=" w-full  relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
            <span className="pr-[100px]">ASUS</span>
          </div>
        </div>
        <style jsx>{`
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            50%{
             color: #bf1aed;
            }
            100% {
              transform: translateX(-100%);
              color: #1adced;
            }
          }
        `}</style>
      </div>
      <Canvas camera={{ fov: 10, position: [0, -2, 50] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <ScrollControls pages={3}>
          <Laptop />
        </ScrollControls>
      </Canvas>
      <button className="absolute border p-2 rounded-xl  bottom-0 left-0 text-white m-4">
        &#8595; Scroll for open Laptop
      </button>
      <p className="absolute bottom-0 right-0 text-white p-4">
        Made with ❤️ @hiteshsaini_09
      </p>
    </div>
  );
};

export default App;
