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
  const yamaha =useGLTF('./yamaha/scene.gltf')
  const eris = useGLTF('./eris/scene.gltf')

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
          //rotec
          // scale={ 0.13}
          // position={ [-0.5 , -0.96, 0]}
          // rotation={[-1.65, -3.9, 1.7]}
          
          //keyboard
          scale={ 25}
          position={ [0, -1.8, 0]}
          rotation={[-1.65, -5, 1.7]}
          
          //yamaha
          // scale={ 0.15}
          // position={ [0, -0.8, 0]}
          // rotation={[-1.65, -5, 1.7]}

          //eris
          // scale={ 12}
          // position={ [0, -1.8, 2.5]}
          // rotation={[-1.70, -4.7, 1.69]}

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