 import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { extend } from '@react-three/fiber'
import { Light } from 'three'

const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  const mixer = useGLTF('./mixer/scene.gltf')
  const keyboard = useGLTF('./keyboards/scene.gltf')
  // const materialLoader = MTLLoader().setPath('./soundsystem/').load("sound_system_model.mtl");
  // const objLoader = OBJLoader().setMaterials(materialLoader).load("sound_system_model.obj");
  

  return (
    
      <mesh>
        <directionalLight
          position={[3.1, 2.0, 2.4]}
          castShadow
          intensity={1.5}
        />
        <ambientLight />
        <hemisphereLight intensity={0.25} groundColor='black' />
        <spotLight
          position={[-50, 10, 10]}
          angle={10}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
       
        <pointLight intensity={1} />
        <primitive
          object={keyboard.scene}
          // scale={ 0.13}
          // position={ [-0.5 , -0.96, 0]}
          // rotation={[-1.65, -3.9, 1.7]}
          //rotec
          scale={ 25}
          position={ [0.5, -0.6, 0]}
          rotation={[-1.65, -5, 1.7]}

        />
      </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
}


export default ComputersCanvas