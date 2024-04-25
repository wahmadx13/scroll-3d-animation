"use client";

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

const Model = () => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);

  const scroll = useScroll();

  useEffect(() => {
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);

  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"]?.getClip().duration * scroll.offset) / 2)
  );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
