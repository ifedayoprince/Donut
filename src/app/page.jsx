'use client'

import Image from 'next/image'
import MyThree from './components/MyThree'
import { useEffect, useRef } from 'react'

export default function Home() {
  let cursor = useRef(null);

  useEffect(()=>{
    function move(mouse) {
      gsap.to(cursor.current, {
        x: mouse.x,
        y: mouse.y
      })
    }
    window.addEventListener("mouseenter", move)
    window.addEventListener("mousemove", move)
  },[])
  return (
    <div className='h-screen w-screen'>
      <MyThree />

    <div ref={cursor} className="cursor pointer-events-none rounded-[50%] w-[5rem] h-[5rem] bg-orange-400 mix-blend-difference
     top-[-2.5rem] left-[-2.5rem] absolute z-30"></div>
      <nav className='w-full p-10 py-6  absolute top-0 left-0 z-10'>
        
        <h1 className='w-full font-bold p-6 px-[3rem] rounded-[50vw] border border-purple-800 bg-[#ff00ff] bg-opacity-30 backdrop-blur-md text-black
        text-start'>SPIRAL</h1>
      </nav>
      <div className="content absolute top-0 left-0 w-full h-full text-black flex justify-center items-center">
        
        <h1 className='text-[10rem] font-extrabold spiral'>SPIRAL</h1>
      </div>
    </div>
  )
}
