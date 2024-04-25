"use client";

import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model from "../Model";

const Loader = () => {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
};

const Scene = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className='relative h-svh'>
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={10}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default Scene;
