import { OrbitControls, softShadows } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Fox from "./Fox";
import { Flex, Box } from "@react-three/flex";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Fox />
      </Suspense>
    </>
  );
};

const World = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        bottom: "0",
        right: "0",
        zIndex: 2,
      }}
    >
      <OrbitControls />
      {/* <ambientLight color="white" intensity={0.7} />
      <spotLight intensity={0.2} position={[70, 70, 70]} /> */}
      <Scene />
    </Canvas>
  );
};

export default World;
