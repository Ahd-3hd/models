import {
  Center,
  OrbitControls,
  softShadows,
  OrthographicCamera,
} from "@react-three/drei";
import { Suspense, memo, useContext, useEffect, useRef } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { Flex, Box } from "@react-three/flex";
import ScrollContext from "../context/scrollContext";
import dynamic from "next/dynamic";

// import Fox from "./Fox";
// import MyImg from "./MyImg";
// import Particles from "./Particles";
// import Bird from "./Bird";

const Fox = dynamic(import("./Fox"));
const MyImg = dynamic(import("./MyImg"));
const Particles = dynamic(import("./Particles"));
// const Bird = dynamic(import("./Bird"));

const Scene = ({ page }) => {
  const { size, viewport, aspect, gl } = useThree();
  // gl.autoClearColor = false;
  // gl.setClearAlpha(0);
  const viewSize = size.width;

  useEffect(() => {
    console.log(aspect);
    console.log(viewSize);
  }, [aspect]);

  return (
    <>
      <Suspense fallback={null}>
        <Fox page={page} />
      </Suspense>
      <Suspense fallback={null}>{/* <Bird /> */}</Suspense>
      <Suspense fallback={null}>
        <MyImg page={page} />
      </Suspense>
      <Suspense fallback={null}>
        <Particles page={page} />
      </Suspense>
    </>
  );
};

const World = () => {
  const context = useContext(ScrollContext);
  return (
    <Canvas
      // gl={{
      //   preserveDrawingBuffer: true,
      // }}
      orthographic={true}
      // camera={{ fov: 0, near: 2000, far: -2000 }}
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
      <OrthographicCamera
        makeDefault
        // left={(-aspect * viewSize) / 2}
        // right={(aspect * viewSize) / 2}
        // top={viewSize / 2}
        // bottom={-viewSize / 2}
        near={-1000}
        far={1000}
      />
      <ambientLight color="white" intensity={0.5} />
      {/* <directionalLight intensity={0.1} position={[0, -50, 0]} /> */}
      {/* <OrbitControls /> */}
      {/* <ambientLight color="white" intensity={0.7} />
      <spotLight intensity={0.2} position={[70, 70, 70]} /> */}
      <Scene page={context} />
    </Canvas>
  );
};

export default memo(World);
