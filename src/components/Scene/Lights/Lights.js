import React from "react";
//import { softShadows } from 'drei';
//import {useResource} from 'react-three-fiber';

const Lights = () => {

  //const [ref3, sLight3] = useResource();

  return (
    <>
      <ambientLight 
      color={0x0000ff} 
      intensity={0.15}
      />
      <spotLight
        //ref={ref3}
        //penumbra={1}
        //angle={Math.PI / 2.85}
        intensity={0.75} //2.5
        position={[0, -1, 350]} //0,15,1
        color={0xff0000} //0xd3d3d3
        castShadow
      >
      {/*{sLight3 && <spotLightHelper args={[sLight3]} />}*/}
      </spotLight>
      {/*<directionalLight
      ref={ref3}
      castShadow
      position={[-5, -1, 150]}//{[2.5, 8, 5]}
      intensity={1.5}
      color={0xff0000}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-80}
      shadow-camera-right={80}
      shadow-camera-top={80}
      shadow-camera-bottom={-80}
    >
    {sLight3 && <directionalLightHelper args={[sLight3]} />}
    </directionalLight>*/}
    </>
  );
};

export default Lights;