import React from 'react'
import Footer from '../LandingPage/Footer'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-w-screen flex-col items-center bg-white">
        <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}
