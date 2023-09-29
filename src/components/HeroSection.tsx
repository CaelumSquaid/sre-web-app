import Image from 'next/image'
import Background from "@/assets/hero-background.jpg"
import React from 'react'

function HeroSection() {
  return (
    <section className="h-full w-full flex justify-center bg-cover bg-no-repeat bg-hero-image">
        {/* <Image src={Background} alt="logo" className="aspect-auto"/> */}
    </section>
  )
}

export default HeroSection