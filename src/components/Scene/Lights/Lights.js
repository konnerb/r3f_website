import React from "react";
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
        position={[0, -5, 300]} //0,15,1
        color={0xff0000} //0xd3d3d3
        castShadow
      >
      {/*{sLight3 && <spotLightHelper args={[sLight3]} />}*/}
      </spotLight>
    </>
  );
};

export default Lights;