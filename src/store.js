import { createRef } from "react"

const store = {
  sections: 9,
  pages: 8,
  zoom: 75,
  top: createRef(),
  addIpsum: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  content: {
    why: `Building dynamic scene graphs declaratively with re-usable components makes dealing with Threejs easier and brings order and sanity to your codebase. These components react to state changes, are interactive out of the box and can tap into React's infinite ecosystem.`,
    limitations: `None. Everything that works in Threejs will work here. In contrast to "bindings" where a library ships/maintains dozens of wrapper components, it just reconciles JSX to Threejs dynamically: <mesh /> simply is another expression for new THREE.Mesh(). It does not know or target a specific Threejs version nor does it need updates for modified, added or removed upstream features.`,
    isItSLower: `No. Rendering performance is up to Threejs and the GPU. Components may participate in the renderloop outside of React, without any additional overhead. React is otherwise very efficient in building and managing component-trees, it could potentially outperform manual/imperative apps at scale.`,
    images: ["/Cold_Mountians.jpg", "/Cold_Mountians1.jpg", "/Cold_Mountians2.jpg"]
  },
  demos: [
    {
      title: `Basic Demo`,
      href: `https://codesandbox.io/embed/rrppl0y8l4`,
      src: `https://camo.githubusercontent.com/e396d1b1c3940b01eee8f917c87db723da2333ec/68747470733a2f2f692e696d6775722e636f6d2f7353344172725a2e676966`,
      dataCanonicalSrc: `https://i.imgur.com/sS4ArrZ.gif`
    },
    {
      title: `Game`,
      href: `https://codesandbox.io/embed/r3f-game-i2160`,
      src: `https://camo.githubusercontent.com/a16ced01747a62617e248f6f886e6f0d90875d5f/68747470733a2f2f692e696d6775722e636f6d2f567964436836572e676966`,
      dataCanonicalSrc: `https://i.imgur.com/VydCh6W.gif`
    },
    {
      title: `Gamma Correction`,
      href: `https://codesandbox.io/embed/r3f-gamma-correction-kmb9i`,
      src: `https://camo.githubusercontent.com/ce1c0c0e62bac842ee9f633ccbae8739d7fba9a5/68747470733a2f2f692e696d6775722e636f6d2f65364e68527a362e676966`,
      dataCanonicalSrc: `https://i.imgur.com/e6NhRz6.gif`
    },
    {
      title: `Montage`,
      href: `https://codesandbox.io/embed/r3f-montage-jz9l97qn89`,
      src: `https://camo.githubusercontent.com/edb7eaa6dc36e1ce6e365f9a3159930dfbaf059e/68747470733a2f2f692e696d6775722e636f6d2f6e7852537450382e676966`,
      dataCanonicalSrc: `https://i.imgur.com/nxRStP8.gif`
    },
    {
      title: `Sparks`,
      href: `https://codesandbox.io/embed/r3f-sparks-sbf2i`,
      src: `https://camo.githubusercontent.com/f7889cc40920e8f4b01556114d92856aef912c27/68747470733a2f2f692e696d6775722e636f6d2f466b34345475362e676966`,
      dataCanonicalSrc: `https://i.imgur.com/Fk44Tu6.gif`
    },
    {
      title: `Instanced Colors`,
      href: `https://codesandbox.io/embed/r3f-instanced-colors-8fo01`,
      src: `https://camo.githubusercontent.com/8cfcac1c921e7362ca7bee7ef0864db434e76f79/68747470733a2f2f692e696d6775722e636f6d2f64614a494456452e676966`,
      dataCanonicalSrc: `https://i.imgur.com/daJIDVE.gif`
    },
    {
      title: `Moksha`,
      href: `https://codesandbox.io/embed/r3f-moksha-f1ixt`,
      src: `https://camo.githubusercontent.com/850bc5f9df5826b591c6d1324d2088cd0559e56d/68747470733a2f2f692e696d6775722e636f6d2f6c747a6e4f4a312e676966`,
      dataCanonicalSrc: `https://i.imgur.com/ltznOJ1.gif`
    },
    {
      title: `Bones`,
      href: `https://codesandbox.io/embed/r3f-bones-3i7iu`,
      src: `https://camo.githubusercontent.com/a4923b29a950027703372cc6a57e3fa229b74e87/68747470733a2f2f692e696d6775722e636f6d2f4f5a64537951792e676966`,
      dataCanonicalSrc: `https://i.imgur.com/OZdSyQy.gif`
    },
    {
      title: `Floating Diamonds`,
      href: `https://codesandbox.io/embed/r3f-floating-diamonds-prb9t`,
      src: `https://camo.githubusercontent.com/481488d2684c26ee2cd0c0f78d4aa5b708c502d0/68747470733a2f2f692e696d6775722e636f6d2f575744626357472e676966`,
      dataCanonicalSrc: `https://i.imgur.com/7E3XKSG.gif`
    },
    {
      title: `Volumetric Light`,
      href: `https://codesandbox.io/embed/r3f-volumetric-light-w633u`,
      src: `https://camo.githubusercontent.com/a2bdb4a7c8a99658a92e0213985d95a05ea3fbd1/68747470733a2f2f692e696d6775722e636f6d2f374533584b53472e676966`,
      dataCanonicalSrc: `https://i.imgur.com/7E3XKSG.gif`
    },
    {
      title: `Particles`,
      href: `https://codesandbox.io/embed/r3f-particles-ii-pjcc1`,
      src: `https://camo.githubusercontent.com/c7af298fcd83f156be92a16e87ac4a5b3e9841ed/68747470733a2f2f692e696d6775722e636f6d2f514731344941432e676966`,
      dataCanonicalSrc: `https://i.imgur.com/QG14IAC.gif`
    },
    {
      title: `Gltf Fonts`,
      href: `https://codesandbox.io/embed/r3f-gltf-fonts-c671i`,
      src: `https://camo.githubusercontent.com/8439570a8e9428bd29a9f6e71eec92226ea2ea7c/68747470733a2f2f692e696d6775722e636f6d2f53485068496c732e676966`,
      dataCanonicalSrc: `https://i.imgur.com/SHPhIls.gif`
    },
    {
      title: `Cannon Physics`,
      href: `https://codesandbox.io/embed/r3f-cannon-physics-nr84m`,
      src: `https://camo.githubusercontent.com/62c284f7abb7958ccf56edf2bea3cb25a789e778/68747470733a2f2f692e696d6775722e636f6d2f4d3972757057502e676966`,
      dataCanonicalSrc: `https://i.imgur.com/M9rupWP.gif`
    },
    {
      title: `Wonderful Chandrasekhar`,
      href: `https://codesandbox.io/embed/wonderful-chandrasekhar-8l9rrj36j0`,
      src: `https://camo.githubusercontent.com/5fa14c91c625e5aea8402a5df5d483d20e693a9a/68747470733a2f2f692e696d6775722e636f6d2f4853544764634f2e676966`,
      dataCanonicalSrc: `https://i.imgur.com/HSTGdcO.gif`
    },
    {
      title: `Train`,
      href: `https://codesandbox.io/embed/r3f-train-l900i`,
      src: `https://camo.githubusercontent.com/c9ba4eea485a4d2b586719a51dfce2f4fbdeb503/68747470733a2f2f692e696d6775722e636f6d2f4233417a5a56482e676966`,
      dataCanonicalSrc: `https://i.imgur.com/B3AzZVH.gif`
    },
    {
      title: `Particles`,
      href: `https://codesandbox.io/embed/r3f-particles-i-q4d2v`,
      src: `https://camo.githubusercontent.com/2caf254a5774e20bf0bd81bb0157df512e440277/68747470733a2f2f692e696d6775722e636f6d2f587363735767752e676966`,
      dataCanonicalSrc: `https://i.imgur.com/XscsWgu.gif`
    },
  ]
}

export default store;