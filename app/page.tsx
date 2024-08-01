import React from 'react'
import Spline from '@splinetool/react-spline';
import Hero from './hero';
import styles from './page.module.css'
import Footer from './footer';
const homePage = () => {
  return (
    
    <>
    
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
    <Hero />
    <div>
    <Spline scene='https://prod.spline.design/uBxStyySkHaojK6Z/scene.splinecode'/>

    </div>
    </div>
    </>
    
  )
}

export default homePage;
