import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/chair.gltf");
const Chair = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/chair.gltf");
  return (
    <group ref={group} dispose={null} position={[0, -1, 3]}>
      <mesh
        material-color="saucy"
        material={materials.chair}
        geometry={nodes.koltuk.geometry}
        position={[0, 0, 0]}
        rotation={[0, -0.5, 0]}
      ></mesh>
    </group>
  );
};
export default Chair;
