import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
const Laptop = () => {
  let model = useGLTF("/laptop.glb");
  let texture = useTexture("/texture.png");
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  const { nodes, materials} = model;
  // materials.monitor.map = texture;
  // materials.monitor.emissive = new THREE.Color(0x6dfc00);
  // materials.monitor.emissiveIntensity = 0;
  // materials.monitor.metalness = 0;
  // materials.monitor.roughness = 1;
  // console.log(materials.monitor);
  

  let data = useScroll();

  
   
  meshes.monitor.rotation.x = THREE.MathUtils.degToRad(90);

  useFrame((state, delta) => {
    meshes.monitor.rotation.x = THREE.MathUtils.degToRad(90-data.offset * 90);
  });

  return (
    <group rotation={[0.5, 0.8, 0]} position={[0, 0, 0]} >
      <primitive object={model.scene} />
    </group>
  );
};

export default Laptop;
