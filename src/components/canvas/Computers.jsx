 import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { extend } from '@react-three/fiber'
import { Light } from 'three'

const Computers = () => {

  const [isMobile, setIsMobile] = useState(false);
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const mixer = useGLTF('./mixer/scene.gltf')
  const keyboard = useGLTF('./keyboards/scene.gltf')
  const yamaha =useGLTF('./yamaha/scene.gltf')
  const eris = useGLTF('./eris/scene.gltf')

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
    }

    //the addition and removal of the media query is just a workaround for react
    mediaQuery.addEventListener("change",handleMediaQueryChange);
    mediaQuery.removeEventListener("change",handleMediaQueryChange);

  }, [])
  //also no dependency -> meaning that this effect takes place when the component is rendered

  return (
    
      <mesh>
        <directionalLight
          position={[3.5, 0.7, 1]}
          castShadow
          intensity={1.5}
        />
        <ambientLight />
        <hemisphereLight intensity={0.5} groundColor='white' />
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
          object={eris.scene}
          //rotec
          // scale={ 0.13}
          // position={ [-0.5 , -0.96, 0]}
          // rotation={[-1.65, -3.9, 1.7]}
          
          //keyboard
          // scale={ isMobile? 13 : 25}
          // position={ isMobile?[0, -1, 0]:[0, -1.8, 0]}
          // rotation={[-1.65, -5, 1.7]}
          
          //yamaha
          // scale={ 0.15}
          // position={ [0, -0.8, 0]}
          // rotation={[-1.65, -5, 1.7]}

          //eris
          scale={ isMobile?11:17}
          position={ isMobile?[-1, -0.8, 2.3]:[-1, -1, 3.7]}
          rotation={[-1.70, -4.7, 1.695]}

        />
      </mesh>
  )
}

const ComputersCanvas = ({isMobile}) => {
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