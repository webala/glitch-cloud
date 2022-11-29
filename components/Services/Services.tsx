import React from 'react'
import Portrait from './components/Portrait'
import Ruracio from './components/Ruracio'
import Weddings from './components/Weddings'
import style from './Services.module.scss'

function Services() {
  return (
    <div className={style.services}>
        <h1 className={style.services_heading}>Our Services</h1>
        <Weddings />
        <Ruracio />
        <Portrait />
    </div>
  )
}

export default Services