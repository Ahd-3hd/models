import { useRef } from "react";
import { useLoader, useFrame, useThree } from "react-three-fiber";
import { TextureLoader } from "three";
import "./ImageShaderMaterial";
import { useGesture } from "react-use-gesture";
import { useState } from "react";

const MyImg = ({ page }) => {
  const ref = useRef();
  const planeRef = useRef();
  const { size, viewport } = useThree();
  const [timeFactor, setTimeFactor] = useState(0.1);
  const [hovered, setHovered] = useState(false);
  const aspect = size.width / viewport.width;
  const [texture1, displacement] = useLoader(TextureLoader, [
    "/img/ahd.png",
    "/img/displace1_dribbble.png",
  ]);
  useFrame(() => {
    setTimeFactor((prev) => prev + 0.1);
    // console.log(planeRef.current.position.y);
    // console.log(size.height);
    // if (planeRef.current.position.y < viewport.height * page) {
    //   planeRef.current.position.y += 1;
    // } else if (planeRef.current.position.y > viewport.height * page) {
    //   planeRef.current.position.y -= 1;
    // }
    // planeRef.current.rotation.x = mouse.current[1] * 0.0001;
    // planeRef.current.rotation.y = mouse.current[0] * 0.0001;
    // planeRef.current.position.y = scrollY * 0.2;
    // ref.current.time += timeFactor;
    // ref.current.progress = 0.5;
    if (ref.current && ref.current.progress) {
      if (page.page !== 1) {
        if (planeRef.current.scale.x > 0) {
          planeRef.current.scale.x -= 0.01;
          planeRef.current.scale.y -= 0.01;
          planeRef.current.scale.z -= 0.01;
        }
      } else {
        if (planeRef.current.scale.x < 1) {
          planeRef.current.scale.x += 0.01;
          planeRef.current.scale.y += 0.01;
          planeRef.current.scale.z += 0.01;
        }
      }
      if (!hovered) {
        if (ref.current.progress < 0.1) {
          ref.current.progress += 0.01;
        }
      } else {
        if (ref.current.progress > 0) {
          ref.current.progress -= 0.01;
        }
      }
    }
  });

  const bind = useGesture({
    onHover: (state) => {
      if (state.hovering) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    },
  });
  if (size.width < 1024) return null;
  return (
    <mesh
      {...bind()}
      position={[size.width * 0.2, -(size.height / 2) * 0.05, 0]}
      ref={planeRef}
      scale={[0, 0, 0]}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[size.width / 3.5, size.width / 3.5]}
      />
      <imageFadeMaterial
        ref={ref}
        attach="material"
        myimg={texture1}
        displacement={displacement}
        time={timeFactor}
        progress={0.02}
      />
    </mesh>
  );
};

export default MyImg;
