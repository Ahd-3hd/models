import {
  Center,
  OrbitControls,
  softShadows,
  OrthographicCamera,
} from "@react-three/drei";
import { Suspense, memo } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { Flex, Box } from "@react-three/flex";

import Fox from "./Fox";
import Chair from "./Chair";

const Scene = ({ pageY }) => {
  const { size, viewport, aspect } = useThree();
  console.log(size);
  const viewSize = viewport.height;
  const aspectRatio = viewport.width / viewport.height;
  return (
    <>
      <OrthographicCamera
        makeDefault
        left={(-aspectRatio * viewSize) / 2}
        right={(aspectRatio * viewSize) / 2}
        top={viewSize / 2}
        bottom={-viewSize / 2}
        near={-1000}
        far={1000}
      />
      <Suspense fallback={null}>
        <Fox pageY={pageY} />
      </Suspense>
    </>
  );
};

const World = ({ pageY }) => {
  return (
    <Canvas
      colorManagement
      shadowMap
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        bottom: "0",
        right: "0",
        zIndex: 2,
      }}
    >
      <ambientLight color="white" intensity={0.5} />
      {/* <directionalLight intensity={0.1} position={[0, -50, 0]} /> */}
      {/* <OrbitControls /> */}
      {/* <ambientLight color="white" intensity={0.7} />
      <spotLight intensity={0.2} position={[70, 70, 70]} /> */}
      <Scene pageY={pageY} />
    </Canvas>
  );
};

export default memo(World);
