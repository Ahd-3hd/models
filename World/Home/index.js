import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
function useWobble(factor = 1, fn = "sin", cb) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = Math[fn](t) * factor;
    if (cb) cb(t, ref.current);
  });
  return ref;
}
export function Box(props) {
  const ref = useWobble(0.5, "cos");
  useFrame(
    () =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.005)
  );
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry attach="geometry" />
      <MeshWobbleMaterial speed={0.05} attach="material" color={props.color} />
    </mesh>
  );
}
export function Shapes() {
  const {
    viewport: { width, height },
  } = useThree();
  const ringSize = Math.max(3, width / 2);
  return (
    <>
      <Ring
        position={[width * -0.4, height * 0.4, -50]}
        scale={[ringSize / 4, ringSize / 4, 1]}
      />
      <Cross
        position={[width * 0.4, height * 0.4, -1]}
        scale={[100, 100, 1]}
        rotation={[0, 0, Math.PI / 4]}
      />
      <Minus
        position={[0, 0, -800]}
        scale={[100, 100, 100]}
        rotation={[0, 0, Math.PI / 10]}
      />
      <group
        rotation={[Math.PI / 8, 0, 0]}
        position={[-width / 4, -height / 3, -900]}
      >
        <Box scale={[100, 100, 100]} color="white" />
        <Box
          position={[width / 1.5, height / 4, -3]}
          scale={[50, 50, 50]}
          color="hotpink"
        />
        {/* <Lights /> */}
      </group>
    </>
  );
}

function Ring(props) {
  return (
    <mesh {...props}>
      <ringBufferGeometry attach="geometry" args={[1, 1.4, 64]} />
      <MeshWobbleMaterial
        factor={0.5}
        attach="material"
        color="hotpink"
        transparent
        opacity={0.1}
        toneMapped={false}
      />
    </mesh>
  );
}

function Cross(props) {
  const inner = useRef();
  const ref = useWobble(0.1, "sin", () => (inner.current.rotation.z += 0.001));
  return (
    <group ref={ref}>
      <group ref={inner} {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.5]} />
          <meshBasicMaterial
            attach="material"
            color="lightblue"
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, -0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial
            attach="material"
            color="lightblue"
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, 0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial
            attach="material"
            color="lightblue"
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

function Minus(props) {
  const ref = useWobble(0.1, "sin");
  return (
    <group ref={ref}>
      <group {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.7]} />
          <MeshWobbleMaterial
            attach="material"
            color="lightgreen"
            toneMapped={false}
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>
    </group>
  );
}
