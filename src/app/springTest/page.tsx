'use client'
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


export default function MyComponent() {
  const parallax = useRef<IParallax>(null!)
  return (
      <div style={{ width: '100%', height: '100%' }}>
              <Parallax ref={parallax} pages={1}>
                <ParallaxLayer>Page under construction</ParallaxLayer>
              </Parallax>
      </div>
  )
}