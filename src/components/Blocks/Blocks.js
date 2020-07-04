import React, { createContext, useRef, useContext } from "react";
import { useFrame, useThree } from "react-three-fiber";
import lerp from "lerp";
import store from "../../store";

const offsetContext = createContext(0)

//This Block wraps the offset that it is given into a context provider so that nested blocks 
//and components can read it out. Without an offset it falls back to the parent offset.

const Block = ({ children, offset, factor, ...props }) => {

  const { offset: parentOffset, sectionHeight } = useBlock()
  const ref = useRef()
  offset = offset !== undefined ? offset : parentOffset

  useFrame(() => {
    const curY = ref.current.position.y
    const curTop = store.top.current
    ref.current.position.y = lerp(curY, (curTop / store.zoom) * factor, 0.1)
  })
  return (
    <offsetContext.Provider value={offset}>
      <group {...props} position={[0, -sectionHeight * offset * factor, 3]}> 
        <group ref={ref}>{children}</group>
      </group>
    </offsetContext.Provider>
  )
};

//Allows any component to access block-specific data.

const useBlock = () => {
  
  const { sections, pages, zoom } = store
  const { size, viewport } = useThree()
  const offset = useContext(offsetContext)
  const viewportWidth = viewport.width
  const viewportHeight = viewport.height
  const canvasWidth = viewportWidth / zoom
  const canvasHeight = viewportHeight / zoom
  const mobile = size.width < 700
  const margin = canvasWidth * (mobile ? 0.2 : 0.1)
  const contentMaxWidth = canvasWidth * (mobile ? 0.95 : 0.90) //(mobile ? 0.8 : 0.6)
  const sectionHeight = (canvasHeight / zoom) * ((pages - 1) / (sections - 1))
  
  return {
    viewport,
    offset,
    viewportWidth,
    viewportHeight,
    canvasWidth,
    canvasHeight,
    mobile,
    margin,
    contentMaxWidth,
    sectionHeight
  }
};

export { Block, useBlock };
