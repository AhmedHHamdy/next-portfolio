"use client"

import { useEffect, useRef } from "react"
import Typed from 'typed.js'

export default function TextAnimation() {

  const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Full Stack Software Engineer &amp; Designer', 'Passionate about Front-End development'],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
        })

        return () => {
            typed.destroy()
        }
    }, [])

  return (
    <h3><span className='text-2xl font-semibold text-white' ref={el} /></h3>
  )
}
