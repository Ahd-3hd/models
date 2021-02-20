import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useEffect, useRef, useContext } from "react";
import { resizeFox } from "../../utils";

// finish canvas first. then depending on it layout the html;

useGLTF.preload("/models/Fox.gltf");
const Fox = ({ page, dimensions }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  const { size, viewport, aspect } = useThree();
  useEffect(() => {
    actions.Survey.play();
  }, []);

  useFrame(() => {
    if (page.page === 1) {
      actions.Survey.fadeOut().stop();
      actions.Walk.fadeIn().play();
      if (group.current.rotation.y < 1.5) {
        group.current.rotation.y += 0.03;
      }
      if (group.current.position.x > -viewport.width * 0.25 + aspect) {
        group.current.position.x -= 4;
      }
      if (group.current.position.y > -viewport.height * 0.15 + aspect) {
        group.current.position.y -= 2;
      }
    }

    if (page.page === 2) {
      actions.Walk.fadeOut().stop();
      actions.Run.fadeIn().play();
      if (group.current.position.x < 0) {
        group.current.position.x += 2;
      }
    }
  });

  return (
    <mesh
      scale={[aspect + 1, aspect + 1, aspect + 1]}
      position={[viewport.width * 0.2 + aspect, 0, 0]}
      rotation={[0, -Math.PI / 5, 0]}
    >
      <directionalLight
        intensity={0.2}
        position={[-50, 150, 150]}
        color="white"
      />
      {/* <spotLight intensity={0.7} position={[70, 100, 70]} /> */}
      <group ref={group} dispose={null}>
        <primitive object={nodes._rootJoint} />

        <skinnedMesh
          material-color="grey"
          material={materials.fox_material}
          geometry={nodes.fox.geometry}
          skeleton={nodes.fox.skeleton}
        ></skinnedMesh>
      </group>
    </mesh>
  );
};
export default Fox;

// useFrame(() => {
//   if (page.page > 0) {
//     // actions.Survey.fadeOut().stop();
//     actions.Walk.fadeIn().play();
//     if (group.current.rotation.y < 2) {
//       group.current.rotation.y += 0.03;
//     }
//     if (group.current.position.y > -(size.height / aspect) * 0.14) {
//       group.current.position.y -= 2;
//     }
//     if (group.current.position.x > viewport.width * -0.17) {
//       group.current.position.x -= 2.6;
//     }
//   }
// });
