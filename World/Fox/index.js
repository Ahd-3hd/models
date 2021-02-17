import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/Fox.gltf");
const Fox = ({ page }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  const { size, viewport, aspect } = useThree();
  useEffect(() => {
    actions.Survey.play();
  }, []);

  return (
    <mesh
      scale={[
        viewport.width * 0.0025,
        viewport.width * 0.0025,
        viewport.width * 0.0025,
      ]}
      rotation={[0, -Math.PI / 5, 0]}
      position={[0, -viewport.height / 3, 0]}
    >
      <group ref={group} dispose={null}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          material-color="grey"
          material={materials.fox_material}
          geometry={nodes.fox.geometry}
          skeleton={nodes.fox.skeleton}
        />
      </group>
    </mesh>
  );
};
export default Fox;
